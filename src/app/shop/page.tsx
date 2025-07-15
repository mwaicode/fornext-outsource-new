"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Shop = () => {
  const [bubbles, setBubbles] = useState<{ size: number; left: number; top: number; duration: number }[]>([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 30 }).map(() => ({
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 4,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: bubble.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 p-8">
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Coming Soon!
        </motion.h1>

        <motion.p
          className="text-2xl mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We’re excited to announce our new products launching soon.
        </motion.p>

        <motion.p
          className="text-lg max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Sign up for updates to be the first to know when we launch!
        </motion.p>

        <Image
          src="/coming-soon-product.png" // Replace with your actual image path
          alt="Coming Soon Product"
          width={300}
          height={300}
          className="mx-auto mt-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105"
        />

        <motion.div
          className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Sneak Peek:</h2>
          <p className="text-gray-600">
            Discover innovative features that will enhance your experience.
          </p>
        </motion.div>

        <div className="mt-8">
          <input
            type="email"
            placeholder="Enter your email for updates"
            className="p-4 rounded-lg border border-gray-300 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition duration-300">
            Subscribe
          </button>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold">Follow us on:</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">Instagram</a>
          </div>
        </div>

        <div className="mt-12">
          <motion.button
            className="px-6 py-3 bg-yellow-500 text-gray-800 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.button>
        </div>
      {/* WhatsApp Floating Button */}
<a
  href={`https://wa.me/254722715026?text=${encodeURIComponent("Hello, I'm interested in your services, can we discuss further details, looking forward to connecting!")}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  title="Chat with us on WhatsApp"
  className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-2xl animate-bounce"
>
  <FaWhatsapp />
</a>

      </div>
    </div>
  );
};

export default Shop;
