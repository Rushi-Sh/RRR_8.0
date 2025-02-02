"use client"; // Ensures this component runs only on the client in Next.js

import React, { useEffect, useRef } from "react";

const Tableau = () => {
    const vizUrl = "https://public.tableau.com/views/RoadProblemsinAhmedabad/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

    return (
        <div className="w-full min-h-[125vh] flex align-center justify-center bg-gray-900">

            {/* LEFT */}
            <div className="flex flex-col items-start p-6 pt-20 ml-10 bg-gray-800 rounded-lg shadow-lg"> {/* Updated container for better styling */}
                <h2 className="text-3xl font-bold mb-4 mt-6 text-white">
                    📊 Key Insights 📊
                </h2>
                <ul className="list-disc list-inside text-sm mb-6 text-gray-300">
                    <li>🚗 Road Issues: Monitor potholes and drainage. 🛠</li>
                    <li>💬 Engagement: Track user participation. 📈</li>
                    <li>📈 Resolution: Check how fast issues are fixed. ⏳</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 mt-6 text-white">
                    🔎 *Data Breakdown* 🧐
                </h2>
                <ul className="list-disc list-inside text-sm mb-6 text-gray-300">
                    <li>🚨 Complaints: Identify frequent issues. 🏗</li>
                    <li>📍 Locations: See where problems occur most. 🗺</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 mt-6 text-white">
                    📈 Future Enhancements 🚀
                </h2>
                <p className="text-lg mb-4 text-gray-300">
                    Future upgrades could include geospatial tools and predictive analytics.
                </p>

                <h2 className="text-3xl font-bold mb-4 mt-6 text-white">
                    🚀 Let's Make Ahmedabad Safer! 🙌
                </h2>
                <p className="text-lg text-gray-300">
                    Together, we can improve road safety and infrastructure in Ahmedabad. 🌟
                </p>
            </div> 

            <iframe
                src={`${vizUrl}?:showVizHome=no&:embed=true&:toolbar=yes&:animate_transition=yes`}
                // style={{ width: "100%", height: "100%", border: "none" }}
                className="min-h-screen w-full border-none pt-20 "
                allowFullScreen
                title="Tableau Dashboard"
            ></iframe>
        </div >
    );
};

export default Tableau;