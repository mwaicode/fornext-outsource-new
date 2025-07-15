import Image from "next/image";
import 'font-awesome/css/font-awesome.css';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center bg-gray-200">
        <Image
          src="/soft.jpg"
          alt="Software Development"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-800">Custom Software Development</h1>
          <p className="mt-3 text-lg text-gray-600">
            We build tailor-made software solutions that drive innovation and accelerate business growth.
          </p>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">We Build Scalable & Secure Software Solutions</h2>
        <p className="text-xl text-gray-700 mt-4">
          Our team of expert developers specializes in creating robust, scalable, and secure software tailored to your business needs.
        </p>
      </div>

      {/* Software Development Process Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">Our Custom Software Development Process</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          We take a strategic, client-focused approach to software development, ensuring quality and satisfaction at every stage.
        </p>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Step 1: Discovery & Strategy */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">1. Discovery & Strategy</h3>
            <p className="text-lg text-gray-600 mt-4">
              We work closely with you to understand your goals and define the project scope, creating a tailored strategy that aligns with your business needs.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Custom development roadmap</li>
              <li>Interactive prototype of your product</li>
              <li>Collaborative refinement of UX/UI design</li>
            </ul>
          </div>

          {/* Step 2: UI/UX Design */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">2. UI/UX Design</h3>
            <p className="text-lg text-gray-600 mt-4">
              Design is at the heart of our solutions. We focus on building visually appealing, intuitive, and user-friendly software that resonates with your audience.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Custom design aligned with your brand</li>
              <li>Interactive wireframes and prototypes</li>
              <li>Seamless user experience to drive engagement</li>
            </ul>
          </div>

          {/* Step 3: Development */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">3. Development</h3>
            <p className="text-lg text-gray-600 mt-4">
              We focus on building a stable and high-performance product using agile methodologies, ensuring timely delivery while keeping you in the loop.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Agile development with daily progress tracking</li>
              <li>Collaboration using tools like JIRA, GitHub, and GitLab</li>
              <li>Customized development across platforms (iOS, Android, Web)</li>
            </ul>
          </div>

          {/* Step 4: Quality Assurance */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">4. Quality Assurance</h3>
            <p className="text-lg text-gray-600 mt-4">
              Quality is integrated throughout our process. We conduct a range of tests to ensure that your software is bug-free and performs optimally.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Automated and manual testing for each feature</li>
              <li>Regular regression testing for stability</li>
              <li>High confidence in bug-free and reliable software</li>
            </ul>
          </div>

          {/* Step 5: Delivery */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">5. Delivery</h3>
            <p className="text-lg text-gray-600 mt-4">
              Once everything is tested and validated, we prepare for a seamless release of your solution to the market.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Full deployment and launch support</li>
              <li>Seamless transition to production</li>
              <li>Go-to-market readiness</li>
            </ul>
          </div>

          {/* Step 6: Ongoing Support */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800">6. Ongoing Support & Maintenance</h3>
            <p className="text-lg text-gray-600 mt-4">
              We provide continuous monitoring and updates to keep your software running smoothly, responding to user feedback and making improvements.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Continuous performance monitoring</li>
              <li>Timely updates and security patches</li>
              <li>Ongoing improvements based on user feedback</li>
            </ul>
          </div>
        </div>
      </div>
      

      {/* CTA Section */}
<div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-center py-16">
  <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
    Ready to Leverage Expert Tech Solutions & Optimize IT Costs?
  </h2>
  <p className="text-lg sm:text-xl mt-4 max-w-lg mx-auto">
    Book a <strong>FREE 30-minute consultation</strong> with our team to discuss how we can elevate your business with custom software solutions tailored to your needs.
  </p>
  <a
    href="/contact"
    className="mt-8 inline-block px-8 py-4 bg-indigo-900 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
  >
    Schedule Your Consultation
  </a>
</div>
{/* Latest Insights Section */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold text-gray-900">Latest Insights from Fornxt</h2>
    <p className="text-lg text-gray-600 mt-4">Stay updated with our latest articles and insights on technology, business, and innovation.</p>
  </div>

  {/* Blog Grid */}
  <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
    {[ 
      { image: "/future.jpg", title: "The Future of Custom Software Development", description: "Explore how custom software development is evolving and what it means for your business in the future.", link: "/blog/future-of-software" },
      { image: "/agile.jpg", title: "5 Key Benefits of Agile Development", description: "Learn about the core advantages of adopting agile practices in software development for faster delivery and higher efficiency.", link: "/blog/benefits-of-agile" },
      { image: "/stack.jpg", title: "How to Choose the Right Tech Stack for Your Project", description: "Choosing the right tech stack can make or break a project. Here's what you need to consider when selecting technologies.", link: "/blog/choosing-tech-stack" }
    ].map((blog, index) => (
      <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
        <Image src={blog.image} alt={blog.title} width={600} height={400} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">{blog.title}</h3>
          <p className="text-gray-600 mt-3">{blog.description}</p>
          <a href={blog.link} className="text-indigo-600 mt-4 inline-block text-lg font-medium hover:text-indigo-700 transition duration-300">Read More</a>
        </div>
      </div>
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

