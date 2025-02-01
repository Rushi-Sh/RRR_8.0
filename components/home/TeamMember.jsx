import React from 'react';
import { Brain, PieChart, Users, Zap, AlertCircle, BarChart2, CodeXml } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMember = ({ name, role, college, email, github, src }) => (
  <div className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-md relative overflow-hidden h-96">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
    <div className="relative z-10 p-4 bg-gray-800 bg-opacity-70 rounded-xl flex flex-col justify-center h-full">
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-indigo-400 font-medium mb-2">{role}</p>
      <p className="text-gray-300 text-sm mb-2">{college}</p>
      <div className="flex flex-col gap-1 text-sm">
        <a href={`mailto:${email}`} className="text-gray-300 hover:text-indigo-400 transition-colors">{email}</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">GitHub</a>
      </div>
    </div>
  </div>
);


export default function TeamMembers() {
  return (
    <>


      {/* Team Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400">The minds behind UrbanSnap</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Rushi Shah Goswami"
              role="Team Leader"
              college="Nirma University (2027)"
              email="rushishah2706@gmail.com"
              github="https://github.com/rushishah"
              src={'/assets/rushi.jpg'}
            />
            <TeamMember
              name="Rishika Bhatt"
              role="AI/ML Developer"
              college="Nirma University (2027)"
              email="Rishika08122005@gmail.com"
              github="https://github.com/rishika"
              src={'/assets/rishika.jpg'}
            />
            <TeamMember
              name="Rajat Goswami "
              role="Website Developer"
              college="Nirma University (2027)"
              email="Rajatgoswamix2003@gmail.com"
              github="https://github.com/rajatjoe"
              src={'/assets/rajat.jpg'}
            />
          </div>
        </div>
      </section>

    </>
  );
}