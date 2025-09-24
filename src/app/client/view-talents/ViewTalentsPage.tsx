

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import { UserCircle2, FileText, Briefcase } from "lucide-react";

// export default function ViewTalentsPage() {
//   const searchParams = useSearchParams();
//   const role = searchParams.get("role");

//   const [talents, setTalents] = useState([]);

//   useEffect(() => {
//     const fetchTalents = async () => {
//       try {
//         let url = `${process.env.NEXT_PUBLIC_API_URL}/talents`;
//         if (role) {
//           url = `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent(role)}`;
//         }

//         const res = await axios.get(url);
//         setTalents(res.data);
//       } catch (err) {
//         alert("Failed to load talents");
//       }
//     };

//     fetchTalents();
//   }, [role]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-10">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
//           Explore Top Tech Talents
//         </h2>

//         {talents.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg">
//             No talents found for <strong>{role ?? "all roles"}</strong>.
//           </p>
//         ) : (
//           <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {talents.map((talent: any) => (
//               <li
//                 key={talent.id}
//                 className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition hover:shadow-xl"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <UserCircle2 className="w-8 h-8 text-blue-600" />
//                   <h3 className="text-xl font-bold text-gray-900">{talent.fullName}</h3>
//                 </div>

//                 <p className="text-sm text-gray-700 mb-2 flex items-center gap-2">
//                   <Briefcase className="w-4 h-4 text-green-600" />
//                   {talent.role} • {talent.experience} yrs experience
//                 </p>

//                 <p className="text-sm text-gray-600 mb-3">
//                   Project: <span className="text-gray-800 font-medium">{talent.project}</span>
//                 </p>

//                 {talent.cvUrl && (
//                   <a
//                     href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-green-700 hover:underline text-sm font-medium mt-3"
//                   >
//                     <FileText className="w-4 h-4" />
//                     View CV
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { UserCircle2, FileText, Briefcase } from "lucide-react";

const TALENTS_PER_PAGE = 6;

export default function ViewTalentsPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const router = useRouter();

  const [talents, setTalents] = useState([]);
  const [filteredTalents, setFilteredTalents] = useState([]);
  const [search, setSearch] = useState("");
  const [minExperience, setMinExperience] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/talents`;
        if (role) {
          url = `${process.env.NEXT_PUBLIC_API_URL}/talents/by-role/${encodeURIComponent(role)}`;
        }

        const res = await axios.get(url);
        setTalents(res.data);
      } catch (err) {
        alert("Failed to load talents");
      }
    };

    fetchTalents();
  }, [role]);

  useEffect(() => {
    const filtered = talents
      .filter((t: any) => t.experience >= minExperience)
      .filter((t: any) =>
        t.fullName.toLowerCase().includes(search.toLowerCase())
      );

    setFilteredTalents(filtered);
    setPage(1); // Reset to first page on filter
  }, [search, minExperience, talents]);

  const paginatedTalents = filteredTalents.slice(
    (page - 1) * TALENTS_PER_PAGE,
    page * TALENTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredTalents.length / TALENTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          Explore Top Tech Talents
        </h2>

        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="border p-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={minExperience}
            onChange={(e) => setMinExperience(Number(e.target.value))}
            className="border p-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
          >
            <option value={0}>All Experience Levels</option>
            <option value={1}>1+ years</option>
            <option value={2}>2+ years</option>
            <option value={3}>3+ years</option>
            <option value={5}>5+ years</option>
          </select>
        </div>

        {paginatedTalents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No talents found for <strong>{role ?? "all roles"}</strong>.
          </p>
        ) : (
          <>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedTalents.map((talent: any) => (
                <li
                  key={talent.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <UserCircle2 className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {talent.fullName}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-700 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    {talent.role} • {talent.experience} yrs experience
                  </p>

                  <p className="text-sm text-gray-600 mb-2">
                    Project:{" "}
                    <span className="text-gray-800 font-medium">
                      {talent.project}
                    </span>
                  </p>

                  {talent.cvUrl && (
                    <a
                      href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-700 hover:underline text-sm font-medium mt-3"
                    >
                      <FileText className="w-4 h-4" />
                      View CV
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-4">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className={`px-4 py-2 rounded ${
                  page === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                ← Prev
              </button>

              <span className="text-gray-700 mt-2">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className={`px-4 py-2 rounded ${
                  page === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
