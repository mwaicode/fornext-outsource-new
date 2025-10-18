"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Cloud,
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Target,
  Briefcase,
  Layers,
  Building2
} from "lucide-react";

const solutions = [
  {
    id: "devops",
    title: "DevOps & Cloud Engineering",
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    description: "Scale your infrastructure with expert DevOps engineers and cloud architects",
    longDescription: "Transform your deployment pipeline with seasoned DevOps professionals who understand modern infrastructure, automation, and cloud-native architectures.",
    features: [
      "CI/CD Pipeline Design & Implementation",
      "Cloud Migration & Optimization (AWS, Azure, GCP)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container Orchestration (Kubernetes, Docker)",
      "Monitoring & Observability Setup",
      "Security & Compliance Automation"
    ],
    useCases: [
      { title: "Startup Scale-Up", desc: "Rapid infrastructure scaling for growing startups" },
      { title: "Cloud Migration", desc: "Legacy system migration to cloud platforms" },
      { title: "Performance Optimization", desc: "System optimization for better efficiency" }
    ],
    metrics: [
      { value: "3x", label: "Faster Deployments" },
      { value: "50%", label: "Cost Reduction" },
      { value: "99.9%", label: "Uptime Achieved" }
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    description: "Build robust data pipelines and unlock insights with expert data engineers",
    longDescription: "Harness the power of your data with skilled engineers who design scalable data architectures, ETL pipelines, and real-time analytics solutions.",
    features: [
      "Data Pipeline Architecture & Development",
      "ETL/ELT Process Design",
      "Real-time Data Streaming (Kafka, Spark)",
      "Data Warehouse Design (Snowflake, Redshift)",
      "Big Data Processing & Analytics",
      "Data Quality & Governance"
    ],
    useCases: [
      { title: "Business Intelligence", desc: "Real-time dashboards and reporting systems" },
      { title: "Data Lake Implementation", desc: "Centralized data storage and processing" },
      { title: "ML Pipeline Development", desc: "Data infrastructure for machine learning" }
    ],
    metrics: [
      { value: "10x", label: "Faster Insights" },
      { value: "40%", label: "Storage Savings" },
      { value: "100%", label: "Data Accuracy" }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    description: "Deploy intelligent solutions with AI/ML engineers and data scientists",
    longDescription: "Build cutting-edge AI applications with experts in machine learning, deep learning, NLP, and computer vision to drive innovation and automation.",
    features: [
      "Machine Learning Model Development",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "MLOps & Model Deployment",
      "AI Strategy & Consulting"
    ],
    useCases: [
      { title: "Predictive Analytics", desc: "Forecast trends and customer behavior" },
      { title: "Chatbots & Virtual Assistants", desc: "Intelligent conversational AI" },
      { title: "Computer Vision", desc: "Image recognition and processing" }
    ],
    metrics: [
      { value: "85%", label: "Model Accuracy" },
      { value: "60%", label: "Process Automation" },
      { value: "2x", label: "Revenue Growth" }
    ]
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    icon: Code,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    description: "Build complete web applications with versatile full-stack developers",
    longDescription: "Deliver end-to-end solutions with developers skilled in modern frameworks, databases, and APIs to create scalable, user-friendly applications.",
    features: [
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Python, Java)",
      "RESTful & GraphQL API Design",
      "Database Design & Optimization",
      "Responsive UI/UX Implementation",
      "Testing & Quality Assurance"
    ],
    useCases: [
      { title: "MVP Development", desc: "Rapid prototype to market launch" },
      { title: "SaaS Platforms", desc: "Multi-tenant application development" },
      { title: "E-commerce Solutions", desc: "Complete online store systems" }
    ],
    metrics: [
      { value: "40%", label: "Faster Time to Market" },
      { value: "95%", label: "Customer Satisfaction" },
      { value: "3x", label: "Development Speed" }
    ]
  }
];

const industries = [
  { name: "Fintech", icon: TrendingUp, count: "250+" },
  { name: "Healthcare", icon: Shield, count: "180+" },
  { name: "E-commerce", icon: Briefcase, count: "320+" },
  { name: "SaaS", icon: Layers, count: "410+" },
  { name: "Enterprise", icon: Building2, count: "290+" },
  { name: "Startups", icon: Rocket, count: "500+" }
];

export default function Solutions() {
  return (
    <div className="bg-slate-900 text-gray-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-white">Tech Solutions for</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text">
                Every Challenge
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              From DevOps to AI, access specialized talent and end-to-end solutions that drive innovation and accelerate your digital transformation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/client/signup">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/client/view-talents">
                <button className="group border-2 border-slate-400 hover:border-teal-400 text-slate-200 hover:text-teal-400 px-8 py-4 rounded-2xl hover:bg-teal-400/10 backdrop-blur-sm transition-all duration-300 font-bold flex items-center gap-2 mx-auto sm:mx-0">
                  <span>Browse Talent</span>
                  <Users className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive talent solutions across the most in-demand tech domains
            </p>
          </motion.div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Visual Side */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-3xl blur-2xl opacity-20`}></div>
                    <div className={`relative bg-gradient-to-br ${solution.bgGradient} rounded-3xl p-10 shadow-xl border border-white/50`}>
                      <div className={`w-20 h-20 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <solution.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {solution.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className={`text-3xl font-bold text-transparent bg-gradient-to-r ${solution.gradient} bg-clip-text mb-1`}>
                              {metric.value}
                            </div>
                            <div className="text-slate-600 text-sm">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className={`w-5 h-5 text-emerald-500 flex-shrink-0`} />
                            <span className="text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <h3 className={`text-4xl font-bold mb-4 text-transparent bg-gradient-to-r ${solution.gradient} bg-clip-text`}>
                    {solution.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {solution.longDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Key Capabilities</h4>
                    <div className="grid gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Use Cases</h4>
                    <div className="grid gap-4">
                      {solution.useCases.map((useCase, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-l-blue-500">
                          <h5 className="font-bold text-slate-900 mb-1">{useCase.title}</h5>
                          <p className="text-slate-600 text-sm">{useCase.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/client/create-job">
                    <button className={`group bg-gradient-to-r ${solution.gradient} text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
                      <span>Hire {solution.title.split('&')[0]} Experts</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by companies across diverse sectors to deliver exceptional talent and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.count} Projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From requirement to delivery, we make hiring and project execution seamless
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Define Your Needs", desc: "Share your project requirements or roles", icon: Target },
              { step: "02", title: "Get Matched", desc: "Our AI finds the perfect talent fit", icon: Brain },
              { step: "03", title: "Review & Interview", desc: "Meet vetted candidates quickly", icon: Users },
              { step: "04", title: "Start Building", desc: "Onboard and launch in days", icon: Rocket }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold text-white/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get matched with world-class talent in your domain. Start your project today and experience the Fornxt difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/client/signup">
              <button className="bg-white text-blue-600 font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0">
                <span>Start Hiring Now</span>
                <Rocket className="w-5 h-5" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="border-2 border-white text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0">
                <span>Talk to an Expert</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}