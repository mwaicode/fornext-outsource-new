// "use client";

// import React from "react";

// export default function WelcomeClientPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 px-6">
//       <div className="text-center max-w-xl">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Fornxt! 🎉</h1>
//         <p className="text-lg text-gray-700">
//           Let’s get started by creating your first job. You can list roles you’re hiring for,
//           define the budget, and start browsing talent profiles.
//         </p>
//         <div className="mt-6">
//           <a
//             href="/client/create-job"
//             className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
//           >
//             Create My First Job
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import React from "react";
import Link from "next/link";

export default function WelcomeClientPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fornxt! 🎉</h1>
        <p className="text-lg text-gray-700">
          Let’s get started by creating your first job. You can list roles you’re hiring for,
          define the budget, and start browsing talent profiles.
        </p>
        <div className="mt-6">
          <Link
            href="/client/create-job"
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition inline-block"
          >
            Create My First Job
          </Link>
        </div>
      </div>
    </div>
  );
}
