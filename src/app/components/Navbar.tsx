// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

// export default function Navbar() {
  

//   const [menuOpen, setMenuOpen] = useState<boolean>(false);
//   const [servicesOpen, setServicesOpen] = useState<boolean>(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  
//   // const [resourcesOpen, setResourcesOpen] = useState(false);
//   const [] = useState<boolean>(false);
//   const [] = useState<string>("");

//   return (
//     <nav className="relative bg-gray-900 text-white shadow-lg px-6 py-4">
//       <div className="flex justify-between items-center max-w-7xl mx-auto">
        
//         {/* Logo + Brand Name */}
//         <Link href="/" className="flex items-center space-x-3">
//           <Image src="/folo.jpg" alt="Fornxt Logo" width={40} height={40} priority />
//           <span className="text-3xl font-bold text-neon">Fornxt</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link href="/" className="hover:text-neon transition duration-300">Home</Link>
//           <Link href="/about" className="hover:text-neon transition duration-300">About</Link>
//           <Link href="/resources/blog" className="hover:text-neon transition duration-300">Blog</Link>
//           <Link href="/shop" className="hover:text-neon transition duration-300">Shop</Link>
// {/*           
//           Resources Dropdown
//           <div className="relative">
//     <button 
//       className="flex items-center space-x-1 hover:text-neon transition duration-300"
//       onClick={() => setResourcesOpen(!resourcesOpen)}
//     >
//       <span>Resources</span>
//       <FaChevronDown className={`text-sm transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
//     </button> */}

//     {/* Resources Dropdown Menu */}
//     {/* {resourcesOpen && (
//       <div className="absolute left-0 mt-3 w-52 bg-gray-800 shadow-xl rounded-lg p-3 z-50">
//           <Link href="/resources/blog" className="text-gray-300 hover:text-white transition p-2 rounded-md">📝 Blog</Link>
//   <Link href="/resources/guides" className="text-gray-300 hover:text-white transition p-2 rounded-md">📚 Guides</Link>
//   <Link href="/resources/webinar" className="text-gray-300 hover:text-white transition p-2 rounded-md">🎥 Webinars</Link>
//   <Link href="/resources/tutorials" className="text-gray-300 hover:text-white transition p-2 rounded-md">📊 Case Studies</Link>
//   <Link href="/resources/faqs" className="text-gray-300 hover:text-white transition p-2 rounded-md">❓ FAQs</Link>
//       </div>
//     )}
//   </div> */}

//           {/* Services Dropdown */}
//           <div className="relative">
//             <button 
//               className="flex items-center space-x-1 hover:text-neon transition duration-300"
//               onClick={() => setServicesOpen(!servicesOpen)}
//             >
//               <span>Services</span>
//               <FaChevronDown className={`text-sm transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
//             </button>

//             {/* Dropdown Menu */}
//             {servicesOpen && (
//               <div className="absolute left-0 mt-3 w-52 bg-gray-800 shadow-xl rounded-lg p-3 z-50">
//                 <Link href="/services/web-design" className="block px-4 py-2 rounded-md hover:bg-gray-700 transition">🌐 Web Development </Link>
//                 <Link href="/services/mobile-design" className="block px-4 py-2 rounded-md hover:bg-gray-700 transition">📱 Mobile App development</Link>
//                 <Link href="/services/devops" className="block px-4 py-2 rounded-md hover:bg-gray-700 transition">⚙️ DevOps Automation</Link>
//                 <Link href="/services/cloud" className="block px-4 py-2 rounded-md hover:bg-gray-700 transition">☁️ Cloud Consulting</Link>
//                 <Link href="/services/software-development" className="block px-4 py-2 rounded-md hover:bg-gray-700 transition">🖥️ Software Development</Link>
//               </div>
//             )}
//           </div>
//            {/* Contact Link  */}
//            <Link
//             href="/contact"
//             className="px-6 py-3 bg-neon text-black rounded-full hover:bg-white hover:text-neon transition duration-300"
//           >
//             Contact
//           </Link>
          
//         </div>

//          {/* Mobile Menu Button */}
        
//          <button
//           className="md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-900 text-white space-y-4 py-4 px-6">
          
          
  

//           <Link href="/" className="block hover:text-neon transition" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link href="/about" className="block hover:text-neon transition" onClick={() => setMenuOpen(false)}>About</Link>
//           <Link href="/resources/blog" className="block hover:text-neon transition" onClick={() => setMenuOpen(false)}>Blog</Link>
//           <Link href="/shop" className="block hover:text-neon transition" onClick={() => setMenuOpen(false)}>Shop</Link>

//           {/* Mobile Services Dropdown */}
//           <div className="flex flex-col">
//             <button
//               className="flex items-center space-x-2 hover:text-neon transition"
//               onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//             >
//               <span>Services</span>
//               <FaChevronDown
//                 className={`text-sm transition-transform duration-300 ${
//                   mobileServicesOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {mobileServicesOpen && (
//               <div className="flex flex-col mt-2 space-y-2 text-gray-300">
//                 <Link href="/services/web-design" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>🌐 Web Development</Link>
//                 <Link href="/services/mobile-design" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>📱 Mobile App Development</Link>
//                 <Link href="/services/devops" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>⚙️ DevOps Automation</Link>
//                 <Link href="/services/cloud" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>☁️ Cloud Consulting</Link>
//                 <Link href="/services/software-development" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>🖥️ Software Development</Link>
//               </div>
              
//             )}
      
//           </div>

          

//           <Link href="/contact" className="hover:text-neon transition duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
         

          
//         </div>
//       )}
//     </nav>
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
    const handleClickOutside = (e: any) => {
      if (!e.target.closest(".dropdown")) {
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
