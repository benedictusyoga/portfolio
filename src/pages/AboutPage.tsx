import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsChevronDown, BsChevronUp } from "react-icons/bs";
import headshotImage from '../assets/self-portrait-headshot.png';
import './AboutPage.css';

import { experiences, uniqueSkills, type ExperienceItem } from '../data/self';


const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="experience-card">
            <div className="exp-header" onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0}>
                <div className="exp-logo-box">
                    {item.logo && <img src={item.logo} alt={item.company} className="exp-logo-img" />}
                </div>
                <div className="exp-header-main">
                    <span className="exp-dates">{item.period}</span>
                    <h3 className="exp-company">{item.company}</h3>
                    <span className="exp-role-title">{item.role}</span>
                </div>
                <span className="exp-toggle-btn">
                    {isOpen ? 'Collapse' : 'Expand'}
                    {isOpen ? <BsChevronUp /> : <BsChevronDown />}
                </span>
            </div>

            <div className={`exp-body ${isOpen ? 'open' : ''}`}>
                <div className="exp-content-inner">
                    {item.details.map((detail, idx) => (
                        <div key={idx} className="exp-detail-block" style={{ marginBottom: idx < item.details.length - 1 ? '1.5rem' : '0' }}>
                            <p className="exp-desc">{detail.description}</p>
                            <ul className="exp-points">
                                {detail.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="about-page">
            <div className="about-page-container">
                <div className="about-header">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <BsArrowLeft /> Back
                    </button>
                    <h1 className="about-title">about me</h1>
                </div>

                <div className="profile-intro-container">
                    <div className="profile-header-row">
                        <div className="profile-portrait-wrapper">
                            <img src={headshotImage} alt="Benedictus Yogatama" className="profile-portrait" />
                        </div>
                        <div className="profile-identity">
                            <h2 className="profile-name">BENEDICTUS YOGATAMA</h2>
                            <h3 className="profile-role">Software Developer</h3>
                        </div>
                    </div>

                    <div className="profile-bio-section">
                        <p className="profile-bio">
                            I am a Software Developer based in Indonesia. I build and ship software for websites
                            and iOS devices that solves real-world problems.<br /><br />
                            As a developer, I build products that prioritizes scalability and accessibility. I am a true
                            believer of developing for a clean and maintainable codebase.
                        </p>
                    </div>
                </div>

                <div className="about-section-container">
                    <div className="section-label">
                        <span className="section-label-text">RELEVANT SKILLS</span>
                        {uniqueSkills.map((skill, index) => (
                            <span key={index} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="about-section-container" style={{ marginTop: '2rem' }}>
                    <h2 className="section-title-large" style={{ marginBottom: '1rem' }}>PROFESSIONAL EXPERIENCE</h2>
                    <div className="experience-list">
                        {experiences.map(exp => (
                            <ExperienceCard key={exp.id} item={exp} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
