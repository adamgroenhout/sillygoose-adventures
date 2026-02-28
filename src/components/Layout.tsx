import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Twitter, Menu, X, Home } from 'lucide-react';
import { GooseFeet } from './GooseFeet';
import './Layout.css';

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isExpedition = location.pathname.startsWith('/adventure');
  const isUrban = location.pathname === '/adventure/urban';

  return (
    <>
      <nav className={`navbar ${isExpedition ? 'expedition' : 'landing'} ${isUrban ? 'dark' : ''}`}>
        <div className="container nav-content">
          <Link to="/" className="logo">
            <GooseFeet className="logo-icon" />
            <span className="logo-text">The Silly Goose</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className={`nav-link home-link ${location.pathname === '/' ? 'active' : ''}`}><Home size={16} className="nav-icon" /> Home</Link>
            <Link to="/adventure/alpine" className={`nav-link ${location.pathname === '/adventure/alpine' ? 'active' : ''}`}>Alpine</Link>
            <Link to="/adventure/gala" className={`nav-link ${location.pathname === '/adventure/gala' ? 'active' : ''}`}>Gala</Link>
            <Link to="/adventure/urban" className={`nav-link ${location.pathname === '/adventure/urban' ? 'active' : ''}`}>Urban</Link>

            <button className="nav-btn">
              Join the Gaggle
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile FAB Menu - Out of nav so fixed position is relative to viewport */}
      <div className={`mobile-fab-container ${isUrban ? 'dark' : ''}`}>
        <div className={`fab-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={`fab-link home-link ${location.pathname === '/' ? 'active' : ''}`}><Home size={16} className="nav-icon" /> Home</Link>
          <Link to="/adventure/alpine" onClick={() => setIsMenuOpen(false)} className={`fab-link ${location.pathname === '/adventure/alpine' ? 'active' : ''}`}>Alpine</Link>
          <Link to="/adventure/gala" onClick={() => setIsMenuOpen(false)} className={`fab-link ${location.pathname === '/adventure/gala' ? 'active' : ''}`}>Gala</Link>
          <Link to="/adventure/urban" onClick={() => setIsMenuOpen(false)} className={`fab-link ${location.pathname === '/adventure/urban' ? 'active' : ''}`}>Urban</Link>
          <button className="nav-btn fab-btn" onClick={() => setIsMenuOpen(false)}>
            Join the Gaggle
          </button>
        </div>
        <button
          className="fab-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  );
};

export const Footer = () => {
  const location = useLocation();
  const isExpedition = location.pathname.startsWith('/adventure');
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${isExpedition ? 'expedition' : 'landing'}`}>
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo small">
            <GooseFeet className="logo-icon" />
            <span className="logo-text">The Silly Goose</span>
          </div>
          <p className="footer-tagline">Sophisticated silliness since 2026.</p>
        </div>
        
        <div className="footer-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Contact Us</Link>
          {isExpedition && <Link to="#">Goose Code of Conduct</Link>}
        </div>

        <div className="footer-social">
          <Instagram size={20} />
          <Twitter size={20} />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} {isExpedition ? 'All Honks Reserved' : 'The Silly Goose. All rights reserved. Do not feed the developers.'}</p>
      </div>
    </footer>
  );
};
