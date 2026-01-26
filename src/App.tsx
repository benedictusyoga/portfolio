import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ padding: '2rem' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App
