import { useEffect, useState } from "react";
import './Home.css'

export default function Home() {
    const [showIngenuity, setShowIngenuity] = useState(false);
    const [showCreativity, setShowCreativity] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setTimeout(()=> setShowIngenuity(true), 100);
        setTimeout(()=> setShowCreativity(true), 600);
        setTimeout(()=> setShowButton(true), 1100);
    }, []);

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className={`ingenuity ${showIngenuity ? 'animate-fade-in-up' : ''}`}>
                            INGENUITY
                        </span>
                        <span className={`creativity ${showCreativity ? 'animate-fade-in-up' : ''}`}>
                            creativity
                        </span>
                    </h1>
                    <button className={`hero-button ${showButton ? 'animate-fade-in-up' : ''}`}>
                        More ↓
                    </button>
                </div>
            </section>
        </div>
    );
}