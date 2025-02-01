"use client"; // Ensures this component runs only on the client in Next.js

import React, { useEffect, useRef } from "react";

const Tableau = () => {
    const vizUrl = "https://public.tableau.com/views/RoadProblemsinAhmedabad/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

    return (
        <div className="w-full min-h-[125vh] flex align-center justify-center bg-gray-900">
            <iframe
                src={`${vizUrl}?:showVizHome=no&:embed=true&:toolbar=yes&:animate_transition=yes`}
                // style={{ width: "100%", height: "100%", border: "none" }}
                className="min-h-screen w-full border-none pt-20 mx-auto pl-60"
                allowFullScreen
                title="Tableau Dashboard"
            ></iframe>
        </div >
    );
};

export default Tableau;