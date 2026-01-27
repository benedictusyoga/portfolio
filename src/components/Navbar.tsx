import { Link } from 'react-router-dom';
import { HiOutlineDownload } from "react-icons/hi";
import AnimatedLogo from './AnimatedLogo';
import ThemeToggle from './ThemeToggle';
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <AnimatedLogo />
                </div>

                <div className="navbar-links">
                    <Link to="/">home</Link>
                    <Link to="/projects">projects</Link>
                    <Link to="/contact">contact</Link>
                    <a
                        href="/BENEDICTUS YOGATAMA FAVIAN SATYAJATI.pdf"
                        download="BENEDICTUS YOGATAMA FAVIAN SATYAJATI.pdf"
                        className="cv-link"
                    >
                        CV <HiOutlineDownload />
                    </a>
                </div>

                <div className="theme-toggle">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
