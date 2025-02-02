"use client"

import React, { useState } from 'react';

const Report = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        {
            title: "Look for the \"Complaints\" Button",
            image: "https://i.imgur.com/ttp5zAH.png",
            content: [
                "Open the Urban Snap app or website.",
                "Look for the \"Complaints\" button on the home screen.",
                "Tap or click on the button to begin reporting your problem."
            ]
        },
        {
            title: "Click on the 'Report' Button",
            image: "https://i.imgur.com/IEsccKJ.png",
            content: [
                "After accessing the complaints section, click on the 'Report' button.",
                "If your issue doesn't fit into the listed categories, select 'Other' and describe your issue."
            ]
        },
        {
            title: "Add a Detailed Description",
            image: "https://i.imgur.com/28WTEiE.png",
            content: [
                "After selecting the problem category, provide a detailed description.",
                "Be specific about the issue, including key details like location, size, and urgency.",
                "This helps authorities address the issue effectively."
            ]
        },
        {
            title: "Provide the Location",
            image: "https://i.imgur.com/yJbd0g8.png",
            content: [
                "Auto-detect Location: The system may automatically detect your location using GPS.",
                "Manually Enter Location: If needed, manually enter the location of the problem."
            ]
        },
        {
            title: "Submit the Report",
            image: "https://i.imgur.com/RNhbn2F.png",
            content: [
                "After entering the required details, click the \"Submit\" or \"Send Report\" button to send your report.",
                "Your report will be sent to the relevant authorities for review and action."
            ]
        },
        {
            title: "Track Your Complaint",
            image: "https://i.imgur.com/dSSbzmm.png",
            content: [
                "After submission, you will receive a complaint ID or ticket number.",
                "Use this ID to track the status of your complaint in real-time through the app.",
                "Status updates may include: \"Under Review\", \"In Progress\", \"Resolved\""
            ]
        },
        {
            title: "Receive Resolution Updates",
            content: [
                "You will be notified when your complaint is being processed or resolved.",
                "Updates will be sent via SMS, email, or within the app.",
                "You'll be informed once the issue is resolved."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 px-4 pb-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                    Step-by-Step Guide to Reporting a Problem
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="transform transition-all  duration-300 hover:scale-102 hover:translate-x-2"
                            onMouseEnter={() => setActiveStep(index)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className={`bg-gray-800 rounded-xl p-4 shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center ${
                                activeStep === index ? 'ring-2 ring-blue-500 shadow-blue-500/20' : ''
                            }`}>
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 
                                        transition-transform duration-300 hover:rotate-12 text-sm">
                                        {index + 1}
                                    </span>
                                    {step.title}
                                </h2>
                                
                                {step.image && (
                                    <div className="relative mb-4 overflow-hidden rounded-lg">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img
                                                src={step.image}
                                                alt={`Step ${index + 1}: ${step.title}`}
                                                className="w-[20vw] h-auto object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                )}

                                <div className="space-y-2">
                                    {step.content.map((text, i) => (
                                        <p key={i} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-300 animate-bounce">
                        Thank you for helping us make urban services better!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Report;