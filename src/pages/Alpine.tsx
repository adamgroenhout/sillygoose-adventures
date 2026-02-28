import { Navbar, Footer } from '../components/Layout';
import { Mountain, Thermometer, Clock, Wheat, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
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
                <button className="btn-primary">Watch Log</button>
                <button className="btn-secondary">View Map</button>
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
                <img src="https://images.unsplash.com/photo-1549488344-cbb6c34ce08b?auto=format&fit=crop&q=80&w=400" alt="Tracks" />
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
              <a href="#" className="download-link">Download Manifest</a>
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
              <div className="live-tracking">
                <span className="dot"></span> LIVE TRACKING
              </div>
              <div className="map-label">Current Location</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Alpine;
