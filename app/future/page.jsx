"use client";

import React from 'react';
import { Badge, Zap, Languages, Users, Accessibility, Brain, MapPin, Trophy, Camera, ThumbsUp } from 'lucide-react';

const FuturePage = () => {
  const features = [
    {
      id: 1,
      title: "Reward-Based Loyalty Programs",
      description: "Offer rewards for reporting issues and participating in civic activities. Users can earn points, badges, and exclusive benefits for their contributions to community improvement.",
      icon: Trophy,
    },
    {
      id: 2,
      title: "User-Centered Upvoting System",
      description: "Allow users to upvote issues, helping prioritize the most urgent problems. This democratic approach ensures community-driven problem-solving.",
      icon: ThumbsUp,
    },
    {
      id: 3,
      title: "Integrated Object Detection",
      description: "Automate problem detection from images for faster processing. AI-powered system identifies issues like potholes and damaged streetlights automatically.",
      icon: Camera,
    },
    {
      id: 4,
      title: "MultiModal Detection",
      description: "Process and analyze data from multiple sources to improve detection and classification of urban issues, enhancing accuracy and response time.",
      icon: Zap,
    },
    {
      id: 5,
      title: "Multi-Lingual Support",
      description: "Support multiple languages for improved accessibility and inclusivity, making the platform accessible to diverse communities across different regions.",
      icon: Languages,
    },
    {
      id: 6,
      title: "Better User Involvement",
      description: "Reward active users with badges, special recognition, and exclusive perks to encourage sustained participation in community improvement.",
      icon: Users,
    },
    {
      id: 7,
      title: "Accessibility Features",
      description: "Implement voice assistants, screen readers, and accessible design to ensure the platform is usable by everyone, regardless of abilities.",
      icon: Accessibility,
    },
    {
      id: 8,
      title: "Federated Learning",
      description: "Implement distributed machine learning for each city to improve issue detection and predictions while maintaining data privacy.",
      icon: Brain,
    },
    {
      id: 9,
      title: "Location-Based Updates",
      description: "Smart news and notifications system that automatically adjusts content based on user location for more relevant information.",
      icon: MapPin,
    },
    {
      id: 10,
      title: "Community Campaigns",
      description: "Incentivize users to participate in local campaigns and drives with an innovative reward system and recognition program.",
      icon: Badge,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 mb-4">
            Future Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the upcoming features that will revolutionize civic engagement and community improvement
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 
                  hover:border-indigo-500 transition-all duration-300 hover:scale-105
                  group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-semibold text-indigo-400">
                    {String(feature.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FuturePage;