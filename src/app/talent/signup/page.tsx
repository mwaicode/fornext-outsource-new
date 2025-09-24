"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerTalent } from "../../api/auth";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
  Calendar,
  FileText,
  Upload,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Code,
  Star,
  Trophy,
  Users,
  Zap
} from "lucide-react";

export default function TalentSignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    experience: "",
    project: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const next = () => {
    setError("");
    
    // Validation for step 1
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill in all required fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
    }
    
    // Validation for step 2
    if (step === 2) {
      if (!formData.role || !formData.experience || !formData.project) {
        setError("Please fill in all required fields.");
        return;
      }
    }
    
    setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setError("");

    if (!formData.file) {
      setError("Please upload your CV.");
      return;
    }

    try {
      setLoading(true);
      await registerTalent({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        experience: Number(formData.experience),
        project: formData.project,
        cv: formData.file,
      });

      router.push("/talent/login?success=registered");
   } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === "object" && err && "response" in err) {
        const serverError = err as { response?: { data?: { message?: string } } };
        setError(serverError.response?.data?.message || "Registration failed. Please try again.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { icon: Trophy, text: "Join top 3% of global talent" },
    { icon: Zap, text: "Fast-track to premium projects" },
    { icon: Users, text: "Work with Fortune 500 companies" },
  ];

  const stepTitles = [
    "Create Your Account",
    "Tell Us About You",
    "Upload Your Resume"
  ];

  const stepDescriptions = [
    "Let's start with your basic information",
    "Share your experience and expertise",
    "Upload your resume to complete your profile"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-2/5 flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-bold">Fornxt</span>
            </div>

            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Join the
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                {" "}future of work
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Connect with world-class companies, work on cutting-edge projects, and take your career to the next level.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <benefit.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-slate-300 text-sm italic">
                "Within 2 weeks of joining Fornxt, I landed my dream project with a Silicon Valley startup. The quality of opportunities here is unmatched."
              </p>
              <p className="text-slate-400 text-xs mt-2">- Alex Rodriguez, Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-3/5 flex items-center justify-center p-6">
          <div className="w-full max-w-lg">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Fornxt</span>
            </div>

            {/* Form Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3].map((stepNum) => (
                    <div key={stepNum} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                        stepNum <= step 
                          ? "bg-emerald-500 text-white" 
                          : "bg-slate-200 text-slate-500"
                      }`}>
                        {stepNum < step ? <CheckCircle className="w-5 h-5" /> : stepNum}
                      </div>
                      {stepNum < 3 && (
                        <div className={`w-16 h-1 mx-2 ${
                          stepNum < step ? "bg-emerald-500" : "bg-slate-200"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {stepTitles[step - 1]}
                  </h2>
                  <p className="text-slate-600 text-sm">
                    {stepDescriptions[step - 1]}
                  </p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                    {error}
                  </p>
                </div>
              )}

              <form className="space-y-6">
                {/* Step 1: Account Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          name="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Experience */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Role
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          name="role"
                          type="text"
                          placeholder="e.g. Frontend Developer, DevOps Engineer"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Years of Experience
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          name="experience"
                          type="number"
                          placeholder="e.g. 3"
                          value={formData.experience}
                          onChange={handleChange}
                          min="0"
                          max="50"
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Recent Project or Role
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
                        <textarea
                          name="project"
                          placeholder="Tell us about your most recent role or project. What technologies did you use? What challenges did you solve?"
                          value={formData.project}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400 resize-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Resume Upload */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Upload Your Resume
                      </label>
                      <div className="relative">
                        <div className="w-full p-6 border-2 border-dashed border-slate-300 rounded-xl hover:border-emerald-400 transition-colors duration-200 bg-slate-50">
                          <div className="text-center">
                            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <div className="mb-4">
                              <label className="cursor-pointer">
                                <span className="text-emerald-600 hover:text-emerald-700 font-medium">
                                  Click to upload
                                </span>
                                <span className="text-slate-600"> or drag and drop</span>
                                <input
                                  name="file"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleChange}
                                  className="hidden"
                                  required
                                />
                              </label>
                            </div>
                            <p className="text-sm text-slate-500">
                              PDF, DOC, or DOCX (max 5MB)
                            </p>
                            {formData.file && (
                              <p className="text-sm text-emerald-600 mt-2 flex items-center justify-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                {formData.file.name}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={loading}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <CheckCircle className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center mt-6 space-y-3">
              <p className="text-white/80 text-sm">
                Already have an account?{" "}
                <Link 
                  href="/talent/login" 
                  className="text-emerald-300 hover:text-emerald-200 font-medium hover:underline transition-colors"
                >
                  Sign in
                </Link>
              </p>
              <p className="text-white/60 text-sm">
                Looking to hire?{" "}
                <Link 
                  href="/client/signup" 
                  className="text-cyan-300 hover:text-cyan-200 font-medium hover:underline transition-colors"
                >
                  Create company account
                </Link>
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-white/80 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}