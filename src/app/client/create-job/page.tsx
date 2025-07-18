// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export default function CreateJobPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     roles: "",
//     budget: "",
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/jobs/create`, {
//         ...formData,
//         budget: parseFloat(formData.budget),
//       });
//       router.push("/client/view-talents");
//     } catch (err) {
//       alert("Job creation failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-10 max-w-xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Create Your First Job</h2>

//       <input
//         name="title"
//         placeholder="Job Title"
//         className="border p-2 w-full mb-4"
//         onChange={handleChange}
//         required
//       />

//       <input
//         name="roles"
//         placeholder="Roles (comma-separated)"
//         className="border p-2 w-full mb-4"
//         onChange={handleChange}
//         required
//       />

//       <textarea
//         name="description"
//         placeholder="Job Description"
//         className="border p-2 w-full mb-4 h-24"
//         onChange={handleChange}
//         required
//       />

//       <input
//         name="budget"
//         placeholder="Budget (USD)"
//         type="number"
//         className="border p-2 w-full mb-4"
//         onChange={handleChange}
//         required
//       />

//       <button
//         type="submit"
//         className="bg-green-600 text-white px-6 py-2 rounded"
//       >
//         Submit Job & View Talent →
//       </button>
//     </form>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export default function CreateJobPage() {
//   const router = useRouter();
//   const [clientId, setClientId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     roles: "",
//     budget: "",
//   });

//   useEffect(() => {
//     const storedClientId = localStorage.getItem("clientId");
//     if (storedClientId) {
//       setClientId(storedClientId);
//     } else {
//       router.push("/client/login");
//     }
//   }, [router]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!clientId) {
//       setError("Client ID missing. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     try {
//       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/jobs/create`, {
//         ...formData,
//         roles: formData.roles, // single role, or make it comma-separated if multiple
//         budget: parseFloat(formData.budget),
//         clientId,
//       });

//       router.push("/client/view-talents");
//     } catch (err: any) {
//       setError("Job creation failed. Please try again.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-700 to-blue-900 flex items-center justify-center px-4 py-10 text-white">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white text-black shadow-2xl rounded-2xl p-10 w-full max-w-2xl"
//       >
//         <h2 className="text-4xl font-extrabold text-center text-green-700 mb-6">
//           Create a Job Opportunity
//         </h2>

//         <div className="space-y-6">
//           <input
//             name="title"
//             placeholder="Job Title (e.g., React Developer)"
//             className="border border-gray-300 p-3 w-full rounded-lg text-black focus:ring-2 focus:ring-green-500"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />

//           <select
//             name="roles"
//             value={formData.roles}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 p-3 w-full rounded-lg text-black focus:ring-2 focus:ring-green-500"
//           >
//             <option value="">Select Role</option>
//             <option value="Frontend Developer">Frontend Developer</option>
//             <option value="Backend Developer">Backend Developer</option>
//             <option value="Full Stack Developer">Full Stack Developer</option>
//             <option value="UI/UX Designer">UI/UX Designer</option>
//             <option value="Mobile App Developer">Mobile App Developer</option>
//             <option value="DevOps Engineer">DevOps Engineer</option>
//             <option value="Software Engineer">Software Engineer</option>
//           </select>

//           <textarea
//             name="description"
//             placeholder="Describe the job role and what you're looking for..."
//             className="border border-gray-300 p-3 w-full h-28 rounded-lg text-black focus:ring-2 focus:ring-green-500"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="budget"
//             placeholder="Budget in USD (e.g., 1500)"
//             type="number"
//             className="border border-gray-300 p-3 w-full rounded-lg text-black focus:ring-2 focus:ring-green-500"
//             value={formData.budget}
//             onChange={handleChange}
//             required
//           />

//           {error && <p className="text-red-600 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-green-700 hover:bg-green-800 transition text-white font-bold py-3 rounded-lg text-lg"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Post Job & Explore Talent →"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }






















"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CheckCircle2, UserCircle2, Code, MonitorSmartphone, LayoutDashboard } from "lucide-react";

export default function CreateJobPage() {
  const router = useRouter();
  const [clientId, setClientId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    roles: "",
    budget: "",
    companyBio: "",
  });

  useEffect(() => {
    const storedClientId = localStorage.getItem("clientId");
    if (storedClientId) {
      setClientId(storedClientId);
    } else {
      router.push("/client/login");
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!clientId) {
      setError("Client ID missing. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/jobs/create`, {
        ...formData,
        budget: parseFloat(formData.budget),
        clientId,
      });

      setSuccess(true);
      setTimeout(() => {
        // router.push("/client/view-talents");
        router.push(`/client/view-talents?role=${encodeURIComponent(formData.roles)}`);

      }, 2000);
    } catch (err: any) {
      setError("Job creation failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-blue-900 flex items-center justify-center px-4 py-10 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black shadow-2xl rounded-2xl p-10 w-full max-w-2xl"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Create a Job Opportunity
        </h2>

        <div className="space-y-6">
          <input
            name="title"
            placeholder="Job Title"
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <select
            name="roles"
            value={formData.roles}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Role</option>
            <option value="Frontend Developer">🌐 Frontend Developer</option>
            <option value="Backend Developer">🧠 Backend Developer</option>
            <option value="Full Stack Developer">🧩 Full Stack Developer</option>
            <option value="UI/UX Designer">🎨 UI/UX Designer</option>
            <option value="Mobile App Developer">📱 Mobile App Developer</option>
            <option value="DevOps Engineer">⚙️ DevOps Engineer</option>
            <option value="Software Engineer">💻 Software Engineer</option>
          </select>

          <textarea
            name="description"
            placeholder="Describe the job role and what you're looking for..."
            className="border border-gray-300 p-3 w-full h-28 rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            name="budget"
            placeholder="Budget in USD (e.g., 1500)"
            type="number"
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.budget}
            onChange={handleChange}
            required
          />

          <textarea
            name="companyBio"
            placeholder="Tell us briefly about your company or startup..."
            className="border border-gray-300 p-3 w-full h-24 rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.companyBio}
            onChange={handleChange}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && (
            <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5" /> Job posted successfully! Redirecting...
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 transition text-white font-bold py-3 rounded-lg text-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Post Job & View Talent →"}
          </button>
        </div>
      </form>
    </div>
  );
}
