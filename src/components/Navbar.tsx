import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#333', marginBottom: '2rem' }}>
      <Link to="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 1rem', color: 'white' }}>About</Link>
      <Link to="/projects" style={{ margin: '0 1rem', color: 'white' }}>Projects</Link>
    </nav>
    );
}
