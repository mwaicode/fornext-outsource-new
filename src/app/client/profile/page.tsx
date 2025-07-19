"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ClientProfilePage() {
  const [client, setClient] = useState<any>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("client");
    if (!stored) return (window.location.href = "/client/login");
    const data = JSON.parse(stored);
    setClient(data);
    setForm({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      country: data.country,
    });
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/clients/${client.id}`,
        form
      );
      alert("✅ Profile updated!");
      localStorage.setItem("client", JSON.stringify(res.data));
    } catch (err) {
      alert("❌ Update failed");
    }
  };

  if (!client) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-blue-900 text-white p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md text-black">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
