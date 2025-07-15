import Image from "next/image";
import 'font-awesome/css/font-awesome.css';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function DevOpsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center bg-gray-100">
        <Image 
          src="/dev.jpeg" 
          alt="DevOps Automation Services" 
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-800">DevOps Automation Services</h1>
          <p className="mt-3 text-lg text-gray-600">
            Optimize your workflow with **automated deployments, monitoring, and cloud solutions**.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Our DevOps Solutions?</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          We provide cutting-edge **DevOps automation** to **enhance efficiency, scalability, and security** in software development.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {[
            { icon: "/ci.png", title: "CI/CD Pipelines", desc: "Automate builds, testing, and deployments." },
            { icon: "/cloud.jpeg", title: "Cloud Integration", desc: "Seamless cloud deployments on AWS, Azure, and GCP." },
            { icon: "/devreal.jpg", title: "Real-Time Monitoring", desc: "Keep track of system health and performance." },
            { icon: "/devcode.png", title: "Infrastructure as Code", desc: "Automate infrastructure with Terraform & Ansible." },
            { icon: "/devsec.jpg", title: "Security & Compliance", desc: "Enforce security policies and best practices." },
            { icon: "/mob24.jpg", title: "24/7 DevOps Support", desc: "Reliable assistance whenever you need it." }
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
       
          {/* Timeline Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our DevOps Process</h2>
          <div className="mt-10 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
            {[
              { step: "1", title: "Initial Consultation", desc: "Understand your needs and current setup." },
              { step: "2", title: "Strategy & Planning", desc: "Create a tailored plan for automation." },
              { step: "3", title: "Implementation", desc: "Setup CI/CD pipelines and cloud infrastructure." },
              { step: "4", title: "Monitoring & Support", desc: "Continuous monitoring and support for your environment." }
            ].map((stage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-[23%] mx-auto">
                <h3 className="text-3xl font-bold text-gray-800">{stage.step}</h3>
                <h4 className="text-xl font-semibold text-gray-700 mt-3">{stage.title}</h4>
                <p className="text-gray-600 mt-3">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Development Stack Section */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800">Our DevOps Development Stack</h2>
    <p className="text-lg text-gray-600 mt-4">
      We leverage industry-leading tools and technologies to ensure efficiency, security, and automation in DevOps workflows.
    </p>

    <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        { icon: "/docker.png", title: "Docker", desc: "Containerization for scalable applications.", border: "border-blue-500" },
        { icon: "/kuber.png", title: "Kubernetes", desc: "Automated container orchestration.", border: "border-blue-600" },
        { icon: "/jenkins.png", title: "Jenkins", desc: "CI/CD pipeline automation.", border: "border-red-500" },
        { icon: "/tera.png", title: "Terraform", desc: "Infrastructure as Code (IaC) automation.", border: "border-purple-500" },
        { icon: "/aws.png", title: "AWS", desc: "Cloud computing and DevOps services.", border: "border-yellow-500" },
        { icon: "/microsoft.png", title: "Azure", desc: "Microsoft cloud solutions.", border: "border-blue-400" },
        { icon: "/goo.png", title: "GCP", desc: "Google Cloud Platform services.", border: "border-green-500" },
        { icon: "/ansible.png", title: "Ansible", desc: "Configuration management and automation.", border: "border-red-400" },
        { icon: "/git.png", title: "GitHub", desc: "Version control and collaboration.", border: "border-gray-800" },
        { icon: "/snyk.png", title: "Snyk", desc: "Automated testing.", border: "border-blue-700" },
        { icon: "/backstage.png", title: "Backstage", desc: "Internal developer platform.", border: "border-blue-700" },
        { icon: "/spacelift.png", title: "Spacelift", desc: "Infrastructure Orchestration.", border: "border-blue-700" },
      ].map((tech, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-6">
          <Image
            src={tech.icon}
            alt={`${tech.title} Logo`}
            width={80}
            height={80}
            className={`border-4 ${tech.border} rounded-full p-2`}
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{tech.title}</h3>
            <p className="text-gray-600">{tech.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
 {/*pricing section*/}
 <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Pricing Plans</h2>
        <p className="text-lg text-gray-600 mt-4">
          Choose a plan that best suits your needs. We offer flexible pricing for businesses of all sizes.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Basic Plan",
              price: "$499/month",
              features: [
                "CI/CD Setup",
                "Cloud Integration",
                "1 Support Instance",
              ],
            },
            {
              title: "Standard Plan",
              price: "$999/month",
              features: [
                "Everything in Basic",
                "Real-Time Monitoring",
                "Security Configurations",
              ],
            },
            {
              title: "Enterprise Plan",
              price: "$1999/month",
              features: [
                "Everything in Standard",
                "24/7 Support",
                "Customized Integrations",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-3xl font-bold text-gray-800 mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-4 text-left text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-indigo-500">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Corrected Link Usage */}
              <Link href="/contact" className="mt-8 inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 transition">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

          {/*FAQ section*/}
      

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
      <p className="text-lg text-gray-700 text-center mt-4">
        Have questions? Find answers to some of the most common inquiries about our DevOps automation services.
      </p>
  
      {/* FAQ List */}
      <div className="mt-12 space-y-6">
        {[
          {
            question: "What is DevOps?",
            answer: "Devops is a set of practices that combine software development and IT operations to shorten the systems development life cycle."
          },
          {
            question: "Why do I need DevOps?",
            answer: "Devops helps you improve collaboration between development and operations teams and enables faster delivery of high-quality software."
          },
         
          {
            question: "What tools do you use?",
            answer: "We use tools like Jenkins, Docker, Kubernets, Terraform, AWS, Azure, and GCP for seamless DevOps automation."
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
          <h2 className="text-3xl font-bold text-gray-800">Optimize Your DevOps Workflow Today</h2>
          <p className="text-lg text-gray-600 mt-2">
            Let us help you automate and streamline your development process.
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
