
   "use client";
import { useEffect, useState, useCallback } from "react";
import { Mail, Phone, MapPin, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";



declare global {
  interface Window {
    Tawk_API?: {
      toggle: () => void;
    };
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [darkMode, setDarkMode] = useState(true);

  const phoneNumber = "254722715026";
  const recipientEmail = "info@fornxt.ai";

  // Handle form input changes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = useCallback((e: { target: { name: any; value: any; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // Handle Send Message Click
  const handleSendMessage = useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}. My email is ${email}. Message: ${message}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    // Open Email Client
    window.location.href = `mailto:${recipientEmail}?subject=Contact Form Submission&body=${encodedMessage}`;

    // Reset Form after sending
    setFormData({ name: "", email: "", message: "" });
  }, [formData]);

  // Toggle Dark Mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(localStorage.getItem("theme") === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newMode);
      }
      return newMode;
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/67d444a6d5ecfb190f043247/1imaiobek";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);
      }, 3000); // Load after 3 seconds
    }
  }, []);
  
  return (
    <main className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="absolute top-4 centre-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
      </button>

      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600 text-center">
        Get in Touch
      </h1>
      <p className="mt-4 text-lg text-center max-w-xl">
        Have a project in mind? Let’s collaborate and create something amazing together.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
        {/* Contact Form */}
        <div className="p-8 rounded-xl shadow-lg border w-full bg-gray-100 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-center">Send us a message</h2>
          <form onSubmit={handleSendMessage} className="mt-6 space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700" required></textarea>
            <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-teal-500" />
            <p>Email: <a href={`mailto:${recipientEmail}`} className="text-teal-500 hover:underline">{recipientEmail}</a></p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-teal-500" />
            <p>Phone: <a href={`tel:+${phoneNumber}`} className="text-teal-500 hover:underline">+{phoneNumber}</a></p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-teal-500" />
            <p>Location: Nairobi, Kenya</p>
          </div>
          <div className="flex justify-center mt-4">
            <Image src="/call1.png" alt="Contact Us" width={500} height={500} className="rounded-xl shadow-xl" priority />
          </div>
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

    
    </main>
  );
}



