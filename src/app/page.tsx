
// // pages/index.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const workWays = [
//   {
//     title: "Hire anywhere. Deliver everywhere.",
//     desc: "Find the right talent and increase productivity when you prioritize skill and experience over location.",
//     img: "/images/hire-everywhere.svg",
//   },
//   {
//     title: "Make work happen fast.",
//     desc: "Get the resources you need, when you need them. Onboard easily. Reduce backlog. Quickly generate proof of concepts. Accelerate time to results.",
//     img: "/images/fast-results.svg",
//   },
//   {
//     title: "Change as quickly as your priorities do.",
//     desc: "Scale up or down as your business needs change. Add or reduce workforce on demand. Easily adapt as project and business needs evolve.",
//     img: "/images/scaling.svg",
//   },
//   {
//     title: "Leave the groundwork to us.",
//     desc: "Andela simplifies the complexity of global hiring by ensuring you meet only qualified, accredited, and certified talent. Be free of all compliance, legal, and payouts, while getting all the support you need from expert hiring managers.",
//     img: "/images/compliance.svg",
//   },
//   {
//     title: "Work the way that works for you.",
//     desc: "Hire for specific roles, to fill skill gaps, or get projects delivered on time. Embed talent in your teams or identify a turnkey project that we deliver and manage for you.",
//     img: "/images/flexibility.svg",
//   },
// ];

// export default function HomePage() {
//   return (
//     <div className="bg-white text-gray-900 overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-900 to-blue-600 text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-bold mb-4 max-w-4xl leading-tight"
//         >
//           Build better DevOps, Data, and AI solutions — faster
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.5 }}
//           className="text-xl md:text-2xl max-w-2xl mb-6"
//         >
//           There are over 150,000 highly skilled tech professionals in our talent pool—most in untapped markets, ready to be placed effectively.
//         </motion.p>

//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link href="/hire">
//             <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 shadow">
//               Hire Talent
//             </button>
//           </Link>

//           <Link href="/adaptive-hiring">
//             <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all">
//               What is Adaptive Hiring?
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* STATS SECTION */}
//       <section className="bg-gray-50 py-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
//         <div>
//           <h2 className="text-4xl font-bold text-blue-700">150k+</h2>
//           <p className="text-gray-600 mt-2">Top-rated global tech talent</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold text-blue-700">$80,000</h2>
//           <p className="text-gray-600 mt-2">Avg. cost saved per hire</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold text-blue-700">66%</h2>
//           <p className="text-gray-600 mt-2">Faster time to hire</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold text-blue-700">33%</h2>
//           <p className="text-gray-600 mt-2">Faster project delivery</p>
//         </div>
//       </section>

//       {/* TRUSTED BY SECTION */}
//       <section className="bg-white py-16 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//           Trusted by Industry Leaders
//         </h2>
//         <div className="flex flex-wrap justify-center gap-12 items-center">
//           <Image src="/logos/coursera.svg" alt="Coursera" width={120} height={40} />
//           <Image src="/logos/mastercard.svg" alt="Mastercard" width={120} height={40} />
//           <Image src="/logos/viacomcbs.svg" alt="ViacomCBS" width={120} height={40} />
//           <Image src="/logos/github.svg" alt="GitHub" width={120} height={40} />
//           <Image src="/logos/casper.svg" alt="Casper" width={120} height={40} />
//           <Image src="/logos/cloudflare.svg" alt="Cloudflare" width={120} height={40} />
//         </div>
//       </section>

//       {/* WORK THE WAY THAT WORKS SECTION */}
//       <section className="bg-gray-50 py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-14">
//           Work the Way That Works for You
//         </h2>
//         <div className="space-y-16 max-w-6xl mx-auto">
//           {workWays.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-lg rounded-xl p-6 md:p-10"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="w-full md:w-1/3">
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   width={400}
//                   height={300}
//                   className="rounded-lg object-contain"
//                 />
//               </div>
//               <div className="w-full md:w-2/3">
//                 <h3 className="text-2xl font-bold text-blue-700 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 text-lg">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="bg-blue-900 text-white py-20 px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Build the tech team of the future with Fornxt
//         </h2>
//         <p className="text-lg max-w-2xl mx-auto mb-8">
//           Tell us your needs and get matched with world-class developers, DevOps, and AI professionals.
//         </p>
//         <Link href="/contact">
//           <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full shadow hover:shadow-lg hover:bg-gray-100 transition">
//             Schedule a Call
//           </button>
//         </Link>
//       </section>
//     </div>
//   );
// }






