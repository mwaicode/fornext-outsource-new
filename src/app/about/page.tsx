
"use client"; 

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCloud, FaLaptopCode, FaShieldAlt, FaUsers, FaWhatsapp } from "react-icons/fa";
import CountUp from "react-countup";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";





const AboutUs = () => {
  interface Bubble {
    id: number;
    x: string;
    scale: number;
    size: string;
    duration: number;
  }

  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles only on the client side
    const generatedBubbles = Array.from({ length: 20 }).map(() => ({
      id: Math.random(), // Unique key
      x: `${Math.random() * 100}%`,
      scale: Math.random() * 0.6 + 0.4,
      size: `${Math.random() * 70 + 20}px`,
      duration: Math.random() * 8 + 4,
      
    }));

    setBubbles(generatedBubbles);
  }, []);
  /* eslint-disable react/no-unescaped-entities */

  return (
      
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Floating Bubbles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute bg-blue-400 opacity-30 rounded-full blur-xl"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0.2, 0.6, 0.3] }}
            transition={{ duration: bubble.duration, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x,
            }}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left Side Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-5xl font-extrabold mb-6 text-black leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover <span className="text-blue-600">Fornxt Technologies</span>
          </motion.h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Transforming Businesses with Cutting-Edge IT Solutions.
          </h3>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-blue-700">Fornxt Technologies</span>, we are dedicated to providing
            innovative and customized IT solutions to help businesses grow in the digital era.
            With expertise in **software development, cybersecurity, cloud computing, and IT consulting**,
            we deliver scalable and future-ready technology that empowers businesses to thrive.
          </p>
        </div>
        

        {/* Right Side Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
          <Image
            src="/wb.jpg" // Ensure this image is available in the public folder
            alt="Our Team"
            width={800}
            height={500}
            className="rounded-lg shadow-2xl transition-transform transform hover:scale-105"
            priority // Ensures proper Next.js SSR handling
          />
        </motion.div>
      </div>
      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">🚀 Our Mission</h3>
            <p className="text-gray-600">
              To provide world-class IT solutions that enhance productivity, security, and efficiency for businesses across Kenya and beyond.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-green-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-3">🌍 Our Vision</h3>
            <p className="text-gray-600">
              To be the leading IT solutions provider, transforming industries through technology and innovation.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-yellow-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">💡 Our Values</h3>
            <p className="text-gray-600">
              Innovation, Integrity, Excellence, Customer-Centricity, and Continuous Improvement.
            </p>
          </motion.div>
        </div>
          {/* Image Section
          <div className="flex justify-center mt-12">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <Image
              src="/fut.jpg"
              alt="Fornxt Technologies Team"
              width={800}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div> */}
        {/* CEO Section */}
<section className="py-20 bg-gradient-to-r from-yellow-500 to-green-600 text-white">
  <div className="container mx-auto text-center">
    
    {/* CEO Heading */}
    <motion.h2
      className="text-5xl font-extrabold mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      A Message from Our <span className="text-gray-900">CEO</span>
    </motion.h2>

    {/* CEO Profile Card */}
    <motion.div
      className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center max-w-lg mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* CEO Image (Optimized with Next.js) */}
      <div className="relative w-40 h-40 mb-4">
        <Image 
          src="/ceo.jpeg" 
          alt="CEO" 
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-green-500"
          priority 
        />
      </div>

      {/* CEO Name */}
      <h3 className="text-3xl font-semibold mb-2">Kelvin Mbuco</h3>
      <p className="text-lg font-medium text-green-600">Founder & CEO</p>

      {/* CEO Message */}
      <p className="text-gray-700 text-center mt-4 leading-relaxed">
        "At Fornxt Technologies, we believe in pushing the boundaries of innovation.  
        Our mission is to create secure, cutting-edge solutions that empower businesses  
        and individuals in the digital era. Together, we shape the future."
      </p>

    </motion.div>

  </div>
