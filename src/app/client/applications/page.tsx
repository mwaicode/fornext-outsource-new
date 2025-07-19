"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { FileText, UserCircle2 } from "lucide-react";

export default function ViewApplicationsPage() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!jobId) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/applications/job/${jobId}`)
      .then((res) => setApplications(res.data))
      .catch((err) => console.error("Application fetch error:", err))
      .finally(() => setLoading(false));
  }, [jobId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Applications</h1>

        {loading ? (
          <p>Loading applications...</p>
        ) : applications.length === 0 ? (
          <p>No applications submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {applications.map((app: any) => (
              <li
                key={app.id}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <UserCircle2 className="w-8 h-8 text-blue-600" />
                  <h3 className="font-semibold text-lg">{app.talent.fullName}</h3>
                  <span className={`ml-auto text-sm px-3 py-1 rounded-full ${
                    app.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : app.status === "reviewed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {app.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  Role: <strong>{app.talent.role}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Experience: <strong>{app.talent.experience} yrs</strong>
                </p>

                {app.talent.cvUrl && (
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}/${app.talent.cvUrl}`}
                    className="text-blue-700 underline text-sm mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="inline w-4 h-4 mr-1" /> View CV
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
