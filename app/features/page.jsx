
import React from 'react';

function features() {
  return (
    <div className="bg-gray-800 text-white p-6 pt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Application Features</h2>
      <div className="project-container max-w-6xl mx-auto flex flex-col gap-10">
        {[
          { id: 1, title: "Report Problems", description: "Just by clicking one picture" },
          { id: 2, title: "Inform Authorities", description: "Notify the concerned authorities" },
          { id: 3, title: "Track Report Status", description: "Keep track of your report status" },
          { id: 4, title: "Reward System", description: "Earn rewards for your reports" },
          { id: 5, title: "Stay Updated", description: "Get updates on government schemes" },
          { id: 6, title: "Take Benefits", description: "Utilize government schemes effectively" },
          { id: 7, title: "Help Others", description: "Participate in public drives" },
        ].map((feature) => (
          <div className="relative w-full h-64 bg-gray-700 shadow-lg overflow-hidden" key={feature.id}>
            <div className=" absolute text-6xl font-bold text-white z-10 right-4 top-4">{String(feature.id).padStart(2, '0')}</div>
            <div className="absolute flex flex-col text-white p-4 bottom-0 z-5">
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="italic">{feature.description}</p>
              <div className="btn-grp mt-2">
                <button className="btn-pink bg-pink-500 text-white py-2 px-4 rounded">Read More</button>
              </div>
            </div>
            <div className="project-card-overlay absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default features;