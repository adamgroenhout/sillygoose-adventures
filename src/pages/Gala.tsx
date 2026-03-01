import { Navbar, Footer } from '../components/Layout';
import { Star, Bookmark, MapPin, Mail, ChevronRight } from 'lucide-react';
import './Adventure.css';
import './Gala.css';

const Gala = () => {
  const menu = [
    { title: 'The Artisan Croissant Heel', rating: 5, tag: 'Rare Find', desc: 'Discarded by a toddler in a stroller. Notes of butter, pavement, and a hint of grass. A truly...', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400', location: 'BENCH #4' },
    { title: 'Seeded Multigrain Fragment', rating: 4, tag: 'Vintage', desc: 'Aged for approximately 30 minutes in direct sunlight. A robust crunch with an earthy...', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', location: 'EAST LAWN' },
    { title: 'The Bavarian Pretzel Nub', rating: 5, tag: "Chef's Choice", desc: 'A salty delight dropped near the beer garden. The coarse salt crystals provide a texture...', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=400', location: 'THE PAVILION' },
  ];

  const stats = [
    { label: 'Crumbs Collected', value: '14' },
    { label: 'Toddlers Chased', value: '3' },
    { label: 'Fluffiness Rating', value: '98%' },
    { label: 'Honk Given', value: '1' },
  ];

  return (
    <div className="page-adventure gala">
      <Navbar />
      
      <main>
        {/* Gala Hero */}
        <section className="gala-hero">
          <div className="container">
            <span className="exp-badge yellow">ADVENTURE NO. 003</span>
            <h1 className="gala-title">The Gala of <span className="highlight">Crumbs</span></h1>
            <p className="gala-desc">
              An evening of refined tastes and scattered delights at the Grand Park Pavilion. Witness the sophisticated forage.
            </p>
            <div className="hero-feature-card">
              <img src="/crumbs.png" alt="Gala" />
              <div className="location-tag">
                <MapPin size={14} />
                <span>LOCATION</span>
                <strong>Grand Park Pavilion, 6:42 PM</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Gala Quote */}
        <section className="gala-quote container">
          <p>
            "As dusk settled over the manicured lawns, the elite gathered. Little did they know, the true connoisseur of the evening had arrived. The selection of discarded pastries was nothing short of exquisite. I found myself drawn to a particularly flaky croissant end, vintage 4:00 PM, resting delicately near the fountain's edge."
          </p>
          <div className="separator"></div>
        </section>

        {/* Menu Section */}
        <section className="menu-section">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="overview-title">The Exclusive Tasting Menu</h2>
                <p>Curated selections found under benches and near picnic blankets.</p>
              </div>
              <a href="#" className="view-all">View Full Collection <ChevronRight size={16} /></a>
            </div>
            
            <div className="menu-grid">
              {menu.map((item, i) => (
                <div key={i} className="menu-card">
                  <div className="card-img-box">
                    <img src={item.image} alt={item.title} />
                    <span className="card-tag">{item.tag}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-header">
                      <h3>{item.title}</h3>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < item.rating ? "#f6ad55" : "none"} stroke={i < item.rating ? "#f6ad55" : "#cbd5e0"} />
                        ))}
                      </div>
                    </div>
                    <p className="card-desc">{item.desc}</p>
                    <div className="card-footer">
                      <span className="card-location">ACQUIRED: {item.location}</span>
                      <button className="btn-icon"><Bookmark size={14} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gala Stats */}
        <section className="gala-stats container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="gala-stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Path Section */}
        <section className="path-section container">
          <div className="path-card">
            <div className="path-info">
              <span className="live-badge"><span className="dot"></span> LIVE TRACKING</span>
              <h2>The Goose's Path</h2>
              <p>Follow the intricate waddle patterns as our hero navigates between picnic blankets and the pond. A masterclass in stealth and opportunity.</p>
              
              <div className="checkpoints">
                <div className="checkpoint">
                  <div className="cp-icon blue"><MapPin size={14} /></div>
                  <div>
                    <strong>The Pond Dip</strong>
                    <p>14:00 - A refreshing splash</p>
                  </div>
                </div>
                <div className="checkpoint">
                  <div className="cp-icon green"><MapPin size={14} /></div>
                  <div>
                    <strong>The Bush Ambush</strong>
                    <p>14:45 - Waiting for the sandwich drop</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="path-map">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map" />
            </div>
          </div>
        </section>

        {/* Gala Newsletter */}
        <section className="gala-newsletter">
          <div className="container text-center">
            <Mail size={40} className="mail-icon" />
            <h2 className="section-title">Don't Miss the Next Course</h2>
            <p>Join the Silly Goose Society newsletter for updates on future foraging galas, honking etiquette, and seasonal migration patterns.</p>
            <form className="gala-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed!');
            }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="disclaimer">No spam, only breadcrumbs.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gala;
