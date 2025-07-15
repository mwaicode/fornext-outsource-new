"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ClientSignupPage() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Image Section */}
      <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
        <Image
          src="/opo.jpg" // Replace with your own image
          alt="Signup Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Side Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/log.jpg" // Replace with your Fornxt logo
              alt="Fornxt Logo"
              width={140}
              height={40}
            />
          </div>

          <h1 className="text-2xl font-bold text-center text-blue-800 mb-2">
            Create your company account
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Discover global talent and hire within 48 hours.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Company Email*"
              className="md:col-span-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company's Country*"
              className="md:col-span-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Set Password*"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password*"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-xs text-black-500 md:col-span-2">
              Use 6 or more characters with a mix of letters and numbers.
            </p>

            <label className="md:col-span-2 flex items-start gap-2 mt-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              I agree to Fornxt's{" "}
              <Link href="/privacy" className="text-blue-700 hover:underline">
                Privacy Policy
              </Link>
            </label>

            <button
              type="submit"
              className={`md:col-span-2 mt-4 w-full p-3 text-white font-semibold rounded ${
                agree
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              } transition`}
              disabled={!agree}
            >
              Create Account
            </button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/client/login"
              className="text-blue-700 font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>

          <div className="text-center text-sm text-gray-600 mt-2">
            Are you looking to sign up as talent?{" "}
            <Link
              href="/talent/signup"
              className="text-blue-700 font-medium hover:underline"
            >
              Start here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
