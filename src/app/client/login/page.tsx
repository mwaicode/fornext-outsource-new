// "use client";

// import Link from "next/link";

// export default function ClientLoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white p-4">
//       <div className="bg-white text-gray-900 rounded-xl shadow-xl p-10 w-full max-w-md text-center relative">
//         <h1 className="text-3xl font-bold mb-2 text-blue-800">Client Login</h1>
//         <p className="text-sm text-gray-600 mb-6">Welcome back to Fornxt</p>

//         <form>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold p-3 rounded transition"
//           >
//             Log In
//           </button>
//         </form>

//         <p className="text-sm mt-6 text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/client/signup" className="text-blue-600 hover:underline">
//             Sign up
//           </Link>
//         </p>

//         <div className="mt-6">
//           <Link href="/" className="text-xs text-blue-300 hover:underline">
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }







// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { loginClient } from "../../api/auth"; // make sure this path is correct

// export default function ClientLoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const result = await loginClient({ email, password });
//       console.log("Login successful", result);
//       // redirect or store token here
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white p-4">
//       <div className="bg-white text-gray-900 rounded-xl shadow-xl p-10 w-full max-w-md text-center relative">
//         <h1 className="text-3xl font-bold mb-2 text-blue-800">Client Login</h1>
//         <p className="text-sm text-gray-600 mb-6">Welcome back to Fornxt</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold p-3 rounded transition"
//           >
//             {loading ? "Logging in..." : "Log In"}
//           </button>
//         </form>

//         <p className="text-sm mt-6 text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/client/signup" className="text-blue-600 hover:underline">
//             Sign up
//           </Link>
//         </p>

//         <div className="mt-6">
//           <Link href="/" className="text-xs text-blue-300 hover:underline">
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginClient } from "../../api/auth";

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await loginClient({ email, password });

      // Store client info in localStorage or context
      localStorage.setItem("client", JSON.stringify(result.client || result));
      localStorage.setItem("clientId", (result.client || result).id);

      // Redirect to welcome page
      router.push("/client/welcome");
    } catch (err: any) {
      const message =
        err.response?.data?.error || err.message || "Login failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white p-4">
      <div className="bg-white text-gray-900 rounded-xl shadow-xl p-10 w-full max-w-md text-center relative">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">Client Login</h1>
        <p className="text-sm text-gray-600 mb-6">Welcome back to Fornxt</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold p-3 rounded transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-sm mt-6 text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/client/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-6">
          <Link href="/" className="text-xs text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
