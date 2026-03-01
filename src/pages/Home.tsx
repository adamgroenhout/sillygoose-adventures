import { useState, useCallback } from 'react';
import { Navbar, Footer } from '../components/Layout';
import { Waves, Mic2, ChefHat, Quote } from 'lucide-react';
import { useSubscribe } from '../hooks/useSubscribe';
import './Home.css';

interface GooseItem {
  id: number;
  left: number;
  animationDuration: number;
  fontSize: number;
}

const Home = () => {
  const { email, setEmail, status, handleSubmit } = useSubscribe();
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
    <div className="page-home">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-card">
              <div className="hero-content">
                <span className="hero-label">EST. SINCE THE EGG</span>
                <h1 className="hero-title">Elegance. Poise. Goose.</h1>
                <p className="hero-subtitle">
                  Experience the unbridled sophistication of simply being a silly goose in a serious world. Honk with dignity.
                </p>
                <button className="hero-btn" onClick={triggerGooseStorm}>Begin the Journey</button>
              </div>
            </div>

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
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="pondering" className="manifesto">
          <div className="container manifesto-grid">
            <div className="manifesto-text">
              <span className="section-label">OUR MANIFESTO</span>
              <h2 className="section-title">The Goose Philosophy</h2>
              <p className="section-desc">
                Our core tenets revolve around the delicate balance of waddling with purpose and honking with unbridled passion. It is not merely a bird; it is a lifestyle.
              </p>
            </div>
            <div className="manifesto-visual">
              <img src="/philosophy.png" alt="The Goose Philosophy" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="waddle" className="features">
          <div className="container features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <Waves size={24} strokeWidth={1.5} />
              </div>
              <h3>The Waddle</h3>
              <p>A movement of pure grace, executed with rhythmic side-to-side precision. To waddle is to arrive without haste.</p>
            </div>
            <div className="feature-card" id="honk">
              <div className="feature-icon-box">
                <Mic2 size={24} strokeWidth={1.5} />
              </div>
              <h3>The Honk</h3>
              <p>A vocal expression that transcends language, echoing through the stillness of the pond. Assert your dominance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <ChefHat size={24} strokeWidth={1.5} />
              </div>
              <h3>The Bread</h3>
              <p>The ultimate pursuit of crumb-based happiness, sought with unyielding determination and minimal remorse.</p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="container quote-content">
            <Quote size={40} className="quote-icon" />
            <blockquote>
              "To err is human; to honk, divine."
            </blockquote>
            <cite>— ANONYMOUS GANDER</cite>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter">
          <div className="container newsletter-box">
            <h2 className="section-title centered">Are You Silly Enough?</h2>
            <p className="centered">Join our exclusive gaggle for daily affirmations of goose-hood and updates on local bread availability.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting'}
              />
              <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Waddling...' : 'Subscribe to the Honk'}
              </button>
            </form>
            {status === 'success' && (
              <p className="newsletter-success centered">Subscribed! Honk honk! A confirmation email is flying your way.</p>
            )}
            {status !== 'success' && (
              <p className="newsletter-disclaimer centered">We respect your privacy. No spam, only honks.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
