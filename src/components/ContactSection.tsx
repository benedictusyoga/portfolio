import React from 'react';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import './ContactSection.css';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: 'fit-content' }}>
                        <span className="contact-lets">LET'S</span>
                        <span className="contact-connect">CONNECT</span>
                        <div className="contact-line"></div>
                        <div className="contact-tagline" style={{ alignSelf: 'flex-end' }}>
                            <span className="contact-ingenuity">INGENUITY,</span>
                            <span className="contact-creativity">creativity</span>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <div className="contact-group">
                        <span className="contact-label">Send me an email!</span>
                        <a href="mailto:yogatama4561@gmail.com" className="contact-email-link">
                            yogatama4561@gmail.com <BsArrowRight />
                        </a>
                    </div>

                    <div className="contact-group">
                        <span className="contact-label">Or find me here!</span>
                        <div className="contact-socials">
                            <a href="https://github.com/benedictusyoga" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <BsGithub /> benedictusyoga
                            </a>
                            <a href="https://linkedin.com/in/benedictus-yogatama" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <BsLinkedin /> benedictus-yogatama
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