</section>
        {/* Services Section */}
<div className="bg-gray-100 py-20 px-6">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold text-gray-900 mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Our <span className="text-blue-600">Services</span>
    </motion.h2>

    <p className="text-lg text-gray-600 mb-12">
      We provide high-quality digital solutions tailored to your business needs.
    </p>

    {/* Service Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Software Development", icon: <FaLaptopCode />, desc: "Custom-built web and mobile applications." },
        { title: "Cybersecurity", icon: <FaShieldAlt />, desc: "Protecting businesses from digital threats." },
        { title: "Cloud Solutions", icon: <FaCloud />, desc: "Scalable cloud computing & storage." },
        { title: "IT Consulting", icon: <FaUsers />, desc: "Expert guidance for business growth." },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-blue-600 text-5xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">{service.title}</h3>
          <p className="text-gray-600 text-center">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

     {/* Why Choose Us Section */}
<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-5xl font-extrabold mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Why <span className="text-yellow-400">Choose Us?</span>
    </motion.h2>

    <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
      At <span className="font-semibold">Fornxt Technologies</span>, we don’t just offer IT solutions—we deliver 
      <span className="font-bold"> excellence, innovation, and security</span> to help businesses thrive in a digital world.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "🚀", title: "Innovation-Driven Solutions", description: "We stay ahead by adopting the latest technologies and best practices." },
        { icon: "🔒", title: "Unmatched Security", description: "We prioritize cybersecurity to safeguard your business assets." },
        { icon: "🤝", title: "Client-Centric Approach", description: "Your success is our priority. We tailor solutions to meet your needs." },
        { icon: "📈", title: "Proven Track Record", description: "We have successfully delivered 100+ projects across industries." },
        { icon: "🌍", title: "Global Expertise", description: "Our IT solutions meet both local and international standards." },
        { icon: "⚡", title: "Reliable Support", description: "We provide 24/7 support to ensure smooth business operations." },
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-700 text-center">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

     {/* Our Core Values Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-5xl font-extrabold text-gray-900 mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Our <span className="text-blue-600">Core Values</span>
    </motion.h2>

    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
      At <span className="font-semibold">Fornxt Technologies</span>, our values shape our commitment 
      to delivering <span className="font-bold">exceptional IT solutions</span> and 
      <span className="font-bold"> outstanding customer experiences</span>.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "🌟", title: "Excellence", description: "We deliver top-quality solutions, ensuring the best technology-driven services." },
        { icon: "💡", title: "Innovation", description: "We embrace emerging technologies to create smarter, more efficient solutions." },
        { icon: "🤝", title: "Integrity", description: "We uphold transparency, honesty, and ethical business practices in every project." },
        { icon: "🚀", title: "Customer Success", description: "Your success is our mission! We prioritize client needs and satisfaction." },
        { icon: "🔐", title: "Security & Privacy", description: "We protect client data with advanced security measures for a trusted IT experience." },
        { icon: "🌍", title: "Collaboration", description: "We work closely with clients to develop tailored solutions that drive growth." },
      ].map((value, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4">{value.icon}</div>
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">{value.title}</h3>
          <p className="text-gray-700">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Achievements Section */}
<section className="container mx-auto text-center py-20 px-8 bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-3xl shadow-xl">
  <motion.h2
    className="text-5xl font-extrabold mb-6"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    Our <span className="text-yellow-400">Achievements</span>
  </motion.h2>

  <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-200">
    Over the years, we have built a reputation as a <span className="font-semibold text-yellow-300">leading IT solutions provider</span>, 
    delivering <span className="text-yellow-300">innovation, reliability, and expertise</span> to businesses worldwide.
  </p>

  {/* Achievements Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {[
      { title: "Successful Projects", count: 100, icon: "🚀" },
      { title: "Satisfied Clients", count: 50, icon: "💼" },
      // { title: "Industry Awards", count: 10, icon: "🏆" },
      { title: "Years of Experience", count: 5, icon: "📅" },
    ].map((achievement, index) => (
      <motion.div
        key={index}
        className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl px-10 py-8 transition-all hover:bg-white/20 flex flex-col items-center transform hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {/* Icon */}
        <span className="text-6xl mb-4">{achievement.icon}</span>
        {/* Animated Counter */}
        <motion.div
          className="text-5xl font-bold text-yellow-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <CountUp end={achievement.count} duration={3} />
        </motion.div>
        <p className="text-lg text-gray-200 mt-3">{achievement.title}</p>
      </motion.div>
    ))}
  </div>
