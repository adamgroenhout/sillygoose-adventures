import { Navbar, Footer } from '../components/Layout';
import { ArrowRight, Share2, Quote } from 'lucide-react';
import './Urban.css';

const Urban = () => {
  const shots = [
    { time: '07:00 AM', title: 'The Crosswalk Conundrum', image: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80&w=600' },
    { time: '09:30 AM', title: 'Silent Observer', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600' },
    { time: '02:15 PM', title: 'Caffeine Dreams', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="page-urban">
      <Navbar />
      
      <main>
        {/* Urban Hero */}
        <section className="urban-hero container">
          <div className="hero-grid">
            <div className="hero-img-box">
              <img src="/urban.png" alt="Urban Goose" />
              <span className="img-label">FIG 1. THE STRUT</span>
            </div>
            <div className="hero-text">
              <span className="location-badge">NEW YORK CITY</span>
              <h1 className="urban-title">The Urban Promenade</h1>
              <div className="accent-line"></div>
              <p>
                In the heart of the metropolis, amidst the cacophony of sirens and the rhythm of hurried footsteps, one avian wanderer dares to waddle where no webbed foot has waddled before. Witness the juxtaposition of concrete rigidity and feathered elegance as our protagonist redefines "jaywalking."
              </p>
              <div className="hero-btns">
                <button className="btn-dark">Read Full Story <ArrowRight size={16} /></button>
                <button className="btn-outline"><Share2 size={16} /> Share</button>
              </div>
              <div className="social-proof">
                <div className="avatars">
                  <img src="https://i.pravatar.cc/150?u=10" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=11" alt="User" />
                  <img src="https://i.pravatar.cc/150?u=12" alt="User" />
                </div>
                <span>Loved by 12k avian enthusiasts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metropolitan Moments */}
        <section className="moments-section container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Metropolitan Moments</h2>
              <p>Captured on 35mm film during rush hour.</p>
            </div>
            <a href="#" className="view-all">View All Shots <ArrowRight size={16} /></a>
          </div>
          
          <div className="shots-grid">
            {shots.map((shot, i) => (
              <div key={i} className="shot-card">
                <img src={shot.image} alt={shot.title} />
                <div className="shot-overlay">
                  <span className="shot-time">{shot.time}</span>
                  <h3 className="shot-title">{shot.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Urban Quote */}
        <section className="urban-quote container">
          <Quote size={60} className="quote-icon-large" />
          <blockquote>
            "The journey began at dawn. The light hitting the glass facades created a kaleidoscope of opportunity. Each step was a statement, each honk a declaration of existence in the void."
          </blockquote>
          <div className="accent-line center"></div>
          <cite>THE GOOSE DIARIES, VOL. IV</cite>
        </section>

        {/* Dark Newsletter */}
        <section className="urban-newsletter">
          <div className="container newsletter-dark-box">
            <h2 className="title-large">Never Miss a Honk</h2>
            <p>Join our exclusive mailing list for high-resolution wallpapers of geese in inappropriate urban settings.</p>
            <form className="dark-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed!');
            }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="disclaimer">No spam, just feathers. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Urban;
