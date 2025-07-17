// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function TalentSignupPage() {
//   const [step, setStep] = useState(1);

//   const next = () => setStep((prev) => prev + 1);
//   const back = () => setStep((prev) => prev - 1);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* LEFT SIDE ILLUSTRATION */}
//       <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
//         <Image
//           src="/talent.webp" // Replace with your actual image path
//           alt="Talent Signup Illustration"
//           width={500}
//           height={500}
//           className="object-contain"
//         />
//       </div>

//       {/* RIGHT SIDE FORM */}
//       <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6 py-12">
//         <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">
//           <div className="text-center mb-6">
//             <Image
//               src="/log.jpg" // Update to your logo path
//               alt="Fornxt Logo"
//               width={140}
//               height={40}
//             />
//           </div>

//           <h1 className="text-2xl font-bold text-blue-800 text-center mb-2">
//             {step === 1 && "Create Your Account"}
//             {step === 2 && "Your Experience"}
//             {step === 3 && "Upload Your Resume"}
//           </h1>
//           <p className="text-center text-gray-500 mb-6">
//             Step {step} of 3
//           </p>

//           <form>
//             {step === 1 && (
//               <>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
//                 />
//               </>
//             )}

//             {step === 2 && (
//               <>
//                 <input
//                   type="text"
//                   placeholder="Your Role (e.g. Frontend Developer)"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Years of Experience"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
//                 />
//                 <textarea
//                   placeholder="Tell us about your most recent role or project"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full h-28 resize-none focus:ring-2 focus:ring-blue-500 text-gray-900"
//                 />
//               </>
//             )}

//             {step === 3 && (
//               <>
//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   className="mb-4 p-3 border border-gray-300 rounded w-full bg-white"
//                 />
//                 <p className="text-sm text-gray-500 mb-4">
//                   Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//                 </p>
//               </>
//             )}
//           </form>

//           {/* NAVIGATION BUTTONS */}
//           <div className="flex justify-between items-center mt-6">
//             {step > 1 && (
//               <button
//                 onClick={back}
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 ← Back
//               </button>
//             )}
//             {step < 3 ? (
//               <button
//                 onClick={next}
//                 className="ml-auto bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
//               >
//                 Continue →
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 className="ml-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//               >
//                 Submit Application
//               </button>
//             )}
//           </div>

//           {/* FOOTER LINKS */}
//           <div className="mt-6 text-center text-sm text-gray-600">
//             Already have an account?{" "}
//             <Link
//               href="/talent/login"
//               className="text-blue-700 font-semibold hover:underline"
//             >
//               Log in
//             </Link>
//             <br />
//             <Link
//               href="/"
//               className="text-xs text-gray-500 hover:underline block mt-2"
//             >
//               ← Back to Home
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   registerTalentAccount,
//   updateTalentProfile,
//   uploadTalentCV,
// } from "../../api/auth"; // Adjust path as needed
// import { useRouter } from "next/navigation";

