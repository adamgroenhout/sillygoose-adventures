import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface GooseItem {
  id: number;
  left: number;
  animationDuration: number;
  fontSize: number;
}

interface GooseStormContextType {
  triggerGooseStorm: () => void;
}

const GooseStormContext = createContext<GooseStormContextType | undefined>(undefined);

export const GooseStormProvider = ({ children }: { children: ReactNode }) => {
  const [geese, setGeese] = useState<GooseItem[]>([]);

  const triggerGooseStorm = useCallback(() => {
    const newGeese: GooseItem[] = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      animationDuration: 2 + Math.random() * 3,
      fontSize: 2 + Math.random() * 3,
    }));

    setGeese((prev) => [...prev, ...newGeese]);

    // Clean up after the longest animation completes
    setTimeout(() => {
      setGeese((prev) => prev.filter(g => !newGeese.find(ng => ng.id === g.id)));
    }, 5000);
  }, []);

  return (
    <GooseStormContext.Provider value={{ triggerGooseStorm }}>
      {children}
      {/* The Goose Storm overlay */}
      <div className="goose-storm-container">
        {geese.map(goose => (
          <div
            key={goose.id}
            className="goose-storm-item"
            style={{
              left: `${goose.left}vw`,
              animationDuration: `${goose.animationDuration}s`,
              fontSize: `${goose.fontSize}rem`,
            }}
          >
            🪿 HONK
          </div>
        ))}
      </div>
    </GooseStormContext.Provider>
  );
};

export const useGooseStorm = () => {
  const context = useContext(GooseStormContext);
  if (context === undefined) {
    throw new Error('useGooseStorm must be used within a GooseStormProvider');
  }
  return context;
};
