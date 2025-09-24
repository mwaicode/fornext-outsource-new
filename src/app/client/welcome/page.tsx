
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















// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import Link from "next/link";

// export default function WelcomeClientPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [clientName, setClientName] = useState("Client");

//   useEffect(() => {
//     const storedClient = localStorage.getItem("client");

//     if (!storedClient) {
//       router.push("/client/login");
//       return;
//     }

//     const client = JSON.parse(storedClient);
//     const clientId = client.id;

//     const name =
//       client.firstName ||
//       (client.fullName ? client.fullName.split(" ")[0] : "Client");

//     setClientName(name);

//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${clientId}`)
//       .then((res) => {
//         if (Array.isArray(res.data) && res.data.length > 0) {
//           router.push("/client/dashboard");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching client jobs:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-blue-700 text-lg font-semibold">
//         Checking your account...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 px-6">
//       <div className="text-center max-w-xl">
//         <h1 className="text-4xl font-bold mb-4">
//           Welcome, {clientName.toLowerCase()}! 🎉
//         </h1>
//         <p className="text-lg text-gray-700">
//           Let’s get started by creating your first job post. You can list roles,
//           define a budget, and start discovering top talents tailored to your
//           needs.
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
import { 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Globe,
  Clock,
  Building
} from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full bg-blue-100/20 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-slate-700">Setting up your workspace...</p>
            <p className="text-slate-500">We're preparing everything for you</p>
          </div>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Access 150k+ pre-vetted professionals worldwide"
    },
    {
      icon: Clock,
      title: "66% Faster Hiring",
      description: "Streamlined process from posting to hiring"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description: "Get precision matches with our smart algorithms"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Job",
      description: "Define roles, skills, and requirements"
    },
    {
      number: "02", 
      title: "Review Matches",
      description: "Get AI-recommended talent instantly"
    },
    {
      number: "03",
      title: "Start Hiring",
      description: "Interview and onboard your perfect match"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Welcome Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="p-12 lg:p-16 text-center">
              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">Fornxt</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Welcome,{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text">
                    {clientName}
                  </span>
                  ! 🎉
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  You're just one step away from accessing world-class talent. Let's create your first job posting and start building your dream team.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mb-12">
                <Link href="/client/create-job">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto text-lg">
                    <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
                    <span>Create My First Job</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>
              </div>

              {/* How It Works */}
              <div className="border-t border-slate-200 pt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 text-sm">{step.description}</p>
                      </div>
                      
                      {/* Connecting line */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-0"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section with Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                <div>
                  <div className="text-3xl font-bold mb-1">150k+</div>
                  <div className="text-blue-100">Global Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">66%</div>
                  <div className="text-blue-100">Faster Time to Hire</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">30-50%</div>
                  <div className="text-blue-100">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/50">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-slate-700 font-medium">
                Pro tip: The more detailed your job description, the better matches you'll receive
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}