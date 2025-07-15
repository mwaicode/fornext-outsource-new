"use client";

import Link from "next/link";
import Image from "next/image";

export default function TalentLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md px-8 py-10 relative">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/log.jpg" // replace with your logo path
            alt="Fornxt Logo"
            width={120}
            height={40}
          />
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Talent Login
        </h1>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/talent/signup"
            className="text-blue-700 font-semibold hover:underline"
          >
            Apply to join Fornxt
          </Link>
        </div>

        <div className="mt-4 text-xs text-center text-gray-500">
          <Link href="/" className="hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
