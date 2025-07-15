"use client"; // Mark this as a client component

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CyberSecurityPage() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Cybersecurity Best Practices: Safeguarding Your Business in 2025
        </h1>
        <p className="text-gray-600 mb-2">Published on February 5, 2025</p>

        <Image
          src="/cloud22.png"
          alt="Cybersecurity Best Practices"
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />

        <p className="text-lg text-gray-800 mb-4">
          As cyber threats evolve, businesses must strengthen their security to protect sensitive data and infrastructure.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Top Cybersecurity Best Practices</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li><strong>Zero Trust Security:</strong> Always verify users before granting access.</li>
          <li><strong>Multi-Factor Authentication (MFA):</strong> Enhance security with additional verification.</li>
          <li><strong>Regular Security Audits:</strong> Identify and fix vulnerabilities proactively.</li>
          <li><strong>Data Encryption:</strong> Protect sensitive data in storage and during transmission.</li>
          <li><strong>AI-Powered Threat Detection:</strong> Use machine learning to detect and stop cyber threats.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Conclusion</h2>
        <p className="text-gray-600 mb-4">
          Cybersecurity is no longer optional—it’s essential. Businesses that adopt strong security measures will stay ahead of threats and protect their data.
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
}
