
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
//   Sparkles,
//   LayoutDashboard,
//   LogOut,
//   UserCircle,
//   Plus,
//   ExternalLink,
//   Calendar,
//   MapPin,
//   Star,
//   Clock,
//   Building,
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

//   // Replace the problematic section in your useEffect with this fixed version:

// const fetchDashboardData = async () => {
//   try {
//     const jobRes = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${parsedClient.id}`
//     );
//     const openJobs = jobRes.data.filter((job: any) => job.status !== "closed");
//     setJobs(openJobs);

//     // Fix: Properly type the roles and add safety checks
//     const uniqueRoles = Array.from(
//       new Set(
//         openJobs.flatMap((job: any) => {
//           // Ensure job.roles is treated as string or string[]
//           if (Array.isArray(job.roles)) {
//             return job.roles.filter((role: any): role is string => typeof role === 'string');
//           } else if (typeof job.roles === 'string') {
//             return [job.roles];
//           }
//           return []; // Return empty array if roles is undefined/null
//         })
//       )
//     ) as string[]; // Type assertion to string[]

//     // Fix: Check if uniqueRoles has elements and the first element exists
//     if (uniqueRoles.length > 0 && uniqueRoles[0]) {
//       const talentRes = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent(uniqueRoles[0])}`
//       );
//       setRecommendedTalents(talentRes.data);
//     }
//   } catch (err) {
//     console.error("Dashboard load error:", err);
//   } finally {
//     setLoading(false);
//   }
// };

//     fetchDashboardData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("client");
//     router.push("/client/login");
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="text-center">
//           <div className="relative">
//             <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
//             <div className="absolute inset-0 rounded-full bg-blue-100/20 animate-pulse"></div>
//           </div>
//           <p className="mt-6 text-xl font-semibold text-slate-700">Loading your dashboard...</p>
//           <p className="text-slate-500 mt-2">Getting everything ready for you</p>
//         </div>
//       </div>
//     );
//   }

//   const sidebarItems = [
//     { href: "/client/dashboard", icon: LayoutDashboard, label: "Dashboard", active: true },
//     { href: "/client/create-job", icon: Briefcase, label: "Post a Job" },
//     { href: "/client/view-talents", icon: Users, label: "Discover Talent" },
//     { href: "/client/profile", icon: UserCircle, label: "Profile" },
//   ];

//   const stats = [
//     {
//       title: "Total Open Jobs",
//       value: jobs.length,
//       icon: Briefcase,
//       gradient: "from-blue-500 to-blue-600",
//       bg: "from-blue-50 to-blue-100",
//       change: "+12%",
//       changeType: "positive"
//     },
//     {
//       title: "Recommended Talents",
//       value: recommendedTalents.length,
//       icon: Users,
//       gradient: "from-emerald-500 to-emerald-600",
//       bg: "from-emerald-50 to-emerald-100",
//       change: "+8%",
//       changeType: "positive"
//     },
//     {
//       title: "Active Applications",
//       value: "24",
//       icon: FileText,
//       gradient: "from-purple-500 to-purple-600",
//       bg: "from-purple-50 to-purple-100",
//       change: "+15%",
//       changeType: "positive"
//     },
//     {
//       title: "Avg. Response Time",
//       value: "2.4h",
//       icon: Clock,
//       gradient: "from-orange-500 to-orange-600",
//       bg: "from-orange-50 to-orange-100",
//       change: "-20%",
//       changeType: "positive"
//     }
//   ];

//   return (
//     <div className="flex min-h-screen bg-slate-50">
//       {/* Enhanced Sidebar */}
//       <aside className="w-72 bg-white shadow-2xl border-r border-slate-200/50 flex flex-col">
//         {/* Logo Section */}
//         <div className="p-8 border-b border-slate-200/50">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
//               <Building className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-slate-900">Fornxt</h2>
//               <p className="text-sm text-slate-500">Client Portal</p>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-6">
//           <ul className="space-y-2">
//             {sidebarItems.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   href={item.href}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
//                     item.active
//                       ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm"
//                       : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                   }`}
//                 >
//                   <item.icon 
//                     size={20} 
//                     className={`${
//                       item.active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
//                     }`} 
//                   />
//                   <span className="font-medium">{item.label}</span>
//                   {item.active && (
//                     <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* User Section */}
//         <div className="p-6 border-t border-slate-200/50">
//           <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-xl">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
//               {client?.firstName?.[0] || client?.fullName?.[0] || "C"}
//             </div>
//             <div className="flex-1">
//               <p className="font-semibold text-slate-900">
//                 {client?.firstName || client?.fullName?.split(" ")[0] || "Client"}
//               </p>
//               <p className="text-xs text-slate-500">{client?.email}</p>
//             </div>
//           </div>
          
