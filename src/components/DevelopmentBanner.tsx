import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './DevelopmentBanner.css';

const DevelopmentBanner: React.FC = () => {
    return (
        <div className="dev-banner">
            <p className="dev-banner-text">
                This portfolio is still being developed. Feedbacks are open
            </p>
            <a href="mailto:yogatama4561@gmail.com" className="dev-email-link">
                yogatama4561@gmail.com <BsArrowRight />
            </a>
        </div>
    );
};

export default DevelopmentBanner;
