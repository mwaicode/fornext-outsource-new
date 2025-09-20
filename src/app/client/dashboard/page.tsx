
// // app/client/dashboard/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   Briefcase,
//   Users,
//   FileText,
//   HelpCircle,
//   Sparkles,
//   LayoutDashboard,
//   LogOut,
//   UserCircle,
// } from "lucide-react";

// export default function ClientDashboardPage() {
//   const router = useRouter();
//   const [client, setClient] = useState<any>(null);
//   const [jobs, setJobs] = useState([]);
//   const [recommendedTalents, setRecommendedTalents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedClient = localStorage.getItem("client");
//     if (!storedClient) {
//       router.push("/client/login");
//       return;
//     }

//     const parsedClient = JSON.parse(storedClient);
//     setClient(parsedClient);

//     const fetchDashboardData = async () => {
//       try {
//         const jobRes = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${parsedClient.id}`
//         );
//         const openJobs = jobRes.data.filter((job: any) => job.status !== "closed");
//         setJobs(openJobs);

//         const uniqueRoles = Array.from(
//           new Set(openJobs.flatMap((job: any) => job.roles || []))
//         );

//         if (uniqueRoles.length > 0) {
//           const talentRes = await axios.get(
//             `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent}`
//           );
//           setRecommendedTalents(talentRes.data);
//         }
//       } catch (err) {
//         console.error("Dashboard load error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("client");
//     router.push("/client/login");
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white text-blue-900">
//         <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
//         <p className="ml-4 text-lg font-semibold">Loading dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col justify-between rounded-tr-xl rounded-br-xl">
//         <div>
//           <h2 className="text-2xl font-extrabold mb-8">Fornxt 💼</h2>
//           <ul className="space-y-4 text-sm font-medium">
//             <li><Link href="/client/dashboard" className="flex gap-2 items-center hover:underline"><LayoutDashboard size={18} /> Dashboard</Link></li>
//             <li><Link href="/client/create-job" className="flex gap-2 items-center hover:underline"><Briefcase size={18} /> Post a Job</Link></li>
//             <li><Link href="/client/view-talents" className="flex gap-2 items-center hover:underline"><Users size={18} /> Discover Talent</Link></li>
//             <li><Link href="/client/profile" className="flex gap-2 items-center hover:underline"><UserCircle size={18} /> Profile</Link></li>
//           </ul>
//         </div>
//         <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-500">
//           <LogOut size={18} /> Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gradient-to-br from-green-700 to-blue-900 text-white p-10">
//         <h1 className="text-3xl font-bold mb-2">
//           Hello, {client?.firstName || client?.fullName?.split(" ")[0] || "Client"} 👋
//         </h1>
//         <p className="mb-8 text-white/90">Welcome to your dashboard overview.</p>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//           <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md">
//             <p className="text-sm text-gray-500 mb-2">Total Open Jobs</p>
//             <h2 className="text-2xl font-bold">{jobs.length}</h2>
//           </div>
//           <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md">
//             <p className="text-sm text-gray-500 mb-2">Recommended Talents</p>
//             <h2 className="text-2xl font-bold">{recommendedTalents.length}</h2>
//           </div>
//         </div>

//         {/* Active Jobs */}
//         <section className="mb-12">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold flex items-center gap-2">
//               <Briefcase /> Your Active Jobs
//             </h2>
//             <Link href="/client/create-job" className="text-white underline text-sm">+ Post New Job</Link>
//           </div>
//           {jobs.length === 0 ? (
//             <p className="text-white/80">You haven’t posted any jobs yet.</p>
//           ) : (
//             <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//               {jobs.map((job: any) => (
//                 <li
//                   key={job.id}
//                   className="bg-white text-black p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
//                   onClick={() =>
//                     router.push(`/client/view-talents?role=${encodeURIComponent(
//                       Array.isArray(job.roles) ? job.roles[0] : job.roles
//                     )}`)
//                   }
//                 >
//                   <h3 className="font-bold text-lg">{job.title}</h3>
//                   <p className="text-sm text-gray-700 mb-1">
//                     {Array.isArray(job.roles) ? job.roles.join(", ") : job.roles}
//                   </p>
//                   <p className="text-sm mb-2">{job.description.slice(0, 80)}...</p>
//                   <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
//                     {job.status ?? "open"}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>

