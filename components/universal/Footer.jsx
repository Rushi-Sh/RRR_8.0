import Link from 'next/link';
import { Globe2 } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Languages", href: "#languages" },
                { name: "Pricing", href: "#pricing" },
                { name: "API Access", href: "/api-docs" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "/help" },
                { name: "API Status", href: "/status" },
                { name: "Contact", href: "/contact" },
                { name: "Community", href: "/community" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Press", href: "/press" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Licenses", href: "/licenses" }
            ]
        }
    ];

    return (
        <footer className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white text-sm font-semibold">{section.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div> */}

                <div className="mt-8 border-t border-gray-800 pt-8">
                    <div className="flex items-center justify-center">
                    <Image 
                        src="/assets/US.png" 
                        width={50}
                        height={50}
                        alt='logo'
                        />
                        <span className="ml-2 text-gray-400">
                            Team RRR. Made for DotSlash 8.0 
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;