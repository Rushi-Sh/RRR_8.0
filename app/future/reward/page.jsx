'use client'

import Image from 'next/image'
import React from 'react'

function Reward() {
    return (
        <div className="flex flex-col items-center p-4 pt-20 bg-gray-800 text-white dark:bg-gray-900 transition-all duration-500 ease-in-out transform ">
            <Image src="https://i.imgur.com/AKCD3Wj.png" alt="Reward System" className="mb-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110" width={800} height={400} />
            
            {/* <p className="text-center mb-4 max-w-2xl transition-opacity duration-300 hover:opacity-80">
                This webpage tracks the reward system designed to enhance user engagement on public welfare apps by providing incentives for participation.
                Users earn points for reporting issues, getting approvals, and resolving them, fostering a more active and responsible community.
            </p> */}
            
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg mb-4 max-w-2xl transition-transform duration-300 hover:scale-105">
                <h2 className="text-xl font-bold mb-2 text-center">Leaderboard Features</h2>
                <ul className="list-disc pl-5">
                    <li>🏆 <strong>Dynamic Leaderboard:</strong> Ranks users based on total points earned.</li>
                    <li>🎯 <strong>Point System:</strong> Earn points for posting (200), approval (500), and resolution (1000).</li>
                    <li>📢 <strong>Community Engagement:</strong> Extra points for post likes, first reporting, and repeated reports.</li>
                    <li>📊 <strong>Region-wise Analysis:</strong> Track active areas and top contributors per region.</li>
                    <li>🚀 <strong>Motivational Rewards:</strong> Gamified experience encourages active participation.</li>
                </ul>
            </div>
            
            <a href="https://leaderboard-urbansnap.streamlit.app/" 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition-transform duration-300 hover:scale-105">
                Go to Streamlit App
            </a>
        </div>
    )
}

export default Reward;