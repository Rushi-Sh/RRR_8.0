import Link from 'next/link';
import React from 'react';

function schemes() {
    const governmentSchemes = [
        {
            imageUrl: 'https://example.com/pm-krishi-sinchai-yojana-poster.jpg',
            name: 'Pradhan Mantri Krishi Sinchai Yojana (PMKSY)',
            description: 'A national mission aimed at improving farm productivity and ensuring better utilization of resources through effective irrigation solutions.',
            sector: 'Agriculture'
        },
        {
            imageUrl: 'https://example.com/production-linked-incentive-scheme-poster.jpg',
            name: 'Production Linked Incentive (PLI) Scheme',
            description: 'An initiative to boost domestic manufacturing and reduce imports by providing incentives on incremental sales from products manufactured in India.',
            sector: 'Manufacturing'
        },
        {
            imageUrl: 'https://example.com/pm-ujjwala-yojana-poster.jpg',
            name: 'Pradhan Mantri Ujjwala Yojana (PMUY)',
            description: 'A scheme to provide free LPG connections to women from below poverty line families, aiming to reduce health hazards associated with cooking based on fossil fuels.',
            sector: 'Energy, Health, Poverty'
        },
        {
            imageUrl: 'https://example.com/pm-fasal-bima-yojana-poster.jpg',
            name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
            description: 'A crop insurance scheme for farmers to provide financial support in the event of crop failure due to natural calamities, pests, and diseases.',
            sector: 'Agriculture'
        },
        {
            imageUrl: 'https://example.com/stand-up-india-poster.jpg',
            name: 'Stand-Up India',
            description: 'A program to facilitate bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up greenfield enterprises.',
            sector: 'Entrepreneurship'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Available Schemes</h1>
                <div className="project-container max-w-6xl mx-auto flex flex-col gap-10">
                    {governmentSchemes.map(scheme => ( // Map through the schemes list
                        <div className="relative w-full h-64 bg-gray-800 shadow-lg overflow-hidden rounded-lg" key={scheme.name}>
                            <img src={scheme.imageUrl} alt={scheme.name} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                            <div className="absolute flex flex-col text-white p-4 bottom-0 z-5">
                                <h3 className="text-2xl font-bold">{scheme.name}</h3>
                                <p className="italic">{scheme.description}</p>
                                <div className="btn-grp mt-2">
                                    <Link href={`/schemes/${scheme.name}`} className="btn-pink bg-pink-500 text-white py-2 px-4 rounded">Read More</Link>
                                </div>
                            </div>
                            <div className="project-card-overlay absolute inset-0 bg-black opacity-50"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default schemes;