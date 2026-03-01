import { Navbar, Footer } from '../components/Layout';
import { Mountain, Thermometer, Clock, Wheat, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import './Adventure.css';

const Alpine = () => {
  const stats = [
    { label: 'Elevation', value: '4,200m', icon: <Mountain size={18} /> },
    { label: 'Temperature', value: '-15°C', icon: <Thermometer size={18} /> },
    { label: 'Duration', value: '14 Days', icon: <Clock size={18} /> },
    { label: 'Bread Crumbs', value: 'Zero', icon: <Wheat size={18} /> },
  ];

  const loadout = [
    { item: 'Extra-Small Hiking Boots', weight: '85g', category: 'Footwear', status: 'Packed' },
    { item: 'Emergency Sourdough', weight: '450g', category: 'Nutrition', status: 'Packed' },
    { item: 'Honk Amplifier 3000', weight: '210g', category: 'Tech', status: 'Pending' },
    { item: 'Miniature Skis', weight: '1.2kg', category: 'Transport', status: 'Packed' },
  ];

  return (
    <div className="page-adventure alpine">
      <Navbar />
      
      <main>
        {/* Expedition Hero */}
        <section className="expedition-hero alpine-bg">
          <div className="container">
            <div className="hero-content">
              <span className="exp-badge">Expedition #042</span>
              <h1 className="exp-title">The Alpine Solitude</h1>
              <p className="exp-desc">
                Where the air is thin, the silence is profound, and the honks echo into eternity. A journey for the boldest of waterfowl.
              </p>
              <div className="hero-actions">
                <a href="https://maps.app.goo.gl/ucWzzhGfr3aefvWz8" className="btn-secondary">View Map</a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="stats-section">
          <div className="container stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className="overview">
          <div className="container overview-grid">
            <div className="overview-text">
              <h2 className="overview-title">Expedition Overview</h2>
              <p>
                Our intrepid goose explorer braved the chilling winds of the High Alps, seeking not bread, but enlightenment. This journey tested the limits of webbed feet and down feathers against the ruthless granite faces of the mountains.
              </p>
              <p>
                Without a park bench in sight for miles, our hero had to rely on sheer instinct and a state-of-the-art feather-insulated parka. The solitude was absolute, broken only by the occasional confused mountain goat.
              </p>
              <div className="team">
                <div className="avatars">
                  <img src="https://i.pravatar.cc/150?u=1" alt="Team" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="Team" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="Team" />
                </div>
                <span>Joined by 3 other honkers</span>
              </div>
            </div>
            <div className="overview-gallery">
              <div className="gallery-main">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" alt="Alps" />
              </div>
              <div className="gallery-side">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400" alt="Camp" />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Loadout */}
        <section className="loadout">
          <div className="container">
            <div className="section-header">
              <h2 className="overview-title">Technical Loadout</h2>
              <p>Professional grade equipment for the serious avian adventurer.</p>
            </div>
            <table className="loadout-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Weight (g)</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loadout.map((item, i) => (
                  <tr key={i}>
                    <td className="item-cell">
                      <div className="item-icon-small"><Wheat size={14} /></div>
                      <div>
                        <div className="item-name">{item.item}</div>
                        <div className="item-desc">Custom fitted for webbed feet</div>
                      </div>
                    </td>
                    <td>{item.weight}</td>
                    <td><span className={`badge ${item.category.toLowerCase()}`}>{item.category}</span></td>
                    <td className={`status ${item.status.toLowerCase()}`}>
                      {item.status === 'Packed' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Route Section */}
        <section className="route">
          <div className="container">
            <h2 className="overview-title">The Route</h2>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12480.95701833896!2d-77.74706915174542!3d39.049448834015024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b66d5b60c4c959%3A0xcefc09d1f4cbaa61!2sGoose%20Creek%2C%20Virginia!5e1!3m2!1sen!2sus!4v1714150534125!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem', position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Goose Creek Route Map"
              ></iframe>
              <div className="live-tracking" style={{ zIndex: 10 }}>
                <span className="dot"></span> LIVE TRACKING
              </div>
              <div className="map-label" style={{ zIndex: 10, position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)' }}>Current Location</div>
            </div>
          </div>
        </section>

        {/* Alpine Newsletter */}
        <section className="alpine-newsletter">
          <div className="container text-center">
            <Mail size={40} className="mail-icon" />
            <h2 className="section-title">Join the Expedition</h2>
            <p>Subscribe to our high-altitude newsletter for the latest updates on mountain foraging, cold-weather honking techniques, and avalanche safety for geese.</p>
            <form className="alpine-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed!');
            }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="disclaimer">No spam, only crisp mountain air.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Alpine;
