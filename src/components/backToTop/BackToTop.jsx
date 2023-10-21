import React, { useState } from 'react';
import './style.scss';

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    const handleScroll = () => {
        if (window.scrollY > 1500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);


    return (
        <button
            className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            Back to Top
        </button>
    )
}

export default BackToTop;