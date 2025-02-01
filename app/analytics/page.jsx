import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Changed to PascalCase for component naming convention
function Analytics() {
  const features = [
    {
      id: 1,
      title: "Interactive Tableau Dashboard",
      description:
        "Gain insights through our interactive Tableau dashboard, where you can explore data visualizations and make informed decisions.",
      url: "/analytics/tableau",
      imageUrl: "https://i.imgur.com/784jkx0.png" // Using placeholder for demo
    },
    {
      id: 2,
      title: "Document Chatbot",
      description:
        "Ask questions and get responses based on the documents you provide, making information retrieval seamless and efficient.",
      url: "/analytics/docChatbot",
      imageUrl: "https://i.imgur.com/WNFZWoA.png" // Using placeholder for demo
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 pt-20">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">
        Data Analytics Features
      </h2>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative w-full h-auto bg-gray-800 shadow-lg overflow-hidden p-8 rounded-xl transform transition-all duration-300 border-2 border-transparent hover:scale-105 hover:shadow-2xl group hover:border-indigo-400"
          >
            {/* Background overlay with animation */}
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-30" />

            {/* Number with animation */}
            <div className="relative z-10 text-6xl font-bold text-white mr-4 transition-all duration-300 group-hover:text-indigo-400">
              {String(feature.id).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-indigo-400">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 transition-all duration-300 group-hover:text-white">
                {feature.description}
              </p>
              <div className="mt-4">
                <Link
                  href={feature.url}
                  className="bg-indigo-600 text-white py-3 px-8 rounded-lg inline-block transform transition-all duration-300 hover:bg-indigo-700 hover:scale-110"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full h-48 mt-6 rounded-lg overflow-hidden">
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                fill
                className="transition-all duration-300 group-hover:scale-110 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;