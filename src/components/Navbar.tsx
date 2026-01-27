import { Link } from 'react-router-dom';
import { HiOutlineDownload } from "react-icons/hi";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <div className="logo-placeholder"></div>
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
                    <div className="toggle-placeholder"></div>
                </div>
            </div>
        </nav>
    );
}
