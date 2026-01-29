import { useEffect, useState } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import './Home.css'
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
    const [showIngenuity, setShowIngenuity] = useState(false);
    const [showCreativity, setShowCreativity] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowIngenuity(true), 200);
        setTimeout(() => setShowCreativity(true), 1000);
        setTimeout(() => setShowButton(true), 2000);
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <div className="word-container">
                            <span className={`ingenuity ${showIngenuity ? 'animate-fade-in-up' : ''}`}>
                                INGENUITY,
                            </span>
                        </div>
                        <div className="word-container">
                            <span className={`creativity ${showCreativity ? 'animate-fade-in-up' : ''}`}>
                                creativity
                            </span>
                        </div>
                    </h1>
                </div>
                <div className={`hero-button-wrapper ${showButton ? 'animate-fade-in-up' : ''}`}>
                    <button className="hero-button" onClick={scrollToAbout}>
                        More <IoMdArrowRoundDown />
                    </button>
                </div>
            </section>
            <About />
            <ProjectsSection />
        </div>
    );
}