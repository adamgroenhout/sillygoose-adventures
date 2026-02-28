import { Link, useLocation } from 'react-router-dom';
import { Footprints, Instagram, Twitter } from 'lucide-react';
import './Layout.css';

export const Navbar = () => {
  const location = useLocation();
  const isExpedition = location.pathname.startsWith('/adventure');
  const isUrban = location.pathname === '/adventure/urban';

  return (
    <nav className={`navbar ${isExpedition ? 'expedition' : 'landing'} ${isUrban ? 'dark' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Footprints className="logo-icon" />
          <span className="logo-text">The Silly Goose</span>
        </Link>
        
        <div className="nav-links">
          {isExpedition ? (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/adventure/alpine" className="nav-link">Adventures</Link>
              <Link to="/adventure/gala" className="nav-link">Gear</Link>
              <Link to="/adventure/urban" className="nav-link">About</Link>
            </>
          ) : (
            <>
              <a href="#pondering" className="nav-link">The Pondering</a>
              <a href="#honk" className="nav-link">The Honk</a>
              <a href="#waddle" className="nav-link">The Waddle</a>
            </>
          )}
          <button className="nav-btn">
            {isExpedition ? 'Book Now' : 'Join the Gaggle'}
          </button>
        </div>
      </div>
    </nav>
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
            <Footprints className="logo-icon" />
            <span className="logo-text">The Silly Goose</span>
          </div>
          <p className="footer-tagline">Sophisticated silliness since 2023.</p>
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
