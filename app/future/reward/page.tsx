import Image from 'next/image'
import React from 'react'


function reward() {
    return (
        <div className="flex flex-col items-center p-4 pt-20 bg-gray-800 text-white dark:bg-gray-900">
               <Image src="/assets/reward-temp.png" alt="Reward System" className="mb-4" width={800} height={400} />
            <p className="text-center mb-4">
                This webpage tracks the reward system to enhance user engagement on public welfare apps by providing a reward system to users.
            </p>
            <a href="https://leaderboard-urbansnap.streamlit.app/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
                Go to Streamlit App
            </a>
        </div>
    )
}

export default reward