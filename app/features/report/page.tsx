import React from 'react';

function Report() {
    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">How to Report a Problem</h1>
                <p className="mb-6">If you encounter any issues while using the app, please follow these steps to report a problem:</p>
                <ol className="list-decimal list-inside mb-6">
                    <li>Click on the Help button located at the bottom of the screen.</li>
                    <li>Select Report a Problem from the menu.</li>
                    <li>Fill out the form with details about the issue.</li>
                    <li>Click Submit to send your report.</li>
                </ol>
                <p>Our support team will review your report and get back to you as soon as possible.</p>
            </div>
        </div>
    );
}

export default Report;