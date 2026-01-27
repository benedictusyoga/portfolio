import { useState } from 'react';
import './AnimatedLogo.css';

export default function AnimatedLogo() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="animated-logo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`logo-container ${isHovered ? 'hovered' : ''}`}>
                <div className="square square-top-left"></div>
                <div className="square square-top-right"></div>
                <div className="square square-bottom"></div>
            </div>
        </div>
    );
}
