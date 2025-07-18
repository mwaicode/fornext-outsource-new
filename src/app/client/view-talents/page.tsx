// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";

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
//     <div className="min-h-screen bg-white text-blue-900 p-10">
//       <h2 className="text-2xl font-bold mb-6">Available Talents</h2>

//       {talents.length === 0 ? (
//         <p>No talents found for {role ?? "all roles"}.</p>
//       ) : (
//         <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {talents.map((talent: any) => (
//             <li
//               key={talent.id}
//               className="bg-white border border-gray-200 rounded-lg shadow p-6"
//             >
//               <h3 className="text-lg font-semibold mb-1">{talent.fullName}</h3>
//               <p className="text-sm text-gray-700 mb-1">
//                 {talent.role} • {talent.experience} yrs experience
//               </p>
//               <p className="text-sm text-gray-600 mb-2">Project: {talent.project}</p>
//               {talent.cvUrl && (
//                 <a
//                   href={`${process.env.NEXT_PUBLIC_API_URL}/${talent.cvUrl}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 underline text-sm"
//                 >
//                   View CV
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { UserCircle2, FileText, Briefcase } from "lucide-react";

export default function ViewTalentsPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [talents, setTalents] = useState([]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">
          Explore Top Tech Talents
        </h2>

        {talents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No talents found for <strong>{role ?? "all roles"}</strong>.
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {talents.map((talent: any) => (
              <li
                key={talent.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <UserCircle2 className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{talent.fullName}</h3>
                </div>

                <p className="text-sm text-gray-700 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-green-600" />
                  {talent.role} • {talent.experience} yrs experience
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Project: <span className="text-gray-800 font-medium">{talent.project}</span>
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
        )}
      </div>
    </div>
  );
}

