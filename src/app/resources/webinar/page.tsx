"use client";
import { useState, useEffect } from "react";
import { FaCalendar, FaClock, FaUserTie, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function WebinarPage() {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  // Simulated Loader Effect
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); //show loader for 2 seconds
  }, []);

  // Countdown Timer Logic (Assume next webinar date)
  useEffect(() => {
    const targetDate = new Date("2024-06-30T15:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Live Now!");
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent h-16 w-16"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
        Upcoming Webinar
      </h1>
      <p className="mt-3 text-lg text-center max-w-2xl">
        Join us for an exclusive webinar on **Modern Web Development Trends** 🚀
      </p>

      {/* Webinar Details */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-3xl w-full space-y-6">
        <div className="flex items-center space-x-4">
          <FaCalendar className="text-blue-500" size={24} />
          <p className="text-lg">Date: <strong>June 30, 2024</strong></p>
        </div>
        <div className="flex items-center space-x-4">
          <FaClock className="text-blue-500" size={24} />
          <p className="text-lg">Time: <strong> GMT</strong></p>
        </div>
        <div className="flex items-center space-x-4">
          <FaUserTie className="text-blue-500" size={24} />
          <p className="text-lg">Host: <strong>Host</strong></p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-green-500">⏳ Countdown:</span>
          <p className="text-lg">{timeLeft}</p>
        </div>
      </div>

      {/* Webinar Image */}
      <div className="mt-8">
        <Image src="/webinar.jpg" alt="Webinar" width={800} height={400} className="rounded-lg shadow-lg" />
      </div>

      {/* Download Resources */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Download Webinar Resources 📂</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition">
            <FaDownload /> <span>Presentation Slides</span>
          </button>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-purple-600 transition">
            <FaDownload /> <span>Webinar Notes</span>
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold">Ready to Join?</h3>
        <p className="mt-2 text-lg">Reserve your spot now and be part of the conversation!</p>
        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
          Register Now 🚀
        </button>
      </div>
    </main>
  );
}
