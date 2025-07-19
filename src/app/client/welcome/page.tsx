
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import axios from "axios";

// export default function WelcomeClientPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [hasJobs, setHasJobs] = useState(false);
//   const [clientName, setClientName] = useState("Client");

//   useEffect(() => {
//     const storedClient = localStorage.getItem("client");
//     if (!storedClient) {
//       router.push("/client/login");
//       return;
//     }

//     const client = JSON.parse(storedClient);
//     const clientId = client.id;
//     setClientName(client.fullName?.split(" ")[0] || "Client");

//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${clientId}`)
//       .then((res) => {
//         if (res.data && res.data.length > 0) {
//           setHasJobs(true);
//           router.push("/client/dashboard");
//         } else {
//           setHasJobs(false);
//         }
//       })
//       .catch((err) => {
//         console.error("Error checking job posts", err);
//       })
//       .finally(() => setLoading(false));
//   }, [router]);

//   if (loading) return <div className="p-10 text-center text-blue-700">Loading...</div>;

//   if (hasJobs) return null; // Already redirected

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 px-6">
//       <div className="text-center max-w-xl">
//         <h1 className="text-4xl font-bold mb-4">Welcome, {clientName}! 🎉</h1>
//         <p className="text-lg text-gray-700">
//           Let’s get started by creating your first job. You can list roles, define a budget,
//           and start discovering top talents tailored to your need.
//         </p>

//         <div className="mt-6">
//           <Link
//             href="/client/create-job"
//             className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
//           >
//             🚀 Create My First Job
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }















"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function WelcomeClientPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [clientName, setClientName] = useState("Client");

  useEffect(() => {
    const storedClient = localStorage.getItem("client");

    if (!storedClient) {
      router.push("/client/login");
      return;
    }

    const client = JSON.parse(storedClient);
    const clientId = client.id;

    const name =
      client.firstName ||
      (client.fullName ? client.fullName.split(" ")[0] : "Client");

    setClientName(name);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${clientId}`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          router.push("/client/dashboard");
        }
      })
      .catch((err) => {
        console.error("Error fetching client jobs:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-blue-700 text-lg font-semibold">
        Checking your account...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {clientName.toLowerCase()}! 🎉
        </h1>
        <p className="text-lg text-gray-700">
          Let’s get started by creating your first job post. You can list roles,
          define a budget, and start discovering top talents tailored to your
          needs.
        </p>

        <div className="mt-6">
          <Link
            href="/client/create-job"
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            🚀 Create My First Job
          </Link>
        </div>
      </div>
    </div>
  );
}
