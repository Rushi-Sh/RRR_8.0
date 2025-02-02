// path/to/GifDisplay.js
import React from 'react';

const GifDisplay = () => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <marquee className=" absolute my-auto text-2xl font-bold text-white z-2" behavior="scroll" direction="left">
                Thank you for visiting! Your engagement helps us build a more transparent, efficient, and citizen-centric governance system. Together, we can empower India’s digital future
            </marquee>
            <img
                src="https://i.giphy.com/AD9GGw2vQyhy5nV83X.webp"
                alt="Animated GIF"
                className="w-auto h-auto z-3"
            />
        </div>
    );
};

export default GifDisplay;