</section>



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

      {/* Work Process Section */}
      <div className="container mx-auto text-center mt-20">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-blue-600">Work Process</span>
        </motion.h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          We follow a structured, client-focused approach to ensure **seamless project execution**,
          from concept to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "1. Consultation", description: "We analyze your needs and define a tailored IT solution." },
            { title: "2. Planning & Design", description: "Our team creates a structured plan and intuitive design." },
            { title: "3. Development & Testing", description: "We bring ideas to life with modern technology & rigorous testing." },
            { title: "4. Deployment & Support", description: "Your project goes live with 24/7 support for seamless operation." },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 shadow-md rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h4 className="text-2xl font-semibold text-blue-600">{step.title}</h4>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Why Choose Us Section */}
<div className="bg-gray-100 py-20 px-6">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-5xl font-extrabold text-gray-900 mb-8"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Fornxt <span className="text-blue-600">Competitive Edge</span>
    </motion.h2>

    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
      Choosing <strong>Fornxt Technologies</strong> means partnering with a team that values <strong>innovation, quality, and customer satisfaction</strong>.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 flex items-center border-l-4 border-blue-600"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CheckCircleIcon className="w-10 h-10 text-blue-600 mr-4" />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">🚀 Cutting-Edge Technology</h3>
          <p className="text-gray-700 mt-2">We utilize the latest tools and frameworks for optimal solutions.</p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 flex items-center border-l-4 border-blue-600"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CheckCircleIcon className="w-10 h-10 text-blue-600 mr-4" />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">🛡️ Security & Reliability</h3>
          <p className="text-gray-700 mt-2">Ensuring your data is protected with top-tier security practices.</p>
        </div>
      </motion.div>

      <motion.div
        className="bg-white shadow-lg rounded-xl p-6 flex items-center border-l-4 border-blue-600"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CheckCircleIcon className="w-10 h-10 text-blue-600 mr-4" />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">🎯 Custom-Tailored Solutions</h3>
          <p className="text-gray-700 mt-2">We create bespoke IT solutions that align with your business goals.</p>
        </div>
      </motion.div>
    </div>
  </div>
</div>

       {/* Testimonials Section */}
<section className="bg-white py-20 px-6">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-5xl font-extrabold text-gray-900 mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      What Our <span className="text-blue-600">Clients Say</span>
    </motion.h2>

    <p className="text-lg text-gray-600 mb-12">
      We take pride in delivering <span className="font-semibold">top-notch solutions</span> that help businesses grow.
    </p>

    <div className="relative max-w-4xl mx-auto">
      <motion.div
        className="flex space-x-6 overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            quote: "Fornxt Technologies transformed our business with cutting-edge solutions. Highly recommended!",
            name: "Daina Murigu",
            role: "CEO, Tech Innovators",
          },
         
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-gray-800 min-w-[320px] md:min-w-[400px] transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg italic text-gray-600 mb-4">"{testimonial.quote}"</p>
            <h4 className="text-xl font-bold text-blue-600">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
{/* Let's Talk Section */}
<section className="bg-white py-16 px-6">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold text-gray-900 mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Let's <span className="text-blue-600">Talk</span>
    </motion.h2>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
      Have a project in mind? Looking for innovative IT solutions? 
      Let’s discuss how we can help you achieve your goals.
    </p>

    <motion.a
      href="/contact"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Get in Touch
    </motion.a>
  </div>
