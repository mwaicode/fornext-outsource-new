"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Digital Strategy & Transformation",
    description:
      "We guide businesses through AI-driven transformation, optimizing processes and creating roadmaps for digital excellence.",
  },
  {
    title: "AI & ML Solutions",
    description:
      "Custom chatbots, recommendation engines, predictive models, and image/speech recognition solutions tailored for your domain.",
  },
  {
    title: "Mobile App Development",
    description:
      "Secure, scalable, and engaging iOS and Android applications built to transform your mobile presence.",
  },
  {
    title: "Web App Development",
    description:
      "Responsive, enterprise-grade web apps using the latest technologies, delivering performance and great UX.",
  },
  {
    title: "DevOps & Cloud Automation",
    description:
      "CI/CD pipelines, Infrastructure-as-Code, and monitoring tools for seamless and reliable development lifecycles.",
  },
  {
    title: "Cybersecurity",
    description:
      "Penetration testing, audits, and strategic defense mechanisms to secure your digital infrastructure.",
  },
  {
    title: "Deployment & Managed Services",
    description:
      "Flexible deployment, scaling, and maintenance services ensuring your platforms run efficiently as you grow.",
  },
];

const strengths = [
  "Expert & Agile Team of engineers, AI experts, and designers",
  "Innovation-Driven, always integrating modern tech trends",
  "Client-Centric & Transparent Communication",
  "Proven Track Record of impactful deliveries across industries",
];

export default function PortfolioPage() {
  return (
    <main className="bg-gray-50 text-gray-900 px-6 py-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <Image src="/folo.jpg" alt="Fornxt Logo" width={100} height={100} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-indigo-700">Fornxt Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Building Legacies with Technology</p>
      </motion.div>

      {/* About Us */}
      <section className="mt-16 max-w-4xl mx-auto space-y-6 text-center">
        <motion.h2 className="text-3xl font-bold text-indigo-600">About Us</motion.h2>
        <motion.p className="text-gray-700">
          Fornxt.ai is a leading software and AI development company offering digital transformation, AI automation, mobile & web development, and DevOps services across sectors such as government, finance, manufacturing, and agriculture.
        </motion.p>
      </section>

      {/* Vision & Mission */}
      <section className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-center">
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
          <h3 className="text-2xl font-semibold text-indigo-500">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To be the leading partner for enterprises, enabling innovation, operational efficiency, and sustainable growth through advanced technology.
          </p>
        </motion.div>
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.2 }}>
          <h3 className="text-2xl font-semibold text-indigo-500">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To revolutionize businesses by harnessing cutting-edge technologies and delivering AI-powered solutions that create lasting value.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Strengths */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600">Why Fornxt?</h2>
        <ul className="mt-6 space-y-4 text-gray-700 text-left list-disc list-inside">
          {strengths.map((point, i) => (
            <motion.li key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }}>
              {point}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {[
            { title: "Anti-Counterfeit Authority", desc: "Built a platform to track counterfeit goods and aid regulatory enforcement." },
            { title: "Copia Global", desc: "Developed a mobile e-commerce app with integrated payment systems." },
            { title: "Kentrade Mobile App", desc: "Created a mobile solution and admin engine to streamline trade facilitation." },
            { title: "Miwa Bora", desc: "An AI-powered app for detecting sugarcane diseases with image recognition." },
          ].map((proj, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-xl font-semibold text-indigo-500">{proj.title}</h4>
              <p className="text-gray-600 mt-2">{proj.desc}</p>
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
      
      
{/* CTA Section */}
<section className="text-center mt-24 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-800">Lets build your Legacy</h2>
  <p className="text-lg text-gray-600 mt-2">
    Let us transform your idea to reality.
  </p>
  <Link 
  href="/contact" 
  className="mt-5 inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 transition"
>
  Get a Free Consultation
</Link>

</section>

{/* Contact Section */}
<section className="bg-gray-900 text-white mt-24 py-20 relative">
  {/* Background Blur */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl opacity-20"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-indigo-400">Let’s Connect 🤝</h2>
      <p className="text-lg text-gray-400 mt-2">
        Have a question or want to work with us? Reach out today!
      </p>
    </div>

    {/* Grid */}
    <div className="mt-12 grid md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-lg">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">📍 Get in Touch</h3>
        <p>Fornxt Technologies</p>
        <p className="mt-2">📧 <a href="mailto:info@fornxt.com" className="text-indigo-400 hover:text-indigo-500 transition">info@fornxt.com</a></p>
        <p className="mt-2">📞 +254 722 715 026</p>
      </div>

      {/* Social Media */}
      <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-lg">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">📢 Follow Us</h3>
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
                className="rounded-full border border-indigo-500 p-1 group-hover:scale-110 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Footer Links */}
    <div className="mt-16 grid md:grid-cols-2 gap-12">
      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">🚀 Quick Links</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "🏠 Home", link: "/" },
            { label: "👨‍💻 About Us", link: "/about" },
            { label: "📝 Blog", link: "/resources/blog" },
            { label: "💼 Portfolio", link: "/portfolio" },
            { label: "📞 Contact", link: "/contact" }
          ].map((item, index) => (
            <Link 
            key={index} 
            href={item.link} 
            className="text-sm md:text-base text-gray-300 hover:text-indigo-400 transition"
          >
            {item.label}
          </Link>
          
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-300 mb-4">💼 Our Services</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "🌐 Web Development", link: "/services/web-design" },
            { label: "📱 Mobile App Development", link: "/services/mobile-design" },
            { label: "⚙️ DevOps Automation", link: "/services/devops" },
            { label: "☁️ Cloud Consulting", link: "/services/cloud" },
            { label: "🖥️ Software Development", link: "/services/software-development" }
          ].map((service, index) => (
            <Link
  key={index}
  href={service.link}
  className="block px-4 py-2 rounded-md bg-gray-900 text-gray-300 hover:bg-indigo-500 hover:text-white transition"
>
  {service.label}
</Link>

          ))}
        </div>
      </div>
    </div>
  </div>


      </section>
    </main>
  );
}