//           <button 
//             onClick={handleLogout}
//             className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
//           >
//             <LogOut size={18} />
//             <span className="font-medium">Logout</span>
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         {/* Header */}
//         <header className="bg-white border-b border-slate-200/50 p-8">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-4xl font-bold text-slate-900 mb-2">
//                 Welcome back, {client?.firstName || client?.fullName?.split(" ")[0] || "Client"} 👋
//               </h1>
//               <p className="text-lg text-slate-600">
//                 Here's what's happening with your talent search today.
//               </p>
//             </div>
            
//             <div className="flex gap-3">
//               <Link href="/client/create-job">
//                 <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
//                   <Plus size={20} />
//                   Post New Job
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </header>

//         <div className="p-8">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br ${stat.bg} p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer`}
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
//                     <stat.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
//                     stat.changeType === 'positive' 
//                       ? 'text-emerald-700 bg-emerald-100' 
//                       : 'text-red-700 bg-red-100'
//                   }`}>
//                     {stat.change}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
//                 <p className="text-slate-600 font-medium">{stat.title}</p>
//               </div>
//             ))}
//           </div>

//           {/* Content Grid */}
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Active Jobs */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
//                 <div className="p-6 border-b border-slate-200/50">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-blue-100 rounded-lg">
//                         <Briefcase className="w-5 h-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl font-bold text-slate-900">Your Active Jobs</h2>
//                         <p className="text-slate-500">Manage your current job postings</p>
//                       </div>
//                     </div>
//                     <Link 
//                       href="/client/create-job"
//                       className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
//                     >
//                       <Plus size={16} />
//                       Add New
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   {jobs.length === 0 ? (
//                     <div className="text-center py-12">
//                       <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <Briefcase className="w-8 h-8 text-slate-400" />
//                       </div>
//                       <h3 className="text-lg font-semibold text-slate-900 mb-2">No active jobs yet</h3>
//                       <p className="text-slate-500 mb-6">Post your first job to start finding amazing talent</p>
//                       <Link href="/client/create-job">
//                         <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
//                           Post Your First Job
//                         </button>
//                       </Link>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {jobs.map((job: any) => (
//                         <div
//                           key={job.id}
//                           className="p-5 border border-slate-200 rounded-xl hover:shadow-md hover:border-blue-200 cursor-pointer transition-all duration-200 group"
//                           onClick={() =>
//                             router.push(`/client/view-talents?role=${encodeURIComponent(
//                               Array.isArray(job.roles) ? job.roles[0] : job.roles
//                             )}`)
//                           }
//                         >
//                           <div className="flex justify-between items-start mb-3">
//                             <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
//                               {job.title}
//                             </h3>
//                             <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
//                               {job.status ?? "Active"}
//                             </span>
//                           </div>
                          
//                           <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
//                             <span className="flex items-center gap-1">
//                               <Users size={14} />
//                               {Array.isArray(job.roles) ? job.roles.join(", ") : job.roles}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <Calendar size={14} />
//                               Posted 2 days ago
//                             </span>
//                           </div>
                          
//                           <p className="text-slate-600 mb-3">
//                             {job.description.slice(0, 120)}...
//                           </p>
                          
//                           <div className="flex justify-between items-center">
//                             <div className="flex items-center gap-4 text-sm text-slate-500">
//                               <span>24 Applications</span>
//                               <span>•</span>
//                               <span>5 Interviews</span>
//                             </div>
//                             <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Recommended Talents */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
//                 <div className="p-6 border-b border-slate-200/50">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
//                       <Sparkles className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-bold text-slate-900">Top Matches</h2>
//                       <p className="text-slate-500">AI-recommended talent</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   {recommendedTalents.length === 0 ? (
//                     <div className="text-center py-8">
//                       <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <Sparkles className="w-6 h-6 text-purple-500" />
//                       </div>
//                       <h3 className="font-semibold text-slate-900 mb-2">No matches yet</h3>
//                       <p className="text-slate-500 text-sm">Post a job to see AI-recommended talents</p>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {recommendedTalents.slice(0, 3).map((talent: any) => (
//                         <div key={talent.id} className="p-4 border border-slate-200 rounded-xl hover:shadow-md hover:border-purple-200 transition-all duration-200">
//                           <div className="flex items-start gap-3">
//                             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                               {talent.fullName[0]}
//                             </div>
//                             <div className="flex-1">
//                               <h3 className="font-semibold text-slate-900 mb-1">{talent.fullName}</h3>
//                               <p className="text-sm text-slate-600 mb-2">
//                                 {talent.role} • {talent.experience} years
//                               </p>
//                               <div className="flex items-center gap-2 mb-3">
//                                 <div className="flex items-center gap-1">
//                                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                                   <span className="text-sm text-slate-600">4.9</span>
//                                 </div>
//                                 <span className="text-slate-300">•</span>
//                                 <span className="text-sm text-slate-600 flex items-center gap-1">
//                                   <MapPin size={12} />
//                                   Remote
//                                 </span>
//                               </div>
//                               <p className="text-xs text-slate-500 mb-3">{talent.project}</p>
//                               <a
//                                 href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
//                               >
//                                 View Profile
//                                 <ExternalLink size={12} />
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
                      
//                       {recommendedTalents.length > 3 && (
//                         <Link href="/client/view-talents">
//                           <button className="w-full py-3 text-purple-600 hover:text-purple-700 font-medium text-sm border-2 border-dashed border-purple-200 hover:border-purple-300 rounded-xl transition-colors">
//                             View All {recommendedTalents.length} Matches
//                           </button>
//                         </Link>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
//             <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <Link href="/client/create-job">
//                 <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
//                   <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
//                     <Plus className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <span className="font-medium text-slate-900">Post New Job</span>
//                 </div>
//               </Link>
              
//               <Link href="/client/view-talents">
//                 <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
//                   <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
//                     <Users className="w-5 h-5 text-emerald-600" />
//                   </div>
//                   <span className="font-medium text-slate-900">Browse Talent</span>
//                 </div>
//               </Link>
              
//               <Link href="/client/profile">
//                 <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
//                   <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
//                     <UserCircle className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <span className="font-medium text-slate-900">Update Profile</span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }























































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
  Sparkles,
  LayoutDashboard,
  LogOut,
  UserCircle,
  Plus,
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  Clock,
  Building,
  Menu,
  X,
} from "lucide-react";

export default function ClientDashboardPage() {
  const router = useRouter();
  const [client, setClient] = useState<any>(null);
  const [jobs, setJobs] = useState([]);
  const [recommendedTalents, setRecommendedTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedClient = localStorage.getItem("client");
    if (!storedClient) {
      router.push("/client/login");
      return;
    }

    const parsedClient = JSON.parse(storedClient);
    setClient(parsedClient);

    const fetchDashboardData = async () => {
      try {
        const jobRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${parsedClient.id}`
        );
        const openJobs = jobRes.data.filter((job: any) => job.status !== "closed");
        setJobs(openJobs);

        const uniqueRoles = Array.from(
          new Set(
            openJobs.flatMap((job: any) => {
              if (Array.isArray(job.roles)) {
                return job.roles.filter((role: any): role is string => typeof role === 'string');
              } else if (typeof job.roles === 'string') {
                return [job.roles];
              }
              return [];
            })
          )
        ) as string[];

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

  const SidebarContent = () => (
    <>
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
                onClick={() => setSidebarOpen(false)}
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
            <p className="font-semibold text-slate-900 text-sm">
              {client?.firstName || client?.fullName?.split(" ")[0] || "Client"}
            </p>
            <p className="text-xs text-slate-500 truncate">{client?.email}</p>
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
    </>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white shadow-2xl border-r border-slate-200/50 flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed top-0 left-0 bottom-0 w-72 bg-white shadow-2xl border-r border-slate-200/50 flex flex-col z-50 transform transition-transform duration-300 lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200/50 p-4 lg:p-8">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-3 flex-1">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-slate-600" />
              </button>
              
              <div className="flex-1">
                <h1 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-1 lg:mb-2">
                  Welcome back, {client?.firstName || client?.fullName?.split(" ")[0] || "Client"} 👋
                </h1>
                <p className="text-sm lg:text-lg text-slate-600">
                  Here's what's happening with your talent search today.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link href="/client/create-job">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm lg:text-base">
                  <Plus size={18} className="lg:w-5 lg:h-5" />
                  <span className="hidden sm:inline">Post New Job</span>
                  <span className="sm:hidden">Post</span>
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.bg} p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-3 lg:mb-4">
                  <div className={`p-2 lg:p-3 bg-gradient-to-r ${stat.gradient} rounded-lg lg:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <stat.icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <span className={`text-xs lg:text-sm font-semibold px-2 py-1 rounded-full ${
                    stat.changeType === 'positive' 
                      ? 'text-emerald-700 bg-emerald-100' 
                      : 'text-red-700 bg-red-100'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-600 font-medium text-xs lg:text-sm">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Active Jobs */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
                <div className="p-4 lg:p-6 border-b border-slate-200/50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-lg lg:text-xl font-bold text-slate-900">Your Active Jobs</h2>
                        <p className="text-slate-500 text-xs lg:text-sm hidden sm:block">Manage your current job postings</p>
                      </div>
                    </div>
                    <Link 
                      href="/client/create-job"
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs lg:text-sm flex items-center gap-1"
                    >
                      <Plus size={14} className="lg:w-4 lg:h-4" />
                      <span className="hidden sm:inline">Add New</span>
                    </Link>
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  {jobs.length === 0 ? (
                    <div className="text-center py-8 lg:py-12">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-slate-400" />
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-slate-900 mb-2">No active jobs yet</h3>
                      <p className="text-slate-500 mb-4 lg:mb-6 text-sm">Post your first job to start finding amazing talent</p>
                      <Link href="/client/create-job">
                        <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm lg:text-base">
                          Post Your First Job
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3 lg:space-y-4">
                      {jobs.map((job: any) => (
                        <div
                          key={job.id}
                          className="p-4 lg:p-5 border border-slate-200 rounded-xl hover:shadow-md hover:border-blue-200 cursor-pointer transition-all duration-200 group"
                          onClick={() =>
                            router.push(`/client/view-talents?role=${encodeURIComponent(
                              Array.isArray(job.roles) ? job.roles[0] : job.roles
                            )}`)
                          }
                        >
                          <div className="flex justify-between items-start mb-2 lg:mb-3">
                            <h3 className="font-bold text-base lg:text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>
                            <span className="text-xs font-semibold px-2 lg:px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full whitespace-nowrap ml-2">
                              {job.status ?? "Active"}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 lg:gap-4 mb-2 lg:mb-3 text-xs lg:text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <Users size={12} className="lg:w-3.5 lg:h-3.5" />
                              <span className="truncate max-w-[150px]">
                                {Array.isArray(job.roles) ? job.roles.join(", ") : job.roles}
                              </span>
                            </span>
                            <span className="hidden sm:flex items-center gap-1">
                              <Calendar size={12} className="lg:w-3.5 lg:h-3.5" />
                              Posted 2 days ago
                            </span>
                          </div>
                          
                          <p className="text-slate-600 mb-2 lg:mb-3 text-sm lg:text-base line-clamp-2">
                            {job.description.slice(0, 120)}...
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 lg:gap-4 text-xs lg:text-sm text-slate-500">
                              <span>24 Applications</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="hidden sm:inline">5 Interviews</span>
                            </div>
                            <ExternalLink size={14} className="lg:w-4 lg:h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
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
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
                <div className="p-4 lg:p-6 border-b border-slate-200/50">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                      <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-xl font-bold text-slate-900">Top Matches</h2>
                      <p className="text-slate-500 text-xs lg:text-sm hidden sm:block">AI-recommended talent</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:p-6">
                  {recommendedTalents.length === 0 ? (
                    <div className="text-center py-6 lg:py-8">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                        <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-purple-500" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2 text-sm lg:text-base">No matches yet</h3>
                      <p className="text-slate-500 text-xs lg:text-sm">Post a job to see AI-recommended talents</p>
                    </div>
                  ) : (
                    <div className="space-y-3 lg:space-y-4">
                      {recommendedTalents.slice(0, 3).map((talent: any) => (
                        <div key={talent.id} className="p-3 lg:p-4 border border-slate-200 rounded-xl hover:shadow-md hover:border-purple-200 transition-all duration-200">
                          <div className="flex items-start gap-2 lg:gap-3">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-lg flex-shrink-0">
                              {talent.fullName[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-slate-900 mb-1 text-sm lg:text-base truncate">{talent.fullName}</h3>
                              <p className="text-xs lg:text-sm text-slate-600 mb-2">
                                {talent.role} • {talent.experience} years
                              </p>
                              <div className="flex items-center gap-2 mb-2 lg:mb-3 flex-wrap">
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                                  <span className="text-xs lg:text-sm text-slate-600">4.9</span>
                                </div>
                                <span className="text-slate-300">•</span>
                                <span className="text-xs lg:text-sm text-slate-600 flex items-center gap-1">
                                  <MapPin size={10} className="lg:w-3 lg:h-3" />
                                  Remote
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mb-2 lg:mb-3 line-clamp-1">{talent.project}</p>
                              <a
                                href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs lg:text-sm font-medium"
                              >
                                View Profile
                                <ExternalLink size={10} className="lg:w-3 lg:h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {recommendedTalents.length > 3 && (
                        <Link href="/client/view-talents">
                          <button className="w-full py-2 lg:py-3 text-purple-600 hover:text-purple-700 font-medium text-xs lg:text-sm border-2 border-dashed border-purple-200 hover:border-purple-300 rounded-xl transition-colors">
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
          <div className="mt-6 lg:mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-blue-100">
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
              <Link href="/client/create-job">
                <div className="flex items-center gap-3 p-3 lg:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-900 text-sm lg:text-base">Post New Job</span>
                </div>
              </Link>
              
              <Link href="/client/view-talents">
                <div className="flex items-center gap-3 p-3 lg:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium text-slate-900 text-sm lg:text-base">Browse Talent</span>
                </div>
              </Link>
              
              <Link href="/client/profile">
                <div className="flex items-center gap-3 p-3 lg:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <UserCircle className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-slate-900 text-sm lg:text-base">Update Profile</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}