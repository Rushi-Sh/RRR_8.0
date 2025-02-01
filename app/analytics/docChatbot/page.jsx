'use client'

import React, { useState } from 'react';

function DocChatbot() {
  const [pdf, setPdf] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setPdf(event.target.files[0]);
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!pdf || !prompt) {
      alert('Please select a file and enter a prompt');
      return;
    }

    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('pdf', pdf);
      formData.append('prompt', prompt);

      // Send request to our API route instead of directly to external API
      const res = await fetch('/api/analytics/doc-chatbot', {
        method: 'POST',
        body: formData
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
      setResponse(`Error: ${error.message || 'An error occurred while processing your request.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 pt-20 bg-gray-800 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Document Chatbot</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div className="w-full">
          <input 
            type="file" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange} 
            className="block w-full text-sm text-gray-300
                       file:mr-4 file:py-2 file:px-4 
                       file:rounded-md file:border-0
                       file:text-sm file:font-semibold 
                       file:bg-gray-600 file:text-white
                       hover:file:bg-gray-500
                       cursor-pointer" 
          />
        </div>
        <textarea 
          value={prompt} 
          onChange={handlePromptChange} 
          placeholder="Enter your prompt here" 
          className="block w-full h-32 p-2 rounded-md 
                     bg-gray-700 border border-gray-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     text-white placeholder-gray-400" 
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-2 bg-blue-500 text-white rounded-md 
                     hover:bg-blue-600 transition duration-200
                     disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 w-full max-w-md bg-gray-700 text-white 
                      border border-gray-600 rounded-md whitespace-pre-wrap">
          <h2 className="text-lg font-bold mb-2">Response:</h2>
          <div className="text-sm">
            <p>{response.response}</p>
            {/* Additional formatting can be done here if needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default DocChatbot;