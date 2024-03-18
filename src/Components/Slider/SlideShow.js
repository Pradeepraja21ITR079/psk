
import React, { useState, useEffect } from 'react';
import './SlideShow.css';
import cp from './pics/cp.jpg'
import cpp from './pics/cpp.jpg'
import cppp from './pics/cppp.jpg'

const Slideshow = () => {
    
const images = [
    cp,
    cpp,
    cppp
];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000); 

        return () => clearInterval(intervalId);
    }, [currentIndex, images]); 

    return (
        <div className="slideshow-container">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="slideshow-image"
            />
            <div className="slideshow-buttons">
                <button onClick={goToPreviousSlide}>&#9664;</button> {/* Left arrow */}
                <button onClick={goToNextSlide}>&#9654;</button> {/* Right arrow */}
            </div>
        </div>
    );
};

export default Slideshow;
