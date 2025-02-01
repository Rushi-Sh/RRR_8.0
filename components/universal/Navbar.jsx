'use client'

import { useState, useEffect } from 'react';
import { scrollToElement } from '@/lib/smoothScroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        scrollToElement(id);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    
                    <Link href='/' className="flex items-center">
                    <Image 
                        src="/assets/US.png" 
                        width={50}
                        height={50}
                        />
                        <span className="ml-2 text-2xl font-bold text-white">UrbanSnap</span>
                    </Link>


                    <div className="flex items-center space-x-8"> 
                        

                        <Link
                            href="/features"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform transition-transform hover:scale-105"
                        >
                            Features
                        </Link>
                        <Link
                            href="/analytics"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform transition-transform hover:scale-105"
                        >
                            Data Analytics
                        </Link>
                        <Link
                            href="/about"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform transition-transform hover:scale-105"
                        >
                            About us
                        </Link>
    
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;