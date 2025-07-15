"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// const steps = [
//   {
//     title: "Source",
//     desc: "Post unlimited roles and get precision matches in seconds. Fornxt’s AI instantly scans our global network and delivers top talent from untapped regions.",
//     icon: "/images/source.svg",
//   },
//   {
//     title: "Qualify",
//     desc: "All candidates are evaluated on real-world coding tasks, English fluency, communication, and problem-solving. Only certified talent makes it through.",
//     icon: "/images/qualify.svg",
//   },
//   {
//     title: "Hire",
//     desc: "Fornxt helps you schedule interviews, get feedback, and finalize offers seamlessly—cutting time to hire by up to 66%.",
//     icon: "/images/hire.svg",
//   },
//   {
//     title: "Manage",
//     desc: "Track your team’s performance with built-in feedback tools. Our customer success team ensures your workforce is aligned and productive.",
//     icon: "/images/manage.svg",
//   },
//   {
//     title: "Pay",
//     desc: "Pay your team globally in 100+ countries with full compliance, transparent rates, and easy-to-export reports via Fornxt Pay.",
//     icon: "/images/pay.svg",
//   },
// ];
const steps = [
  {
    title: "Source",
    desc: "Post unlimited roles and get precision matches in seconds. Fornxt’s AI instantly scans our global network and delivers top talent from untapped regions.",
    icon: "/icons/globe-search.svg", // e.g., magnifying glass over globe
  },
  {
    title: "Qualify",
    desc: "All candidates are evaluated on real-world coding tasks, English fluency, communication, and problem-solving. Only certified talent makes it through.",
    icon: "/check.png", // e.g., green check mark or badge
  },
  {
    title: "Hire",
    desc: "Fornxt helps you schedule interviews, get feedback, and finalize offers seamlessly—cutting time to hire by up to 66%.",
    icon: "/hire.png", // e.g., handshake icon
  },
  {
    title: "Manage",
    desc: "Track your team’s performance with built-in feedback tools. Our customer success team ensures your workforce is aligned and productive.",
    icon: "/icons/dashboard.svg", // e.g., dashboard or team settings icon
  },
  {
    title: "Pay",
    desc: "Pay your team globally in 100+ countries with full compliance, transparent rates, and easy-to-export reports via Fornxt Pay.",
    icon: "/pay.png", // e.g., globe with currency icon
  },
];

export default function HowFornxtWorksPage() {
  return (
    <div className="bg-blue-900 text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your AI-Powered Platform for Global Tech Hiring
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Source, qualify, hire, manage, and pay talent globally with Fornxt Talent Cloud™. Get precision matches from our expansive network. Onboard quickly. Keep your projects moving.
            </p>
            <Link href="/contact">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
                Request A Demo
              </button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/jn.jpg"
              alt="Fornxt Talent Cloud"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hire Globally. Save Time. Lower Costs.
          </h2>
          <p className="text-lg text-gray-700">
            Acquire top global talent 66% faster and at 30–50% less cost than traditional recruiting methods.
          </p>
        </div>
      </section>

      {/* STEP-BY-STEP SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">How Fornxt Works</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image src={step.icon} alt={step.title} width={60} height={60} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Fornxt Talent Cloud works for every team
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you're hiring one developer or building a global delivery team, Fornxt gives you the tools and talent to succeed—quickly and affordably.
        </p>
        <Link href="/hire">
          <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition">
            Start Hiring
          </button>
        </Link>
      </section>
    </div>
  );
}
