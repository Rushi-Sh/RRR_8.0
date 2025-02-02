'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

import Link from 'next/link';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <div className="bg-gray-900 pt-32 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">
                        E-Governance: Building a Smarter Future
                        <span className="text-indigo-400 block mt-2">Overcoming Challenges with Innovation</span>
                    </h1>
                    {/* <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                        E-Governance refers to the use of digital technologies to enhance government services, improve transparency, and ensure efficient citizen engagement. It enables seamless access to public services, digital record management, and policy implementation through online platforms. However, challenges such as cybersecurity risks, digital identity fraud, inefficient data management, and lack of accessibility hinder its effectiveness.
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                        This hackathon invites participants to develop innovative solutions for secure digital governance, blockchain-based transparency, AI-driven automation, and citizen-friendly platforms. The goal is to create scalable, secure, and inclusive e-governance systems that enhance public trust and efficiency in digital government services. Let’s build a smarter future!
                    </p> */}
                    <div className="mt-8 flex justify-center space-x-4">
                        {/* Option 1: For page navigation */}
                        <Link
                            href="/features"
                            className="px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform transition-transform hover:scale-105 flex items-center"
                        >
                            Explore Features Now
                            <ChevronRight className="ml-2" />
                        </Link>

                        <Link
                            href="https://youtu.be/GWskDUUN1qI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border-2 border-indigo-600 text-indigo-400 rounded-md hover:bg-indigo-700 transform transition-transform hover:scale-105 flex items-center"
                        >
                            Watch Demo
                            <Play className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                    <div className="mt-16">
                        We have developed an innovative application designed to empower citizens in reporting issues related to public welfare and urbanization. This platform facilitates seamless communication between the community and local authorities, enabling users to easily report problems such as infrastructure deficiencies, environmental concerns, and public service inefficiencies. By leveraging technology, we aim to enhance civic engagement, improve response times, and foster a collaborative approach to urban development. Join us in building a smarter, more responsive city for everyone.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;