//         {/* Recommended Talents */}
//         <section>
//           <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
//             <Sparkles /> Recommended Talents
//           </h2>
//           {recommendedTalents.length === 0 ? (
//             <p className="text-white/80">No talents matched your roles yet.</p>
//           ) : (
//             <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//               {recommendedTalents.map((talent: any) => (
//                 <li key={talent.id} className="bg-white text-black p-5 rounded-xl shadow-md">
//                   <h3 className="font-semibold text-lg">{talent.fullName}</h3>
//                   <p className="text-sm">{talent.role} • {talent.experience} yrs</p>
//                   <p className="text-sm text-gray-600 mb-2">Project: {talent.project}</p>
//                   <a
//                     href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-700 underline text-sm"
//                   >
//                     View CV
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }
//             // `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent(uniqueRoles[0])}`





// app/client/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  Sparkles,
  LayoutDashboard,
  LogOut,
  UserCircle,
  Plus,
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Clock,
  Building,
} from "lucide-react";

export default function ClientDashboardPage() {
  const router = useRouter();
  const [client, setClient] = useState<any>(null);
  const [jobs, setJobs] = useState([]);
  const [recommendedTalents, setRecommendedTalents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedClient = localStorage.getItem("client");
    if (!storedClient) {
      router.push("/client/login");
      return;
    }

    const parsedClient = JSON.parse(storedClient);
    setClient(parsedClient);

  // Replace the problematic section in your useEffect with this fixed version:

const fetchDashboardData = async () => {
  try {
    const jobRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${parsedClient.id}`
    );
    const openJobs = jobRes.data.filter((job: any) => job.status !== "closed");
    setJobs(openJobs);

    // Fix: Properly type the roles and add safety checks
    const uniqueRoles = Array.from(
      new Set(
        openJobs.flatMap((job: any) => {
          // Ensure job.roles is treated as string or string[]
          if (Array.isArray(job.roles)) {
            return job.roles.filter((role: any): role is string => typeof role === 'string');
          } else if (typeof job.roles === 'string') {
            return [job.roles];
          }
          return []; // Return empty array if roles is undefined/null
        })
      )
    ) as string[]; // Type assertion to string[]

    // Fix: Check if uniqueRoles has elements and the first element exists
    if (uniqueRoles.length > 0 && uniqueRoles[0]) {
      const talentRes = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent(uniqueRoles[0])}`
      );
      setRecommendedTalents(talentRes.data);
    }
  } catch (err) {
    console.error("Dashboard load error:", err);
  } finally {
    setLoading(false);
  }
};

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("client");
    router.push("/client/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full bg-blue-100/20 animate-pulse"></div>
          </div>
          <p className="mt-6 text-xl font-semibold text-slate-700">Loading your dashboard...</p>
          <p className="text-slate-500 mt-2">Getting everything ready for you</p>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { href: "/client/dashboard", icon: LayoutDashboard, label: "Dashboard", active: true },
    { href: "/client/create-job", icon: Briefcase, label: "Post a Job" },
    { href: "/client/view-talents", icon: Users, label: "Discover Talent" },
    { href: "/client/profile", icon: UserCircle, label: "Profile" },
  ];

  const stats = [
    {
      title: "Total Open Jobs",
      value: jobs.length,
      icon: Briefcase,
      gradient: "from-blue-500 to-blue-600",
      bg: "from-blue-50 to-blue-100",
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Recommended Talents",
      value: recommendedTalents.length,
      icon: Users,
      gradient: "from-emerald-500 to-emerald-600",
      bg: "from-emerald-50 to-emerald-100",
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Active Applications",
      value: "24",
      icon: FileText,
      gradient: "from-purple-500 to-purple-600",
      bg: "from-purple-50 to-purple-100",
      change: "+15%",
      changeType: "positive"
    },
    {
      title: "Avg. Response Time",
      value: "2.4h",
      icon: Clock,
      gradient: "from-orange-500 to-orange-600",
      bg: "from-orange-50 to-orange-100",
      change: "-20%",
      changeType: "positive"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Enhanced Sidebar */}
      <aside className="w-72 bg-white shadow-2xl border-r border-slate-200/50 flex flex-col">
        {/* Logo Section */}
        <div className="p-8 border-b border-slate-200/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Fornxt</h2>
              <p className="text-sm text-slate-500">Client Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    item.active
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <item.icon 
                    size={20} 
                    className={`${
                      item.active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                    }`} 
                  />
                  <span className="font-medium">{item.label}</span>
                  {item.active && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-6 border-t border-slate-200/50">
          <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {client?.firstName?.[0] || client?.fullName?.[0] || "C"}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900">
                {client?.firstName || client?.fullName?.split(" ")[0] || "Client"}
              </p>
              <p className="text-xs text-slate-500">{client?.email}</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200/50 p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Welcome back, {client?.firstName || client?.fullName?.split(" ")[0] || "Client"} 👋
              </h1>
              <p className="text-lg text-slate-600">
                Here's what's happening with your talent search today.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link href="/client/create-job">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <Plus size={20} />
                  Post New Job
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.bg} p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                    stat.changeType === 'positive' 
                      ? 'text-emerald-700 bg-emerald-100' 
                      : 'text-red-700 bg-red-100'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-600 font-medium">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Jobs */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
                <div className="p-6 border-b border-slate-200/50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Your Active Jobs</h2>
                        <p className="text-slate-500">Manage your current job postings</p>
                      </div>
                    </div>
                    <Link 
                      href="/client/create-job"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      <Plus size={16} />
                      Add New
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  {jobs.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">No active jobs yet</h3>
                      <p className="text-slate-500 mb-6">Post your first job to start finding amazing talent</p>
                      <Link href="/client/create-job">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                          Post Your First Job
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {jobs.map((job: any) => (
                        <div
                          key={job.id}
                          className="p-5 border border-slate-200 rounded-xl hover:shadow-md hover:border-blue-200 cursor-pointer transition-all duration-200 group"
                          onClick={() =>
                            router.push(`/client/view-talents?role=${encodeURIComponent(
                              Array.isArray(job.roles) ? job.roles[0] : job.roles
                            )}`)
                          }
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>
                            <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                              {job.status ?? "Active"}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <Users size={14} />
                              {Array.isArray(job.roles) ? job.roles.join(", ") : job.roles}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              Posted 2 days ago
                            </span>
                          </div>
                          
                          <p className="text-slate-600 mb-3">
                            {job.description.slice(0, 120)}...
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <span>24 Applications</span>
                              <span>•</span>
                              <span>5 Interviews</span>
                            </div>
                            <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Recommended Talents */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
                <div className="p-6 border-b border-slate-200/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Top Matches</h2>
                      <p className="text-slate-500">AI-recommended talent</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {recommendedTalents.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">No matches yet</h3>
                      <p className="text-slate-500 text-sm">Post a job to see AI-recommended talents</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recommendedTalents.slice(0, 3).map((talent: any) => (
                        <div key={talent.id} className="p-4 border border-slate-200 rounded-xl hover:shadow-md hover:border-purple-200 transition-all duration-200">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {talent.fullName[0]}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 mb-1">{talent.fullName}</h3>
                              <p className="text-sm text-slate-600 mb-2">
                                {talent.role} • {talent.experience} years
                              </p>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-slate-600">4.9</span>
                                </div>
                                <span className="text-slate-300">•</span>
                                <span className="text-sm text-slate-600 flex items-center gap-1">
                                  <MapPin size={12} />
                                  Remote
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mb-3">{talent.project}</p>
                              <a
                                href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                              >
                                View Profile
                                <ExternalLink size={12} />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {recommendedTalents.length > 3 && (
                        <Link href="/client/view-talents">
                          <button className="w-full py-3 text-purple-600 hover:text-purple-700 font-medium text-sm border-2 border-dashed border-purple-200 hover:border-purple-300 rounded-xl transition-colors">
                            View All {recommendedTalents.length} Matches
                          </button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/client/create-job">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Plus className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-900">Post New Job</span>
                </div>
              </Link>
              
              <Link href="/client/view-talents">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium text-slate-900">Browse Talent</span>
                </div>
              </Link>
              
              <Link href="/client/profile">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <UserCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-slate-900">Update Profile</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}