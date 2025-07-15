
import Image from "next/image";
import 'font-awesome/css/font-awesome.css';

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileDesignPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center bg-gray-100">
        <Image 
          src="/mob.jpg" 
          alt="Mobile App Development" 
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-800">Mobile App Development</h1>
          <p className="mt-3 text-lg text-gray-600">
            Creating sleek, high-performance mobile applications for iOS & Android.
          </p>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">We Excel in Custom Mobile App Development</h2>
        <p className="text-xl text-gray-700 mt-4">
          With cutting-edge technologies at our disposal, we assist enterprises in extending their reach to contemporary devices and platforms, encompassing:
        </p>
      </div>

      {/* Platform Expertise */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
        {/* iOS Section */}
        <div className="flex flex-col items-center text-center">
          <Image src="/ios.jpg" alt="iOS Development" width={300} height={200} className="rounded-lg shadow-lg" />
          <h3 className="text-3xl font-bold text-gray-800 mt-6">iOS Development</h3>
          <p className="text-lg text-gray-600 mt-3">
            As an esteemed iOS app development company, we harness the power of Apple’s iOS platform to create sleek and intuitive mobile applications that captivate users with seamless performance and elegant design, ensuring your brand stands out in the App Store.
          </p>
        </div>
        
        {/* Android Section */}
        <div className="flex flex-col items-center text-center">
          <Image src="/android.jpg" alt="Android Development" width={300} height={200} className="rounded-lg shadow-lg" />
          <h3 className="text-3xl font-bold text-gray-800 mt-6">Android Development</h3>
          <p className="text-lg text-gray-600 mt-3">
            As a leading Android app development company, we leverage the flexibility of this ecosystem to create dynamic, user-friendly apps optimized for performance and accessibility, maximizing your reach across a broad Android user base.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Our mobile apps are built with cutting-edge technology, ensuring <strong>speed, security, and seamless user experiences</strong>.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {[
            { icon: "/mobfast.jpg", title: "Fast Performance", desc: "Optimized for speed and efficiency." },
            { icon: "/mobent.png", title: "Enterprise-Grade Security", desc: "Latest security protocols to protect your data." },
            { icon: "/mobui.jpeg", title: "Seamless UX", desc: "Smooth UI/UX for maximum engagement." },
            { icon: "/mobcross.png", title: "Cross-Platform", desc: "Developing for both Android & iOS." },
            { icon: "/mobcloud.png", title: "Cloud Integration", desc: "Sync data seamlessly across devices." },
            { icon: "/mob24.jpg", title: "24/7 Support", desc: "Ongoing support to keep your app running." }
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
      </div>
      {/* Comprehensive Mobile Development Solutions Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Comprehensive Mobile Development Solutions</h2>
          <p className="text-xl text-gray-700 mt-4">
            Our mobile solutions cover a wide range of features, designed to bring your mobile apps to the next level.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {/* Feature 1: Cross-Platform Apps */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-code-branch text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Cross-Platform Apps</h3>
                <p className="text-gray-600">Reach both Android and iOS users with a single codebase using Flutter.</p>
              </div>
            </div>
            
            {/* Feature 2: Native Development */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-cogs text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Native Development</h3>
                <p className="text-gray-600">Platform-specific apps built for optimal performance and full access to device features.</p>
              </div>
            </div>

            {/* Feature 3: Offline Support */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-wifi-slash text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Offline Support</h3>
                <p className="text-gray-600">Built-in offline functionality for reliable performance in areas with limited connectivity.</p>
              </div>
            </div>

            {/* Feature 4: Secure Authentication */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-lock text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Secure Authentication</h3>
                <p className="text-gray-600">Robust user authentication and data protection using industry best practices.</p>
              </div>
            </div>

            {/* Feature 5: Payment Integration */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-credit-card text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Payment Integration</h3>
                <p className="text-gray-600">Integration with popular payment gateways and mobile money services in Africa.</p>
              </div>
            </div>

            {/* Feature 6: Push Notifications */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-bell text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Push Notifications</h3>
                <p className="text-gray-600">Engage users with targeted push notifications and in-app messaging.</p>
              </div>
            </div>

            {/* Feature 7: API Integration */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-plug text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">API Integration</h3>
                <p className="text-gray-600">Seamless integration with your existing systems and third-party services.</p>
              </div>
            </div>

            {/* Feature 8: Scalable Backend */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
              <i className="fa fa-cloud text-4xl text-indigo-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Scalable Backend</h3>
                <p className="text-gray-600">Cloud-based backend infrastructure that grows with your user base.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Development Stack */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Sleek Title */}
    <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Our Mobile Development Stack</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
      {/* Flutter Development */}
      
<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-6">
  <Image
    src="/flutter.png"
    alt="Flutter Logo"
    width={80} // Set explicit width
    height={80} // Set explicit height
    className="border-4 border-blue-500 rounded-full p-2"
  />
  <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Flutter Development</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="font-medium">Cross-platform development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Native-like performance</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Beautiful UI components</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ionic + Capacitor */}
      
<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-6">
  <Image
    src="/ionic.jpg"
    alt="Ionic Logo"
    width={80} // Explicit width
    height={80} // Explicit height
    className="border-4 border-purple-500 rounded-full p-2"
  />
  <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ionic + Capacitor</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="font-medium">Web technologies</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Native API access</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Fast development</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Native iOS (Swift) */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-6">
  <Image
    src="/swift.jpg"
    alt="Swift Logo"
    width={80} // Explicit width
    height={80} // Explicit height
    className="border-4 border-red-500 rounded-full p-2"
  />
  <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Native iOS (Swift)</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="font-medium">High performance</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Full iOS features</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="font-medium">Apple ecosystem integration</span>
            </li>
          </ul>
        </div>
      </div>

    
    </div>
  </div>
</div>

{/* Development Process & Timeline Section */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Section Title */}
    <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Our Development Process</h2>

    {/* Development Process Steps */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
      {/* Step 1: Strategy & Planning */}
     
<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center space-y-4">
  <Image
    src="/stra.jpg"
    alt="Strategy Icon"
    width={64} 
    height={64}
    className="border-4 border-blue-500 rounded-full p-2"
  />
  <div></div>
        <h3 className="text-xl font-semibold text-gray-800">Strategy & Planning</h3>
        <p className="text-gray-600">Define your app goals, features, and technical requirements.</p>
      </div>

      {/* Step 2: UI/UX Design */}
     
<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center space-y-4">
  <Image
    src="/ui.jpg"
    alt="UI/UX Icon"
    width={64} 
    height={64}
    className="border-4 border-green-500 rounded-full p-2"
  />
  <div></div>
        <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
        <p className="text-gray-600">Create intuitive user interfaces and engaging user experiences.</p>
      </div>

      {/* Step 3: Development & Testing */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center space-y-4">
  <Image
    src="/test.jpg"
    alt="Development Icon"
    width={64} 
    height={64}
    className="border-4 border-yellow-500 rounded-full p-2"
  />
  <div></div>
        <h3 className="text-xl font-semibold text-gray-800">Development & Testing</h3>
        <p className="text-gray-600">Build and test your app with regular updates and quality assurance.</p>
      </div>

      {/* Step 4: Launch & Support */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center space-y-4">
  <Image
    src="/launch.jpg"
    alt="Launch Icon"
    width={64} 
    height={64}
    className="border-4 border-red-500 rounded-full p-2"
  />
  <div></div>
        <h3 className="text-xl font-semibold text-gray-800">Launch & Support</h3>
        <p className="text-gray-600">Deploy to app stores and provide ongoing maintenance and updates.</p>
      </div>
    </div>

    {/* Timeline Section */}
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Typical Timeline</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Week 1-2 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Week 1-2</h4>
          <p className="text-gray-600">Strategy, wireframes, and technical planning</p>
        </div>

        {/* Week 3-4 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Week 3-4</h4>
          <p className="text-gray-600">UI/UX design and prototype</p>
        </div>

        {/* Week 5-10 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Week 5-10</h4>
          <p className="text-gray-600">Core development and testing</p>
        </div>

        {/* Week 11-12 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Week 11-12</h4>
          <p className="text-gray-600">Final testing and app store submission</p>
        </div>
      </div>
    </div>
  </div>
</div>


      
        {/* Pricing Section */}
        <div className="py-16 bg-gradient-to-r from-blue-100 via-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Mobile App Packages</h2>
          <p className="text-lg text-gray-700 mt-4">
            Choose from our flexible packages tailored to meet your app development needs.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Basic Package */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">Basic Package</h3>
              <p className="text-lg text-gray-600 mt-2">For startups and small businesses</p>
              <p className="text-4xl font-bold text-gray-800 mt-4">$1,500</p>
              <ul className="mt-6 text-gray-600">
                <li>1 Platform (iOS or Android)</li>
                <li>Basic UI/UX Design</li>
                <li>Core Features</li>
                <li>Push Notifications</li>
              </ul>
              <a href="/contact" className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">Get Started</a>
            </div>

            {/* Standard Package with Blue Accent */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-800">Standard Package</h3>
              <p className="text-lg text-gray-600 mt-2">For growing businesses with more complex needs</p>
              <p className="text-4xl font-bold text-gray-800 mt-4">$3,000</p>
              <ul className="mt-6 text-gray-600">
                <li>2 Platforms (iOS & Android)</li>
                <li>Advanced UI/UX Design</li>
                <li>Custom Features</li>
                <li>API Integration</li>
                <li>Cloud Support</li>
              </ul>
              <a href="/contact" className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">Get Started</a>
            </div>

            {/* Premium Package with Red Accent */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold text-gray-800">Premium Package</h3>
              <p className="text-lg text-gray-600 mt-2">For enterprise-level applications and advanced features</p>
              <p className="text-4xl font-bold text-gray-800 mt-4">$5,500</p>
              <ul className="mt-6 text-gray-600">
                <li>2 Platforms (iOS & Android)</li>
                <li>Custom UI/UX Design</li>
                <li>Full Custom Features</li>
                <li>Real-Time Analytics</li>
                <li>Push Notifications & Alerts</li>
                <li>Premium Support</li>
              </ul>
              <a href="/contact" className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      {/*FAQ section*/}
      

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-900">Frequently Asked Questions</h2>
    <p className="text-lg text-gray-700 text-center mt-4">
      Have questions? Find answers to some of the most common inquiries about mobile app development.
    </p>

    {/* FAQ List */}
    <div className="mt-12 space-y-6">
      {[
        {
          question: "What is the typical timeline for app development?",
          answer: "App development timelines vary, but generally, it takes 4-12 weeks depending on the complexity and features required."
        },
        {
          question: "Which platforms do you develop for?",
          answer: "We specialize in both iOS and Android app development, offering cross-platform solutions for maximum reach."
        },
        {
          question: "Do you offer ongoing support and updates?",
          answer: "Yes! We provide post-launch maintenance and support to ensure your app remains functional and up-to-date."
        },
        {
          question: "Can you help with app marketing?",
          answer: "Absolutely! We offer app marketing strategies, including ASO (App Store Optimization), to improve visibility and downloads."
        },
        {
          question: "Will I own the app and source code?",
          answer: "Yes! Once your project is completed and fully paid, you will have complete ownership of the app and source code."
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
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-bold text-gray-800">Start Your Mobile App Project</h2>
        <p className="text-lg text-gray-600 mt-2">
          Let us build an app that makes an impact. Contact us today!
        </p>
        <a 
          href="/contact" 
          className="mt-5 inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-gray-800 transition"
        >
          Get a Free Consultation
        </a>
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
