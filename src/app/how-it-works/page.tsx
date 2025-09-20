// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// // const steps = [
// //   {
// //     title: "Source",
// //     desc: "Post unlimited roles and get precision matches in seconds. Fornxt’s AI instantly scans our global network and delivers top talent from untapped regions.",
// //     icon: "/images/source.svg",
// //   },
// //   {
// //     title: "Qualify",
// //     desc: "All candidates are evaluated on real-world coding tasks, English fluency, communication, and problem-solving. Only certified talent makes it through.",
// //     icon: "/images/qualify.svg",
// //   },
// //   {
// //     title: "Hire",
// //     desc: "Fornxt helps you schedule interviews, get feedback, and finalize offers seamlessly—cutting time to hire by up to 66%.",
// //     icon: "/images/hire.svg",
// //   },
// //   {
// //     title: "Manage",
// //     desc: "Track your team’s performance with built-in feedback tools. Our customer success team ensures your workforce is aligned and productive.",
// //     icon: "/images/manage.svg",
// //   },
// //   {
// //     title: "Pay",
// //     desc: "Pay your team globally in 100+ countries with full compliance, transparent rates, and easy-to-export reports via Fornxt Pay.",
// //     icon: "/images/pay.svg",
// //   },
// // ];
// const steps = [
//   {
//     title: "Source",
//     desc: "Post unlimited roles and get precision matches in seconds. Fornxt’s AI instantly scans our global network and delivers top talent from untapped regions.",
//     icon: "/icons/globe-search.svg", // e.g., magnifying glass over globe
//   },
//   {
//     title: "Qualify",
//     desc: "All candidates are evaluated on real-world coding tasks, English fluency, communication, and problem-solving. Only certified talent makes it through.",
//     icon: "/check.png", // e.g., green check mark or badge
//   },
//   {
//     title: "Hire",
//     desc: "Fornxt helps you schedule interviews, get feedback, and finalize offers seamlessly—cutting time to hire by up to 66%.",
//     icon: "/hire.png", // e.g., handshake icon
//   },
//   {
//     title: "Manage",
//     desc: "Track your team’s performance with built-in feedback tools. Our customer success team ensures your workforce is aligned and productive.",
//     icon: "/icons/dashboard.svg", // e.g., dashboard or team settings icon
//   },
//   {
//     title: "Pay",
//     desc: "Pay your team globally in 100+ countries with full compliance, transparent rates, and easy-to-export reports via Fornxt Pay.",
//     icon: "/pay.png", // e.g., globe with currency icon
//   },
// ];

// export default function HowFornxtWorksPage() {
//   return (
//     <div className="bg-blue-900 text-gray-900">
//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Your AI-Powered Platform for Global Tech Hiring
//             </h1>
//             <p className="text-lg text-gray-300 mb-6">
//               Source, qualify, hire, manage, and pay talent globally with Fornxt Talent Cloud™. Get precision matches from our expansive network. Onboard quickly. Keep your projects moving.
//             </p>
//             <Link href="/contact">
//               <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
//                 Request A Demo
//               </button>
//             </Link>
//           </div>

//           <div className="md:w-1/2">
//             <Image
//               src="/jn.jpg"
//               alt="Fornxt Talent Cloud"
//               width={600}
//               height={400}
//               className="rounded-xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* VALUE SECTION */}
//       <section className="bg-gray-100 py-20 px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Hire Globally. Save Time. Lower Costs.
//           </h2>
//           <p className="text-lg text-gray-700">
//             Acquire top global talent 66% faster and at 30–50% less cost than traditional recruiting methods.
//           </p>
//         </div>
//       </section>

//       {/* STEP-BY-STEP SECTION */}
//       <section className="bg-white py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12">How Fornxt Works</h2>
//           <div className="grid md:grid-cols-2 gap-12 text-left">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="flex gap-5 items-start"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Image src={step.icon} alt={step.title} width={60} height={60} />
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600">{step.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="bg-blue-900 text-white text-center py-20 px-6">
//         <h2 className="text-4xl font-bold mb-4">
//           Fornxt Talent Cloud works for every team
//         </h2>
//         <p className="text-lg max-w-2xl mx-auto mb-8">
//           Whether you're hiring one developer or building a global delivery team, Fornxt gives you the tools and talent to succeed—quickly and affordably.
//         </p>
//         <Link href="/hire">
//           <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition">
//             Start Hiring
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

