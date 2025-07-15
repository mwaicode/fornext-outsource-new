"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const BlogPage = () => {
  const [, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the code runs only on the client
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Explore the latest trends shaping the future of web development, including AI, responsive design, and more.",
      date: "March 10, 2025",
      image: "/blog1.jpg",
      link: "/blogs/the-future-of-web-development",
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Learn best practices for building scalable applications that can grow with your business needs effectively.",
      date: "March 15, 2025",
      image: "/blog2.png",
      link: "/blogs/building-scalable-applications",
    },
    {
      title: "User Experience Design Principles",
      excerpt: "Discover essential UX design principles that enhance user engagement and satisfaction in digital products.",
      date: "March 20, 2025",
      image: "/blog3.png",
      link: "/blogs/user-experience-design-principles",
    },
    {
      title: "The Future of AI in Business",
      excerpt: " Explore the impact of artificial intelligence on modern businesses and how companies can integrate AI-driven solutions for efficiency, automation, and innovation..",
      date: "March 25, 2025",
      image: "/ai23.jpeg",
      link: "/blogs/the-future-of-ai-in-business",
    },
    {
      title: "Emerging Tech Trends in 2025",
      excerpt: "What Businesses Need to Know upcoming technology trends, including blockchain, IoT, AI, and machine learning, and how they will shape various industries.",
      date: "March 25, 2025",
      image: "/2025.png",
      link: "/blogs/emerging-tech-trends",
    },
    {
      title: "Cloud Computing 2025",
      excerpt: "Why Businesses Are Moving to the Cloud the benefits of cloud solutions, including cost savings, scalability, and security, while comparing top cloud service providers.",
      date: "March 25, 2025",
      image: "/cloud22.png",
      link: "/blogs/cloud-computing",
    },
    {
      title: "Cyber Security 2025",
      excerpt: "Discuss the latest cybersecurity threats and provide expert tips on securing business data, preventing cyberattacks, and ensuring compliance with security standards.",
      date: "March 25, 2025",
      image: "/cyb.jpg",
      link: "/blogs/cyber-security",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-green-200 to-yellow-300 min-h-screen py-10 overflow-hidden">
      {/* Circular decorations */}
      <div className="absolute top-10 left-10 bg-yellow-300 opacity-60 rounded-full w-32 h-32 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 bg-green-300 opacity-60 rounded-full w-48 h-48 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 bg-green-200 opacity-40 rounded-full w-24 h-24 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-8 text-gray-2000"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Latest Insights
        </motion.h1>

        <p className="text-center text-lg text-gray-1000 mb-10">
          Discover our latest articles on technology, design, and innovation. Stay updated with industry trends and insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={post.link}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition duration-300 transform hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  <p className="text-gray-500 mt-4">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>


        {/* Read More Button */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 hover:shadow-xl"
          >
            Read More Articles
          </Link>
        </div>
      </div>
{/* WhatsApp Floating Button */}
<a
  href={`https://wa.me/254722715026?text=${encodeURIComponent("Hello, I'm interested in your services, can we discuss further details, looking forward to connecting!")}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  title="Chat with us on WhatsApp"
  className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-2xl animate-bounce"
>
  <FaWhatsapp />
</a>

    </div>
  );
};

export default BlogPage;

