import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar, Footer } from '../components/Layout';
import './Pond.css';

interface Bread {
  id: number;
  x: number;
  y: number;
}

const Pond = () => {
  const [goosePos, setGoosePos] = useState({ x: 50, y: 50 });
  const [breads, setBreads] = useState<Bread[]>([]);
  const [score, setScore] = useState(0);
  const pondRef = useRef<HTMLDivElement>(null);

  // Add random bread every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBreads(prev => {
        if (prev.length >= 5) return prev; // Max 5 breads at a time
        return [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 80 + 10, // Keep away from edges
            y: Math.random() * 80 + 10,
          }
        ];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePondClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!pondRef.current) return;

    // Calculate click position relative to the pond container
    const rect = pondRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGoosePos({ x, y });

    // Check if clicked near a bread to "eat" it
    setBreads(prev => {
      const remainingBreads = prev.filter(bread => {
        const distance = Math.sqrt(Math.pow(bread.x - x, 2) + Math.pow(bread.y - y, 2));
        if (distance < 5) {
          setScore(s => s + 1);
          // Optional: Honk sound effect or visual effect here
          return false; // Remove bread
        }
        return true; // Keep bread
      });
      return remainingBreads;
    });
  }, []);

  return (
    <div className="page-pond">
      <Navbar />

      <main className="pond-main">
        <section className="pond-header">
          <h1 className="pond-title">The Pond</h1>
          <p className="pond-subtitle">Click to move the goose and eat the bread! Score: {score}</p>
        </section>

        <section className="pond-game-container">
          <div className="pond-water" ref={pondRef} onClick={handlePondClick}>

            {/* Lily Pads */}
            <div className="lily-pad" style={{ left: '10%', top: '20%' }}></div>
            <div className="lily-pad" style={{ left: '80%', top: '70%', transform: 'scale(1.5)' }}></div>
            <div className="lily-pad" style={{ left: '60%', top: '15%', transform: 'scale(0.8)' }}></div>

            {/* Bread Crumbs */}
            {breads.map(bread => (
              <div
                key={bread.id}
                className="bread-crumb"
                style={{ left: `${bread.x}%`, top: `${bread.y}%` }}
              >
                🍞
              </div>
            ))}

            {/* The Silly Goose */}
            <div
              className="silly-goose-player"
              style={{
                left: `${goosePos.x}%`,
                top: `${goosePos.y}%`,
                // Calculate rotation based on some direction if we wanted,
                // but just translating for now
              }}
            >
              <div className="goose-body">🪿</div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pond;
