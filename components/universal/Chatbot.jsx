"use client";

import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, Send } from "lucide-react";

function MessagingModal({ isOpen, onClose }) {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAkkgoutn9SEYg939Pb21Zi19rBwD93_5M"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  useEffect(() => {
    if (isOpen) {
      setMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    const userMessage = { type: "user", content: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      const chat = model.startChat({
        history: chatHistory.map((msg) => ({
          role: msg.type === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
        generationConfig: {
          maxOutputTokens: 500,
        },
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = await response.text();

      const botMessage = { type: "bot", content: text };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        type: "bot",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-[1000] ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-6 w-[450px] h-[600px] flex flex-col">
        <h2 className="text-2xl font-bold mb-4">ChatBot</h2>
        <div ref={chatContainerRef} className="flex-grow overflow-y-auto mb-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.content}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <textarea
            className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 mr-2"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
            onKeyPress={handleKeyPress}
            rows={2}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Send />
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ChatBot() {
  const [isMessagingModalOpen, setIsMessagingModalOpen] = useState(false);

  const toggleMessagingModal = () => {
    setIsMessagingModalOpen(!isMessagingModalOpen);
  };

  return (
    <div>
      <button
        className="fixed bottom-16 right-20 text-white bg-black p-4 rounded-full"
        onClick={toggleMessagingModal}
      >
        <MessageSquare size={28} className="" />
      </button>
      <MessagingModal
        isOpen={isMessagingModalOpen}
        onClose={toggleMessagingModal}
      />
    </div>
  );
}
