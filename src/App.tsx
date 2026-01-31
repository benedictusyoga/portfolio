import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import DevelopmentBanner from './components/DevelopmentBanner';
import Home from './pages/Home';

import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';
import ProjectDetail from './pages/projects/ProjectDetail';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <DevelopmentBanner />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
