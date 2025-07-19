
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

    const fetchDashboardData = async () => {
      try {
        const jobRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/jobs/client/${parsedClient.id}`
        );
        const openJobs = jobRes.data.filter((job: any) => job.status !== "closed");
        setJobs(openJobs);

        const uniqueRoles = Array.from(
          new Set(openJobs.flatMap((job: any) => job.roles || []))
        );

        if (uniqueRoles.length > 0) {
          const talentRes = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent}`
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
      <div className="flex items-center justify-center min-h-screen bg-white text-blue-900">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900"></div>
        <p className="ml-4 text-lg font-semibold">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col justify-between rounded-tr-xl rounded-br-xl">
        <div>
          <h2 className="text-2xl font-extrabold mb-8">Fornxt 💼</h2>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/client/dashboard" className="flex gap-2 items-center hover:underline"><LayoutDashboard size={18} /> Dashboard</Link></li>
            <li><Link href="/client/create-job" className="flex gap-2 items-center hover:underline"><Briefcase size={18} /> Post a Job</Link></li>
            <li><Link href="/client/view-talents" className="flex gap-2 items-center hover:underline"><Users size={18} /> Discover Talent</Link></li>
            <li><Link href="/client/profile" className="flex gap-2 items-center hover:underline"><UserCircle size={18} /> Profile</Link></li>
          </ul>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-500">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-green-700 to-blue-900 text-white p-10">
        <h1 className="text-3xl font-bold mb-2">
          Hello, {client?.firstName || client?.fullName?.split(" ")[0] || "Client"} 👋
        </h1>
        <p className="mb-8 text-white/90">Welcome to your dashboard overview.</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-2">Total Open Jobs</p>
            <h2 className="text-2xl font-bold">{jobs.length}</h2>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-2">Recommended Talents</p>
            <h2 className="text-2xl font-bold">{recommendedTalents.length}</h2>
          </div>
        </div>

        {/* Active Jobs */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase /> Your Active Jobs
            </h2>
            <Link href="/client/create-job" className="text-white underline text-sm">+ Post New Job</Link>
          </div>
          {jobs.length === 0 ? (
            <p className="text-white/80">You haven’t posted any jobs yet.</p>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job: any) => (
                <li
                  key={job.id}
                  className="bg-white text-black p-5 rounded-xl shadow-md hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    router.push(`/client/view-talents?role=${encodeURIComponent(
                      Array.isArray(job.roles) ? job.roles[0] : job.roles
                    )}`)
                  }
                >
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-700 mb-1">
                    {Array.isArray(job.roles) ? job.roles.join(", ") : job.roles}
                  </p>
                  <p className="text-sm mb-2">{job.description.slice(0, 80)}...</p>
                  <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {job.status ?? "open"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Recommended Talents */}
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Sparkles /> Recommended Talents
          </h2>
          {recommendedTalents.length === 0 ? (
            <p className="text-white/80">No talents matched your roles yet.</p>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recommendedTalents.map((talent: any) => (
                <li key={talent.id} className="bg-white text-black p-5 rounded-xl shadow-md">
                  <h3 className="font-semibold text-lg">{talent.fullName}</h3>
                  <p className="text-sm">{talent.role} • {talent.experience} yrs</p>
                  <p className="text-sm text-gray-600 mb-2">Project: {talent.project}</p>
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline text-sm"
                  >
                    View CV
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
            // `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent(uniqueRoles[0])}`

