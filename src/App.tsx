import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alpine from './pages/Alpine';
import Gala from './pages/Gala';
import Urban from './pages/Urban';
import Pond from './pages/Pond';
import { GooseStormProvider } from './contexts/GooseStormContext';
import './index.css';

function App() {
  return (
    <Router>
      <GooseStormProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure/alpine" element={<Alpine />} />
        <Route path="/adventure/gala" element={<Gala />} />
        <Route path="/adventure/urban" element={<Urban />} />
        <Route path="/pond" element={<Pond />} />
        </Routes>
      </GooseStormProvider>
    </Router>
  );
}

export default App;
