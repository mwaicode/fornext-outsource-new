"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import 'font-awesome/css/font-awesome.css';
import { FaWhatsapp } from "react-icons/fa";

export default function WebDesignPage() {
  
  return (
    
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Elevate Your Brand with <span className="text-blue-600">Sleek Web Design</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We build visually stunning, high-performance websites that captivate audiences and drive results.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image 
          src="/web.jpg" 
          alt="Web Design Illustration" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-xl"
        />
      </motion.div>
      

      {/* Service Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {[
          { title: "Responsive Design", desc: "Our websites adapt seamlessly to all devices, ensuring an excellent user experience." },
          { title: "SEO & Performance", desc: "We optimize your site for speed, search rankings, and a frictionless browsing experience." },
          { title: "E-Commerce Solutions", desc: "Custom online stores with secure payments, product management, and order tracking." },
          { title: "Custom Web Development", desc: "Tailor-made websites built to suit your business needs with unique functionality." },
          { title: "UI/UX Optimization", desc: "We enhance user experiences with intuitive, engaging interfaces." },
          { title: "Ongoing Support", desc: "Our team provides continuous updates and support to keep your site at peak performance." },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
            <p className="mt-2 text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </div>

     {/* Our Development Process Section */}
     <div className="mt-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Development Process</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Process Step 1 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fa fa-search text-4xl text-blue-600"></i>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">1. Discovery</h3>
            <p className="mt-2 text-gray-700">Understanding your business needs and goals</p>
          </motion.div>

          {/* Process Step 2 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <i className="fa fa-paint-brush text-4xl text-blue-600"></i>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">2. Design</h3>
            <p className="mt-2 text-gray-700">Creating user-friendly and responsive layouts</p>
          </motion.div>

          {/* Process Step 3 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <i className="fa fa-code text-4xl text-blue-600"></i>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">3. Development</h3>
            <p className="mt-2 text-gray-700">Building with clean, efficient code</p>
          </motion.div>

          {/* Process Step 4 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <i className="fa fa-rocket text-4xl text-blue-600"></i>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">4. Launch</h3>
            <p className="mt-2 text-gray-700">Testing and deploying your website</p>
          </motion.div>
        </div>
      </div>

      {/* Web Development Stack */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Sleek Title */}
    <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Our Web Development Stack</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
      
      {/* Angular Development */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-6">
        <Image
          src="/angular.jpeg"
          alt="Angular Logo"
          width={80}
          height={80}
          className="border-4 border-red-600 rounded-full p-2"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Angular Development</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="font-medium">Enterprise-grade framework</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Robust TypeScript support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Scalable & modular architecture</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Next.js Development */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-6">
        <Image
          src="/next.png"
          alt="Next.js Logo"
          width={80}
          height={80}
          className="border-4 border-black rounded-full p-2"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Next.js Development</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="font-medium">Server-side rendering (SSR)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Static site generation (SSG)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Fast & SEO-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  </div>
</div>



  

   {/* Enhanced Pricing Section */}
<div className="mt-16 max-w-7xl mx-auto px-6 text-center">
  <h2 className="text-4xl font-extrabold text-gray-900">Our Pricing Plans</h2>
  <p className="text-lg text-gray-600 mt-2">Choose the perfect plan for your website needs. We offer flexible pricing that fits businesses of all sizes.</p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Landing Page Plan */}
    <motion.div
      className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <i className="fa fa-laptop text-6xl"></i>
      <h3 className="text-2xl font-semibold mt-4">Landing Page</h3>
      <p className="mt-2">A simple, effective page to showcase your business or product.</p>
      <div className="mt-4 text-3xl font-bold">$499</div>
      <ul className="mt-4 space-y-2 text-gray-100">
        <li>Responsive Design</li>
        <li>SEO Optimized</li>
        <li>Basic Contact Form</li>
      </ul>
      <a
        href="/contact"
        className="mt-6 inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </motion.div>

    {/* E-Commerce Website Plan */}
    <motion.div
      className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <i className="fa fa-shopping-cart text-6xl"></i>
      <h3 className="text-2xl font-semibold mt-4">E-Commerce Website</h3>
      <p className="mt-2">A fully functional online store to sell your products.</p>
      <div className="mt-4 text-3xl font-bold">$1,299</div>
      <ul className="mt-4 space-y-2 text-gray-100">
        <li>Custom Product Pages</li>
        <li>Payment Gateway Integration</li>
        <li>Shopping Cart & Checkout</li>
      </ul>
      <a
        href="/contact"
        className="mt-6 inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </motion.div>

    {/* Custom Web Development Plan */}
    <motion.div
      className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <i className="fa fa-code text-6xl"></i>
      <h3 className="text-2xl font-semibold mt-4">Custom Web Development</h3>
      <p className="mt-2">Tailored websites built to meet your unique business requirements.</p>
      <div className="mt-4 text-3xl font-bold">$2,499</div>
      <ul className="mt-4 space-y-2 text-gray-100">
        <li>Custom Features & Functionality</li>
        <li>SEO & Performance Optimized</li>
        <li>Ongoing Support</li>
      </ul>
      <a
        href="/contact"
        className="mt-6 inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </motion.div>
  </div>
</div>


      {/* Testimonials */}
      <motion.div
        className="mt-16 max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              name: "Daina Murigu",
              feedback: "The team transformed our website into a stunning, high-performing platform. Highly recommended!",
            },
            {
              name: "Stephen Mwai",
              feedback: "They built our e-commerce store from scratch, and it’s been a game-changer for our business.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-700 italic">&quot;{testimonial.feedback}&quot;</p>
              <span className="block mt-2 font-semibold text-blue-600">{testimonial.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    {/*FAQ section*/}
      

    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
    <p className="text-lg text-gray-700 text-center mt-4">
      Have questions? Find answers to some of the most common inquiries about Web design and development services.
    </p>

    {/* FAQ List */}
    <div className="mt-12 space-y-6">
      {[
        {
          question: "How long does it take to design and develop a website?",
          answer: "Typically it takes between 4-6 weeks to design and develop a website, depending on the complexity and features. We will provide you with a timeline once we understand your requirements."
        },
        {
          question: "What happens after the website is launched?",
          answer: "After launch, we offer ongoing support to ensure your website remains up-to-date and functions smoothly. You can contact us for any updates or improvements."
        },
       
        {
          question: "What is included in the price?",
          answer: "Our prices include website design,development, testing, and deployment.Any additional features or integrations(such as e-commerce or custom functionality)may incur extra chargers."
        },
        {
          question: "Do you offer SEO services?",
          answer: "Yes, we offer SEO services as part of our web design packages.Our team ensures that your site is optimized for search engines, helping it rank higher in search results."
        }
      ].map((faq, index) => (
        <details key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <summary className="text-xl font-semibold cursor-pointer text-gray-800">
            {faq.question}
          </summary>
          <p className="text-lg text-gray-600 mt-3">{faq.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>

  

     {/* CTA Section */}
     <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-bold text-gray-800">Start Your website Project</h2>
        <p className="text-lg text-gray-600 mt-2">
          Let us build a web that makes an impact. Contact us today!
        </p>
        <a 
          href="/contact" 
          className="mt-5 inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 transition"
        >
          Get a Free Consultation
        </a>
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

   
    </div>



  );
}
