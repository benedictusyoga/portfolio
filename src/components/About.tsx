import React, { useState } from 'react';
import './About.css';
import benedictImage from '../assets/self-portrait.png';
import { IoMdArrowRoundForward } from "react-icons/io";
import Popup from './Popup';

const About: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image-wrapper">
                    <img src={benedictImage} alt="Benedict" className="about-image" />
                    <div className="image-fade-overlay"></div>
                </div>
                <div className="about-content">
                    <div className="about-title-group">
                        <h2 className="about-greeting">HI, I'M</h2>
                        <h1 className="about-name">benedict</h1>
                    </div>
                    <p className="about-description">
                        AS A <strong><i>PROGRAMMER</i></strong>, I COMBINE <i>INGENUITY</i><br />
                        AND <i>CREATIVITY</i>{" "}TO DISSOLVE <i>BOUNDARIES</i>
                    </p>
                    <button className="read-more-btn" onClick={() => setIsPopupOpen(true)}>
                        Read More About Me <IoMdArrowRoundForward />
                    </button>
                </div>
            </div>

            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </section>
    );
};

export default About;
