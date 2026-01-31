import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import benedictImage from '../assets/self-portrait.png';
import { IoMdArrowRoundForward } from "react-icons/io";


const About: React.FC = () => {
    const navigate = useNavigate();

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
                        As a <strong><i>Developer</i></strong>, I combine <i>INGENUITY</i><br />
                        and <i>CREATIVITY</i>{" "}to dissolve <i>BOUNDARIES</i>
                    </p>
                    <button className="read-more-btn" onClick={() => navigate('/about')}>
                        Read More About Me <IoMdArrowRoundForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
