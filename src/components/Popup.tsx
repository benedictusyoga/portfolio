import React from 'react';
import { IoMdClose } from "react-icons/io";
import './Popup.css';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    isOpen,
    onClose,
    title,
    message,
    children
}) => {
    if (!isOpen) return null;

    const hasCustomContent = title || message || children;
    const effectiveTitle = title || (hasCustomContent ? null : "Coming Soon");
    const effectiveMessage = message || (hasCustomContent ? null : "This feature is coming soon!");

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={onClose}>
                    <IoMdClose />
                </button>
                {effectiveTitle && <h3 className="popup-title">{effectiveTitle}</h3>}
                {effectiveMessage && <p className="popup-message">{effectiveMessage}</p>}
                {children}
            </div>
        </div>
    );
};

export default Popup;
