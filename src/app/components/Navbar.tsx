// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { UserCircle, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e: any) => {
//       if (!e.target.closest(".dropdown")) {
//         setDropdownOpen(false);
//       }
//     };
//     window.addEventListener("click", handleClickOutside);
//     return () => window.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-800">
//           Fornxt
//         </Link>

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:flex gap-8 items-center text-gray-800 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/how-it-works">How It Works</Link>
//           <Link href="/solutions">Solutions</Link>
//           <Link href="/hire">Hire Talent</Link>
//           <Link href="/contact">Contact</Link>

//           {/* User Dropdown */}
//           <div className="relative dropdown">
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setDropdownOpen(!dropdownOpen);
//               }}
//               className="text-gray-700 hover:text-blue-700 focus:outline-none"
//             >
//               <UserCircle size={28} />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-50">
//                 {/* CLIENT */}
//                 <div className="px-4 py-2 text-sm text-gray-600 font-semibold">Client</div>
//                 <Link href="/client/login" className="block px-4 py-2 hover:bg-gray-100">
//                   Login
//                 </Link>
//                 <Link href="/client/signup" className="block px-4 py-2 hover:bg-gray-100">
//                   Sign Up
//                 </Link>

//                 <hr className="my-2" />

//                 {/* TALENT */}
//                 <div className="px-4 py-2 text-sm text-gray-600 font-semibold">Talent</div>
//                 <Link href="/talent/login" className="block px-4 py-2 hover:bg-gray-100">
//                   Login
//                 </Link>
//                 <Link href="/talent/signup" className="block px-4 py-2 hover:bg-gray-100">
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg px-6 pb-6">
//           <nav className="flex flex-col gap-4 text-gray-800 font-medium">
//             <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//             <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
//             <Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
//             <Link href="/hire" onClick={() => setMenuOpen(false)}>Hire Talent</Link>
//             <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

//             <hr />

//             <div className="text-sm text-gray-500 font-semibold">Client</div>
//             <Link href="/client/login" onClick={() => setMenuOpen(false)}>Login</Link>
//             <Link href="/client/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>

//             <div className="text-sm text-gray-500 font-semibold mt-2">Talent</div>
//             <Link href="/talent/login" onClick={() => setMenuOpen(false)}>Login</Link>
//             <Link href="/talent/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }




















"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { UserCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-800">
          Fornxt
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/hire">Hire Talent</Link>
          <Link href="/contact">Contact</Link>

          {/* User Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              <UserCircle size={28} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-50">
                {/* CLIENT */}
                <div className="px-4 py-2 text-sm text-gray-600 font-semibold">Client</div>
                <Link href="/client/login" className="block px-4 py-2 hover:bg-gray-100">
                  Login
                </Link>
                <Link href="/client/signup" className="block px-4 py-2 hover:bg-gray-100">
                  Sign Up
                </Link>

                <hr className="my-2" />

                {/* TALENT */}
                <div className="px-4 py-2 text-sm text-gray-600 font-semibold">Talent</div>
                <Link href="/talent/login" className="block px-4 py-2 hover:bg-gray-100">
                  Login
                </Link>
                <Link href="/talent/signup" className="block px-4 py-2 hover:bg-gray-100">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <nav className="flex flex-col gap-4 text-gray-800 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
            <Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
            <Link href="/hire" onClick={() => setMenuOpen(false)}>Hire Talent</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <hr />

            <div className="text-sm text-gray-500 font-semibold">Client</div>
            <Link href="/client/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link href="/client/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>

            <div className="text-sm text-gray-500 font-semibold mt-2">Talent</div>
            <Link href="/talent/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link href="/talent/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