const steps = [
  {
    title: "Source",
    desc: "Post unlimited roles and get precision matches in seconds. Fornxt's AI instantly scans our global network and delivers top talent from untapped regions.",
    icon: "/icons/globe-search.svg",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    number: "01"
  },
  {
    title: "Qualify",
    desc: "All candidates are evaluated on real-world coding tasks, English fluency, communication, and problem-solving. Only certified talent makes it through.",
    icon: "/check.png",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    number: "02"
  },
  {
    title: "Hire",
    desc: "Fornxt helps you schedule interviews, get feedback, and finalize offers seamlessly—cutting time to hire by up to 66%.",
    icon: "/hire.png",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
    number: "03"
  },
  {
    title: "Manage",
    desc: "Track your team's performance with built-in feedback tools. Our customer success team ensures your workforce is aligned and productive.",
    icon: "/icons/dashboard.svg",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    number: "04"
  },
  {
    title: "Pay",
    desc: "Pay your team globally in 100+ countries with full compliance, transparent rates, and easy-to-export reports via Fornxt Pay.",
    icon: "/pay.png",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    number: "05"
  },
];

export default function HowFornxtWorksPage() {
  return (
    <div className="bg-slate-900 text-gray-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
          >
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-extrabold leading-tight"
              >
                Your{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
                  AI-Powered
                </span>{" "}
                Platform for Global Tech Hiring
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                Source, qualify, hire, manage, and pay talent globally with{" "}
                <span className="text-teal-400 font-semibold">Fornxt Talent Cloud™</span>. 
                Get precision matches from our expansive network. Onboard quickly. Keep your projects moving.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/contact">
                  <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <span>Request A Demo</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/jn.jpg"
                alt="Fornxt Talent Cloud"
                width={700}
                height={500}
                className="relative rounded-3xl shadow-2xl border border-slate-700/50 backdrop-blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text">
            Hire Globally. Save Time. Lower Costs.
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Acquire top global talent{" "}
            <span className="font-bold text-blue-600">66% faster</span> and at{" "}
            <span className="font-bold text-emerald-600">30–50% less cost</span> than traditional recruiting methods.
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "66%", label: "Faster Hiring", icon: "⚡", color: "blue" },
              { number: "30-50%", label: "Cost Reduction", icon: "💰", color: "emerald" },
              { number: "150k+", label: "Global Talent Pool", icon: "🌍", color: "purple" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-2 text-${stat.color}-600`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STEP-BY-STEP SECTION */}
      <section className="bg-white py-24 px-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text">
              How Fornxt Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined 5-step process ensures you get the right talent, fast and efficiently
            </p>
          </motion.div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Icon and Visual */}
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                      {/* Background blur effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      {/* Main card */}
                      <div className={`relative bg-gradient-to-br ${step.bgGradient} rounded-3xl p-12 shadow-xl border border-white/50 backdrop-blur-sm group-hover:shadow-2xl transition-all duration-500`}>
                        {/* Step number */}
                        <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {step.number}
                        </div>
                        
                        {/* Icon */}
                        <div className="flex items-center justify-center mb-6">
                          <div className={`p-6 bg-gradient-to-r ${step.gradient} rounded-2xl shadow-lg`}>
                            <Image 
                              src={step.icon} 
                              alt={step.title} 
                              width={80} 
                              height={80} 
                              className="filter brightness-0 invert"
                            />
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className={`text-4xl font-bold mb-6 text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-lg text-slate-700 leading-relaxed max-w-xl"
                    >
                      {step.desc}
                    </motion.p>

                    {/* Progress indicator */}
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className={`mt-8 h-1 bg-gradient-to-r ${step.gradient} rounded-full transform origin-left`}
                      style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                    ></motion.div>
                  </div>
                </div>

                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
            Fornxt Talent Cloud works for every team
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-slate-300 leading-relaxed">
            Whether you're hiring one developer or building a global delivery team, Fornxt gives you the tools and talent to succeed—quickly and affordably.
          </p>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "👤", text: "Individual Hires" },
              { icon: "👥", text: "Full Teams" },
              { icon: "🚀", text: "Global Delivery" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 text-lg font-medium"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/hire">
              <button className="group bg-white text-blue-900 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto text-lg">
                <span>Start Hiring</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}