</section>

import Image from 'next/image';

{/* Small CEO Section (Footer) */}
<section className="py-12 bg-gradient-to-r from-yellow-400 to-green-500 text-white">
  <div className="container mx-auto text-center">
    
    {/* CEO Message Heading */}
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <span className="text-gray-900">CEO's</span> Note
    </motion.h2>

    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      
      {/* CEO Image */}
      <motion.div
        className="relative w-28 h-28"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image 
          src="/ceo.jpeg" 
          alt="CEO" 
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-white"
          priority
        />
      </motion.div>

      {/* CEO Message */}
      <motion.p
        className="text-lg max-w-2xl font-medium leading-relaxed"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        "Technology is not just about innovation; it's about transforming lives.  
        At **Fornxt**, we are committed to creating solutions that make a difference."
      </motion.p>

    </div>

  </div>
</section>


      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20 relative">
  {/* Background Blur Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl opacity-20"></div>

  <div className="max-w-6xl mx-auto px-6 relative">
    {/* Header Section */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-indigo-400">Let us Connect! 🤝</h2>
      <p className="text-lg text-gray-400 mt-2">
        Have a question or want to work with us? Reach out today!
      </p>
    </div>

    {/* Contact & Social Section */}
    <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
      {/* Contact Details */}
      <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-indigo-300">📍 Get in Touch</h3>
        <p className="mt-3">Fornxt Technologies</p>
        <p className="mt-2">📧 Email: <a href="mailto:info@fornxt.com" className="text-indigo-400 hover:text-indigo-500 transition">info@fornxt.com</a></p>
        <p className="mt-2">📞 Phone: +254 722 715 026</p>
      </div>

      {/* Social Media Links */}
      <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-indigo-300">📢 Follow Us</h3>
        <div className="flex gap-6 mt-4">
          {[
            { name: "Facebook", url: "https://www.facebook.com/fornxt", img: "/facebook.jpg" },
            { name: "Twitter", url: "https://www.twitter.com/fornxt2", img: "/twitter.png" },
            { name: "LinkedIn", url: "https://www.linkedin.com/company/fornxt", img: "/link.png" },
            { name: "Instagram", url: "https://www.instagram.com/for.nxt", img: "/insta.jpg" }
          ].map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
              <Image 
                src={social.img}
                alt={social.name}
                width={50} 
                height={50} 
                className="rounded-full border border-indigo-500 p-1 group-hover:scale-110 group-hover:shadow-indigo-500/50 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Quick Links & Services */}
    <div className="mt-12 grid md:grid-cols-2 gap-12">
      {/* Quick Links */}
      <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">🚀 Quick Links</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "🏠 Home", link: "/" },
            { label: "👨‍💻 About Us", link: "/about" },
            { label: "📝 Blog", link: "/resources/blog" },
            { label: "💼 Portfolio", link: "/portfolio" },
            { label: "📞 Contact", link: "/contact" }
          ].map((item, index) => (
            <Link key={index} href={item.link} className="text-sm md:text-base text-gray-300 hover:text-indigo-400 transition">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">💼 Our Services</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "🌐 Web Development", link: "/services/web-design" },
            { label: "📱 Mobile App Development", link: "/services/mobile-design" },
            { label: "⚙️ DevOps Automation", link: "/services/devops" },
            { label: "☁️ Cloud Consulting", link: "/services/cloud" },
            { label: "🖥️ Software Development", link: "/services/software-development" }
          ].map((service, index) => (
            <Link key={index} href={service.link} className="block px-4 py-2 rounded-md bg-gray-900 text-gray-300 hover:bg-indigo-500 hover:text-white transition duration-300">
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
    
  );
};

export default AboutUs;
