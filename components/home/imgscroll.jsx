'use client'

import React, { useState, useEffect } from 'react';

const ImageScroll = () => {
    const images = [
        {
            src: "https://static.mygov.in/static/s3fs-public/styles/home-slider-image/public/mygov_1737861950110258821.jpg",
            url: "https://www.padmaawards.gov.in/Document/pdf/notifications/PadmaAwards/2025.pdf"
        },
        {
            src: "https://cbpssubscriber.mygov.in/assets/uploads/3rpbtfC38B9muoRQ?42",
            url: "https://www.youtube.com/live/mIO5MV5in7M"
        },
        {
            src: "https://static.mygov.in/static/s3fs-public/styles/home-slider-image/public/mygov_1734510434123183681.png",
            url: "https://www.mygov.in/campaigns/mahakumbh-2025/?target=webview&type=campaign&nid=0"
        }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const selectImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative bg-gray-900">
            <div className="flex justify-center mb-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => selectImage(index)}
                        className={`w-10 h-10 mx-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'} transition duration-300`}
                    />
                ))}
            </div>
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Slideshow ${index + 1}`}
                            className="w-full h-auto flex-shrink-0"
                            onClick={() => window.location.href = image.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageScroll;