'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const [navOptions, setNavOptions] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        switch (pathname) {
            case '/features':
                setNavOptions([
                    { label: 'Report your problem', href: '#report' },
                    { label: 'Data Analytics on Tableau', href: '#analytics' },
                    { label: 'Document Chatbot', href: '#chatbot' },
                    { label: 'Schemes & events list', href: '#schemes' },
                ]);
                break;
            case '/analytics':
                setNavOptions([
                    { label: 'Future Scopes of our project', href: '#future' },
                ]);
                break;
            case '/about':
                setNavOptions([
                    { label: 'We are from which college', href: '#college' },
                    { label: 'Information about us', href: '#info' },
                ]);
                break;
            default:
                setNavOptions([
                    { label: 'Features', href: '/features' },
                    { label: 'Data Analytics', href: '/analytics' },
                    { label: 'Future Scopes', href: '/future' },
                    { label: 'About us', href: '/about' },
                ]);
                break;
        }
    }, [pathname]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <Link href='/' className="flex items-center">
                        <Image 
                            src="/assets/US.png" 
                            width={50}
                            height={50}
                            alt='logo'
                        />
                        <span className="ml-2 text-2xl font-bold text-white">UrbanSnap</span>
                    </Link>

                    <div className="flex items-center space-x-8">
                        {navOptions.map((option) => (
                            <Link
                                key={option.label}
                                href={option.href}
                                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transform transition-transform hover:scale-105"
                                onClick={(e) => handleNavClick(e, option.href)}
                            >
                                {option.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;