"use client"; // Ensure this is included if needed

import { useRouter } from "next/navigation";
import Image from "next/image";

const EmergingTechTrends = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Emerging Tech Trends in 2025: What Businesses Need to Know
        </h1>
        <p className="text-gray-600 mb-2">Published on February 5, 2025</p>

        <Image
          src="/2025.png"
          alt="Emerging Tech Trends in 2025"
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />

        <p className="text-lg text-gray-800 mb-4">
          As we step into 2025, businesses must stay ahead of the curve by adopting new technologies.
          Emerging trends like AI, blockchain, and quantum computing are set to redefine industries.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Trends to Watch</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>**AI-Powered Automation** – AI will continue to revolutionize workflows, making businesses more efficient.</li>
          <li>**Blockchain Beyond Crypto** – Secure, decentralized solutions for finance, healthcare, and supply chains.</li>
          <li>**Quantum Computing** – Unlocking new problem-solving capabilities across industries.</li>
          <li>**5G Expansion** – Enabling faster and more reliable connectivity for IoT and cloud-based applications.</li>
          <li>**Cybersecurity Evolution** – Advanced security measures to combat rising digital threats.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">How Businesses Can Adapt</h2>
        <p className="text-gray-600 mb-4">
          - **Invest in AI & Automation:** Companies should embrace AI-driven tools to optimize efficiency.
        </p>
        <p className="text-gray-600 mb-4">
          - **Enhance Cybersecurity Measures:** Protecting sensitive data will be crucial in an increasingly digital world.
        </p>
        <p className="text-gray-600 mb-4">
          - **Leverage Edge Computing:** Reducing latency and improving real-time data processing will give companies an advantage.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Conclusion</h2>
        <p className="text-gray-600 mb-4">
          The tech landscape is evolving rapidly. Businesses that adapt to these trends will stay ahead of the competition and unlock new opportunities for growth.
        </p>

        <button
          onClick={() => router.back()}
          className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EmergingTechTrends;
