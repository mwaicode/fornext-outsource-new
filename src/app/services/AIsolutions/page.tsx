// import Image from 'next/image'
import Link from 'next/link'

export default function AISolutionsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 min-h-screen py-20 px-6">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Discover Our AI Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Empower your organization with intelligent, data-driven tools designed to enhance efficiency, drive innovation, and deliver measurable results.
        </p>
      </header>

      {/* Industries or Mission Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Solving Real Challenges Across Industries</h2>
        <p className="text-md text-gray-700">
          From finance to healthcare, retail to logistics — we tailor AI and ML solutions to your unique business goals.
        </p>
      </section>

      {/* AI Offerings */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Predictive Analytics",
            desc: "Anticipate trends, behavior, and outcomes through data-driven machine learning models.",
          },
          {
            title: "Natural Language Processing (NLP)",
            desc: "Leverage AI for smart chatbots, sentiment analysis, and text understanding.",
          },
          {
            title: "Computer Vision",
            desc: "Use image recognition, object detection, and video analytics to enhance real-time understanding.",
          },
          {
            title: "Custom AI Model Development",
            desc: "We build and deploy models tailored to your infrastructure and objectives.",
          },
          {
            title: "AI-Powered Automation",
            desc: "Automate decision-making and routine processes for optimized workflows.",
          },
          {
            title: "AI Strategy & Integration",
            desc: "From idea to implementation, we help you integrate AI across your business.",
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-24">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Ready to integrate AI into your business?
        </h3>
        <Link href="/contact">
          <button className="mt-4 inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-md shadow hover:bg-indigo-700 transition duration-300">
            Let's Build Your AI Solution
          </button>
        </Link>
      </div>
    </div>
  )
}
