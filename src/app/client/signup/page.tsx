

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { registerClient } from "../../api/auth"; // adjust the import path based on your structure
import { useRouter } from "next/navigation";

export default function ClientSignupPage() {
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      setError("You must agree to the Privacy Policy.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await registerClient({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country,
        password: formData.password,
      });

      console.log("Registered:", response);
      router.push("/client/login");
    } catch (err: any) {
      console.error("Registration failed:", err);
      setError(err?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
        <Image
          src="/opo.jpg"
          alt="Signup Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
          <div className="flex justify-center mb-6">
            <Image src="/log.jpg" alt="Fornxt Logo" width={140} height={40} />
          </div>

          <h1 className="text-2xl font-bold text-center text-blue-800 mb-2">
            Create your company account
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Discover global talent and hire within 48 hours.
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
          )}

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <input
              name="firstName"
              type="text"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-gray-900"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-gray-900"
              required
            /> 
            <input
              name="email"
              type="email"
              placeholder="Company Email*"
              value={formData.email}
              onChange={handleChange}
              className="md:col-span-2 p-3 border border-gray-300 rounded text-gray-900"
              required
            />
            <input
              name="country"
              type="text"
              placeholder="Company's Country*"
              value={formData.country}
              onChange={handleChange}
              className="md:col-span-2 p-3 border border-gray-300 rounded text-gray-900"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Set Password*"
              value={formData.password}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-gray-900"
              required
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded text-gray-900"
              required
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
              disabled={!agree || loading}
              className={`md:col-span-2 mt-4 w-full p-3 text-white font-semibold rounded ${
                agree
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              } transition`}
            >
              {loading ? "Creating Account..." : "Create Account"}
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