"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const workWays = [
  {
    title: "Hire Anywhere. Deliver Everywhere.",
    desc: "Access pre-vetted, world-class tech talent regardless of location. Fornxt helps you prioritize skills and experience, not geography.",
    img: "/veet.png",
  },
  {
    title: "Accelerate Delivery Without the Bottlenecks.",
    desc: "Get the right developers, DevOps, or AI experts exactly when you need them. Rapid onboarding and delivery reduce your time to market.",
    img: "/dde.png",
  },
  {
    title: "Scale With Agility, Not Stress.",
    desc: "Fornxt enables you to scale teams up or down as your needs evolve. Be responsive to shifting priorities without compromising quality.",
    img: "/scale.png",
  },
  {
    title: "Focus on Outcomes. We Handle the Rest.",
    desc: "We simplify global hiring by managing vetting, compliance, contracts, and payments—so you can focus on building and delivery.",
    img: "/foc.png",
  },
  {
    title: "Flexible Engagement That Fits Your Flow.",
    desc: "Plug in top talent into your existing teams or let us deliver turnkey projects. Hire for roles or delegate the full delivery—your choice.",
    img: "/cv.jpg",
  },
];


export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-800 to-gray-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 max-w-4xl leading-tight"
        >
          Build better DevOps, Data, and AI solutions — faster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-xl md:text-2xl max-w-2xl mb-6 text-gray-300"
        >
          There are over 150,000 highly skilled tech professionals in our talent pool—most in untapped markets, ready to be placed effectively.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/hire">
            <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 shadow transition">
              Hire Talent
            </button>
          </Link>

          <Link href="/adaptive-hiring">
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all">
              What is Adaptive Hiring?
            </button>
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-800 py-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-gray-100">
        <div>
          <h2 className="text-4xl font-bold text-blue-400">150k+</h2>
          <p className="text-gray-400 mt-2">Top-rated global tech talent</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-400">$80,000</h2>
          <p className="text-gray-400 mt-2">Avg. cost saved per hire</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-400">66%</h2>
          <p className="text-gray-400 mt-2">Faster time to hire</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-400">33%</h2>
          <p className="text-gray-400 mt-2">Faster project delivery</p>
        </div>
      </section>
{/* PEOPLE + AI SECTION */}
<section className="bg-gradient-to-b from-[#0D2C3D] to-[#1B3F51] text-white py-20 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-extrabold mb-6">
      Harness the power of people <span className="text-green-400">+ AI</span>
    </h2>
    <p className="text-lg leading-relaxed mb-8">
      Fornxt Talent Cloud automates and streamlines the complete global hiring lifecycle. 
      Our proprietary AI Talent Decision Engine identifies best-fit candidates at speed and scale. 
      Expert hiring managers and success partners support every step to ensure a seamless experience.
    </p>
    <Link href="/how-it-works">
      <button className="bg-green-400 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-green-300 transition">
        Learn More About Fornxt Talent Cloud
      </button>
    </Link>
  </div>
</section>

      {/* TRUSTED BY SECTION */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          <Image src="/logos/coursera.svg" alt="Coursera" width={120} height={40} />
          <Image src="/logos/mastercard.svg" alt="Mastercard" width={120} height={40} />
          <Image src="/logos/viacomcbs.svg" alt="ViacomCBS" width={120} height={40} />
          <Image src="/logos/github.svg" alt="GitHub" width={120} height={40} />
          <Image src="/logos/casper.svg" alt="Casper" width={120} height={40} />
          <Image src="/logos/cloudflare.svg" alt="Cloudflare" width={120} height={40} />
        </div>
      </section>

      {/* WORK THE WAY THAT WORKS SECTION */}
<section className="bg-gray-50 py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
      Work the Way That Works for You
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {workWays.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* IMAGE */}
          <div className="sm:w-1/3 flex items-center justify-center">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="sm:w-2/3">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-md leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* FLEXIBLE ENGAGEMENT SECTION */}
<section className="bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
    {/* Left Image Area */}
    <div className="flex-1">
      <Image
        src="/will1.webp" // Replace with your actual image path
        alt="Flexible Engagement"
        width={600}
        height={400}
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right Content Area */}
    <div className="flex-1 text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Work the way that works for you
      </h2>
      <p className="text-gray-600 mb-6 text-lg">
        Fornxt’s Adaptive Hiring model offers you flexible engagement to build and scale your teams in any configuration.
      </p>

      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold text-blue-700">Hire Individuals</h4>
          <p className="text-gray-600">
            Fill critical skill gaps or onboard seasoned professionals—whether for maternity leave, fast-moving project roles, or long-term product growth.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-blue-700">Create Managed Projects</h4>
          <p className="text-gray-600">
            Leave delivery to us—from AI prototypes to complex application builds, we ensure fast and budget-conscious execution.
          </p>
        </div>
      </div>

      <Link href="/hire">
        <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
          Get Started
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* CTA SECTION */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build the tech team of the future with Fornxt
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Tell us your needs and get matched with world-class developers, DevOps, and AI professionals.
        </p>
        <Link href="/contact">
          <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full shadow hover:shadow-lg hover:bg-gray-100 transition">
            Schedule a Call
          </button>
        </Link>
      </section>
    </div>
  );
}