import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alpine from './pages/Alpine';
import Gala from './pages/Gala';
import Urban from './pages/Urban';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure/alpine" element={<Alpine />} />
        <Route path="/adventure/gala" element={<Gala />} />
        <Route path="/adventure/urban" element={<Urban />} />
      </Routes>
    </Router>
  );
}

export default App;
