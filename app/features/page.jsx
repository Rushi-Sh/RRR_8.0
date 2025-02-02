"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import { Fullscreen } from 'lucide-react';

function Features() {
    return (
        <div className="bg-gray-900 min-h-screen text-white p-6 pt-20">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
                Application Features
            </h2>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {[
                    {
                        id: 1,
                        title: "Report Problems",
                        description:
                            "Easily report civic issues like potholes, garbage dumping, or broken streetlights by simply clicking a picture and submitting it through the app.",
                        url: "/features/report",
                        imageUrl: "https://i.imgur.com/IEsccKJ.png", // Add image URL
                    },
                    {
                        id: 2,
                        title: "Inform Authorities",
                        description:
                            "Your reports are automatically forwarded to the concerned authorities, ensuring quick action and resolution.",
                        url: "#inform-authorities",
                        imageUrl: "https://i.imgur.com/28WTEiE.png", // Add image URL
                    },
                    {
                        id: 3,
                        title: "Track Report Status",
                        description:
                            "Monitor the progress of your reports in real-time, from submission to resolution, with regular updates.",
                        url: "#track-status",
                        imageUrl: "https://i.imgur.com/ttp5zAH.png", // Add image URL
                    },
                    {
                        id: 4,
                        title: "Reward System",
                        description:
                            "Earn points and rewards for every valid report you submit, which can be redeemed for exclusive benefits.",
                        url: "/future/reward",
                        imageUrl: "https://i.imgur.com/REBenY7.png", // Add image URL
                    },
                    {
                        id: 5,
                        title: "Stay Updated",
                        description:
                            "Receive timely notifications about new government schemes, policies, and initiatives that can benefit you.",
                        url: "/features/schemes",
                        imageUrl: "https://i.imgur.com/GStsdGk.png", // Add image URL
                    },
                    {
                        id: 6,
                        title: "Take Benefits",
                        description:
                            "Access and apply for government schemes and events directly through the app, ensuring you don’t miss out on any opportunities.",
                        url: "#take-benefits",
                        imageUrl: "https://i.imgur.com/wodmahm.png", // Add image URL
                    },
                    {
                        id: 7,
                        title: "Help Others",
                        description:
                            "Participate in community drives like blood donation camps, cleanliness drives, and more to contribute to society.",
                        url: "#help-others",
                        imageUrl: "/images/help-others.jpg", // Add image URL
                    },
                ].map((feature) => (
                    <div
                        key={feature.id}
                        className="flex relative w-full h-auto bg-gray-800 shadow-lg overflow-hidden p-8 rounded-xl transform transition-all duration-300 border-2 border-transparent hover:scale-105 hover:shadow-2xl group
                        hover:border-indigo-400"
                    >
                        {/* Content Section */}
                        <div className="flex-1">
                            <div className="text-6xl font-bold text-white z-10 mr-4 transition-all duration-300 group-hover:text-indigo-400">
                                {String(feature.id).padStart(2, "0")}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-indigo-400">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 mb-6 transition-all duration-300 group-hover:text-white">
                                {feature.description}
                            </p>
                            <div className="btn-grp mt-4">
                                <Link
                                    href={feature.url}
                                    className="btn-blue bg-indigo-600 text-white py-3 px-8 rounded-lg inline-block transform transition-all duration-300 hover:bg-indigo-700 hover:scale-110"
                                    onClick={() => console.log('Link clicked!')}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative w-1/2 h-48 mt-6 rounded-lg flex items-center justify-center">
                            <Image
                                src={feature.imageUrl}
                                alt={feature.title}
                                width={150}
                                height={100}
                                className="transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;