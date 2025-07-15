"use client";

import Link from "next/link";

export default function ClientLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white p-4">
      <div className="bg-white text-gray-900 rounded-xl shadow-xl p-10 w-full max-w-md text-center relative">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">Client Login</h1>
        <p className="text-sm text-gray-600 mb-6">Welcome back to Fornxt</p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold p-3 rounded transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="/client/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-6">
          <Link href="/" className="text-xs text-blue-300 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
