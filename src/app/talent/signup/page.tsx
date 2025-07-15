"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TalentSignupPage() {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE ILLUSTRATION */}
      <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
        <Image
          src="/talent.webp" // Replace with your actual image path
          alt="Talent Signup Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6 py-12">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">
          <div className="text-center mb-6">
            <Image
              src="/log.jpg" // Update to your logo path
              alt="Fornxt Logo"
              width={140}
              height={40}
            />
          </div>

          <h1 className="text-2xl font-bold text-blue-800 text-center mb-2">
            {step === 1 && "Create Your Account"}
            {step === 2 && "Your Experience"}
            {step === 3 && "Upload Your Resume"}
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Step {step} of 3
          </p>

          <form>
            {step === 1 && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Your Role (e.g. Frontend Developer)"
                  className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Years of Experience"
                  className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Tell us about your most recent role or project"
                  className="mb-4 p-3 border border-gray-300 rounded w-full h-28 resize-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}

            {step === 3 && (
              <>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mb-4 p-3 border border-gray-300 rounded w-full bg-white"
                />
                <p className="text-sm text-gray-500 mb-4">
                  Accepted formats: PDF, DOC, DOCX. Max size: 5MB
                </p>
              </>
            )}
          </form>

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between items-center mt-6">
            {step > 1 && (
              <button
                onClick={back}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={next}
                className="ml-auto bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            )}
          </div>

          {/* FOOTER LINKS */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/talent/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Log in
            </Link>
            <br />
            <Link
              href="/"
              className="text-xs text-gray-500 hover:underline block mt-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
