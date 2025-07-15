import Image from "next/image";
import 'font-awesome/css/font-awesome.css';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CloudConsultingPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center bg-gray-100">
        <Image 
          src="/cloo.jpeg" 
          alt="Cloud Consulting Services" 
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-800">Cloud Consulting Services</h1>
          <p className="mt-3 text-lg text-gray-600">
            Unlock the power of **scalable, secure, and cost-effective cloud solutions** for your business.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Our Cloud Consulting?</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Our experts provide **end-to-end cloud solutions**, ensuring your business is **efficient, agile, and future-proof**.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {[
            { icon: "/clostra.png", title: "Cloud Strategy & Planning", desc: "Develop a roadmap for seamless cloud adoption." },
            { icon: "/clorisk.jpg", title: "Cloud Migration", desc: "Move to the cloud with minimal downtime and risk." },
            { icon: "/cloazu.png", title: "Multi-Cloud Solutions", desc: "Leverage AWS, Azure, and GCP for flexibility and scalability." },
            { icon: "/closec.jpg", title: "Cloud Security", desc: "Implement best practices to safeguard your cloud infrastructure." },
            { icon: "/cloper.jpg", title: "Cost Optimization", desc: "Reduce cloud expenses while maximizing performance." },
            { icon: "/247.jpg", title: "24/7 Cloud Support", desc: "Round-the-clock support to keep your cloud operations smooth." }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <Image src={feature.icon} alt={feature.title} width={50} height={50} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {[ 
              { question: "What is cloud consulting?", answer: "Cloud consulting helps businesses adopt and optimize cloud technologies for improved performance and cost savings." },
              { question: "Which cloud platforms do you support?", answer: "We support AWS, Azure, Google Cloud, and hybrid cloud solutions." },
              { question: "How secure is the cloud?", answer: "We implement industry best practices to ensure the highest level of security for your cloud environment." }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 p-4 rounded-xl shadow">
                <summary className="font-semibold cursor-pointer text-gray-800">{faq.question}</summary>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </details>
            ))}
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


        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800">Transform Your Business with Cloud Technology</h2>
          <p className="text-lg text-gray-600 mt-2">
            Get expert guidance on cloud solutions tailored to your needs.
          </p>
          <a 
            href="/contact" 
            className="mt-5 inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
      

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