// export default function TalentSignupPage() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [talentId, setTalentId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//     experience: "",
//     project: "",
//     file: null as File | null,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleNext = async () => {
//     setError("");
//     if (step === 1) {
//       if (formData.password !== formData.confirmPassword) {
//         return setError("Passwords do not match.");
//       }
//       try {
//         setLoading(true);
//         const result = await registerTalentAccount({
//           fullName: formData.fullName,
//           email: formData.email,
//           password: formData.password,
//         });
//         setTalentId(result.id); // store the returned talent ID
//         setStep(2);
//       } catch (err: any) {
//         setError(err?.response?.data?.message || "Registration failed.");
//       } finally {
//         setLoading(false);
//       }
//     } else if (step === 2) {
//       if (!talentId) return setError("Talent ID missing. Please try again.");
//       try {
//         setLoading(true);
//         await updateTalentProfile(talentId, {
//           role: formData.role,
//           experience: Number(formData.experience),
//           project: formData.project,
//         });
//         setStep(3);
//       } catch (err: any) {
//         setError(err?.response?.data?.message || "Profile update failed.");
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!talentId || !formData.file) {
//       setError("Resume file or talent ID missing.");
//       return;
//     }

//     try {
//       setLoading(true);
//       await uploadTalentCV(talentId, formData.file);
//       router.push("/talent/login");
//     } catch (err: any) {
//       setError(err?.response?.data?.message || "CV upload failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* LEFT IMAGE */}
//       <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
//         <Image src="/talent.webp" alt="Talent Illustration" width={500} height={500} />
//       </div>

//       {/* RIGHT FORM */}
//       <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6 py-12">
//         <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">
//           <div className="text-center mb-6">
//             <Image src="/log.jpg" alt="Fornxt Logo" width={140} height={40} />
//           </div>

//           <h1 className="text-2xl font-bold text-blue-800 text-center mb-2">
//             {step === 1 && "Create Your Account"}
//             {step === 2 && "Your Experience"}
//             {step === 3 && "Upload Your Resume"}
//           </h1>
//           <p className="text-center text-gray-500 mb-4">Step {step} of 3</p>

//           {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

//           <form onSubmit={handleSubmit}>
//             {step === 1 && (
//               <div className="grid gap-4">
//                 <input
//                   name="fullName"
//                   type="text"
//                   placeholder="Full Name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded text-gray-900"
//                   required
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded text-gray-900"
//                   required
//                 />
//                 <input
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded text-gray-900"
//                   required
//                 />
//                 <input
//                   name="confirmPassword"
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded text-gray-900"
//                   required
//                 />
//               </div>
//             )}

//             {step === 2 && (
//               <div className="grid gap-4">
//                 <input
//                   name="role"
//                   type="text"
//                   placeholder="Your Role (e.g. Frontend Developer)"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded text-gray-900"
//                   required
//                 />
//                 <input
//                   name="experience"
//                   type="number"
//                   placeholder="Years of Experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded text-gray-900"
//                   required
//                 />
//                 <textarea
//                   name="project"
//                   placeholder="Tell us about your most recent role or project"
//                   value={formData.project}
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded h-28 resize-none"
//                   required
//                 />
//               </div>
//             )}

//             {step === 3 && (
//               <div className="grid gap-4">
//                 <input
//                   name="file"
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleChange}
//                   className="p-3 border border-gray-300 rounded bg-white"
//                   required
//                 />
//                 <p className="text-sm text-gray-500">
//                   Accepted formats: PDF, DOC, DOCX. Max size: 5MB
//                 </p>
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between items-center mt-6">
//               {step > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => setStep((s) => s - 1)}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   ← Back
//                 </button>
//               )}

//               {step < 3 ? (
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   disabled={loading}
//                   className="ml-auto bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
//                 >
//                   {loading ? "Processing..." : "Continue →"}
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="ml-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//                 >
//                   {loading ? "Uploading..." : "Submit Application"}
//                 </button>
//               )}
//             </div>
//           </form>

//           <div className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link href="/talent/login" className="text-blue-700 font-medium hover:underline">
//               Log in
//             </Link>
//           </div>
//           <div className="text-center text-sm text-gray-600 mt-2">
//             Are you hiring?{" "}
//             <Link href="/client/signup" className="text-blue-700 font-medium hover:underline">
//               Create a company account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { registerTalent } from "../../api/auth"; // Unified talent register API

export default function TalentSignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    experience: "",
    project: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const next = () => {
    setError("");
    if (step === 1 && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setError("");

    if (!formData.file) {
      setError("Please upload your CV.");
      return;
    }

    try {
      setLoading(true);
      await registerTalent({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        experience: Number(formData.experience),
        project: formData.project,
        cv: formData.file,
      });

      router.push("/talent/login");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE ILLUSTRATION */}
      <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
        <Image
          src="/talent.webp"
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
            <Image src="/log.jpg" alt="Fornxt Logo" width={140} height={40} />
          </div>

          <h1 className="text-2xl font-bold text-blue-800 text-center mb-2">
            {step === 1 && "Create Your Account"}
            {step === 2 && "Your Experience"}
            {step === 3 && "Upload Your Resume"}
          </h1>
          <p className="text-center text-gray-500 mb-6">Step {step} of 3</p>

          {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

          <form>
            {step === 1 && (
              <>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full text-gray-900"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full text-gray-900"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full text-gray-900"
                  required
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full text-gray-900"
                  required
                />
              </>
            )}

            {step === 2 && (
              <>
                <input
                  name="role"
                  type="text"
                  placeholder="Your Role (e.g. Frontend Developer)"
                  value={formData.role}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full text-gray-900"
                  required
                />
                <input
                  name="experience"
                  type="number"
                  placeholder="Years of Experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full text-gray-900"
                  required
                />
                <textarea
                  name="project"
                  placeholder="Tell us about your most recent role or project"
                  value={formData.project}
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full h-28 resize-none text-gray-900"
                  required
                />
              </>
            )}

            {step === 3 && (
              <>
                <input
                  name="file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="mb-4 p-3 border border-gray-300 rounded w-full bg-white"
                  required
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
                type="button"
                onClick={back}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={loading}
                className="ml-auto bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="ml-auto bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>

          {/* FOOTER LINKS */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/talent/login" className="text-blue-700 font-semibold hover:underline">
              Log in
            </Link>
            <br />
            <Link href="/" className="text-xs text-gray-500 hover:underline block mt-2">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
