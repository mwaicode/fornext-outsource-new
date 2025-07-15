"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in full-stack software development, including web and mobile app development, cloud solutions, and API integrations.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with modern technologies such as React, Next.js, Node.js, Flutter, Spring Boot, PostgreSQL, and more.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A basic website can take 2-4 weeks, while complex applications may take several months.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes! We offer ongoing maintenance, updates, and security support after project completion.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Contact us through our website, provide project details, and we will send you a customized quote within 24-48 hours.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-lg text-center max-w-2xl">
        Find answers to common questions about our software development services.
      </p>

      {/* FAQ List */}
      <div className="mt-8 w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md transition-all duration-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-semibold"
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 dark:text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
