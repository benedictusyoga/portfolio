import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineDownload } from "react-icons/hi";
import AnimatedLogo from './AnimatedLogo';
import ThemeToggle from './ThemeToggle';
import Popup from './Popup';
import './Navbar.css'

export default function Navbar() {
    const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleCvClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsCvPopupOpen(true);
    };

    const handleScroll = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <AnimatedLogo />
                </Link>

                <div className="navbar-links">
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')}>about</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>projects</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>connect</a>
                    <a
                        href="/BENEDICTUS YOGATAMA FAVIAN SATYAJATI.pdf"
                        className="cv-link"
                        onClick={handleCvClick}
                    >
                        CV <HiOutlineDownload />
                    </a>
                </div>

                <div className="theme-toggle">
                    <ThemeToggle />
                </div>
            </div>

            <Popup
                isOpen={isCvPopupOpen}
                onClose={() => setIsCvPopupOpen(false)}
                title="Hey there!"
                message="This will download my CV, proceed?"
            >
                <a
                    href="/BENEDICTUS YOGATAMA FAVIAN SATYAJATI.pdf"
                    download="BENEDICTUS YOGATAMA FAVIAN SATYAJATI.pdf"
                    className="popup-action-btn"
                    onClick={() => setIsCvPopupOpen(false)}
                >
                    Download Now <HiOutlineDownload />
                </a>
            </Popup>
        </nav>
    );
}
