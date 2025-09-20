

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { registerClient } from "../../api/auth"; // adjust the import path based on your structure
// import { useRouter } from "next/navigation";

// export default function ClientSignupPage() {
//   const router = useRouter();

//   // Form state
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [agree, setAgree] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!agree) {
//       setError("You must agree to the Privacy Policy.");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setError("");
//     setLoading(true);
//     try {
//       const response = await registerClient({
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         country: formData.country,
//         password: formData.password,
//       });

//       console.log("Registered:", response);
//       router.push("/client/login");
//     } catch (err: any) {
//       console.error("Registration failed:", err);
//       setError(err?.message || "Registration failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Image */}
//       <div className="hidden md:flex md:w-1/2 bg-blue-900 items-center justify-center">
//         <Image
//           src="/opo.jpg"
//           alt="Signup Illustration"
//           width={500}
//           height={500}
//           className="object-contain"
//         />
//       </div>

//       {/* Right Form */}
//       <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6 py-12">
//         <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
//           <div className="flex justify-center mb-6">
//             <Image src="/log.jpg" alt="Fornxt Logo" width={140} height={40} />
//           </div>

//           <h1 className="text-2xl font-bold text-center text-blue-800 mb-2">
//             Create your company account
//           </h1>
//           <p className="text-center text-gray-600 mb-6">
//             Discover global talent and hire within 48 hours.
//           </p>

//           {error && (
//             <p className="text-red-600 text-sm text-center mb-4">{error}</p>
//           )}

//           <form
//             className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             onSubmit={handleSubmit}
//           >
//             <input
//               name="firstName"
//               type="text"
//               placeholder="First Name*"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded text-gray-900"
//               required
//             />
//             <input
//               name="lastName"
//               type="text"
//               placeholder="Last Name*"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded text-gray-900"
//               required
//             /> 
//             <input
//               name="email"
//               type="email"
//               placeholder="Company Email*"
//               value={formData.email}
//               onChange={handleChange}
//               className="md:col-span-2 p-3 border border-gray-300 rounded text-gray-900"
//               required
//             />
//             <input
//               name="country"
//               type="text"
//               placeholder="Company's Country*"
//               value={formData.country}
//               onChange={handleChange}
//               className="md:col-span-2 p-3 border border-gray-300 rounded text-gray-900"
//               required
//             />
//             <input
//               name="password"
//               type="password"
//               placeholder="Set Password*"
//               value={formData.password}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded text-gray-900"
//               required
//             />
//             <input
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirm Password*"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded text-gray-900"
//               required
//             />

//             <p className="text-xs text-black-500 md:col-span-2">
//               Use 6 or more characters with a mix of letters and numbers.
//             </p>

//             <label className="md:col-span-2 flex items-start gap-2 mt-2 text-sm text-gray-600">
//               <input
//                 type="checkbox"
//                 className="mt-1"
//                 checked={agree}
//                 onChange={() => setAgree(!agree)}
//               />
//               I agree to Fornxt's{" "}
//               <Link href="/privacy" className="text-blue-700 hover:underline">
//                 Privacy Policy
//               </Link>
//             </label>

//             <button
//               type="submit"
//               disabled={!agree || loading}
//               className={`md:col-span-2 mt-4 w-full p-3 text-white font-semibold rounded ${
//                 agree
//                   ? "bg-blue-700 hover:bg-blue-800"
//                   : "bg-gray-400 cursor-not-allowed"
//               } transition`}
//             >
//               {loading ? "Creating Account..." : "Create Account"}
//             </button>
//           </form>

//           <div className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link
//               href="/client/login"
//               className="text-blue-700 font-medium hover:underline"
//             >
//               Sign in
//             </Link>
//           </div>

//           <div className="text-center text-sm text-gray-600 mt-2">
//             Are you looking to sign up as talent?{" "}
//             <Link
//               href="/talent/signup"
//               className="text-blue-700 font-medium hover:underline"
//             >
//               Start here
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

























"use client";

import Link from "next/link";
import { useState } from "react";
import { registerClient } from "../../api/auth";
import { useRouter } from "next/navigation";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowLeft, 
  Building, 
  CheckCircle,
  Users,
  Globe,
  Zap,
  User,
  MapPin
} from "lucide-react";

export default function ClientSignupPage() {
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      setError("You must agree to the Privacy Policy.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await registerClient({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country,
        password: formData.password,
      });

      console.log("Registered:", response);
      router.push("/client/login");
    } catch (err: any) {
      console.error("Registration failed:", err);
      setError(err?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: Users,
      text: "150k+ Global Professionals"
    },
    {
      icon: Zap,
      text: "Hire 66% Faster"
    },
    {
      icon: Globe,
      text: "Worldwide Talent Pool"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-bold">Fornxt</span>
            </div>

            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Start building your
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
                {" "}dream team
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join thousands of companies finding exceptional talent. Create your account and hire within 48 hours.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Fornxt</span>
            </div>

            {/* Signup Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
                <p className="text-slate-600">Discover global talent and hire within 48 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your company email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Country Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Country
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      name="country"
                      type="text"
                      placeholder="Enter your company's country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Set password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
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
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
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

                {/* Password Requirements */}
                <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                  Use 6 or more characters with a mix of letters and numbers.
                </div>

                {/* Privacy Policy Agreement */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    className="mt-1 w-4 h-4 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <label htmlFor="agree" className="text-sm text-slate-600 leading-relaxed">
                    I agree to Fornxt's{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                      Terms of Service
                    </Link>
                  </label>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      {error}
                    </p>
                  </div>
                )}

                {/* Create Account Button */}
                <button
                  type="submit"
                  disabled={!agree || loading}
                  className={`w-full font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    agree && !loading
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-xl transform hover:scale-[1.02]"
                      : "bg-slate-400 text-white cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Creating your account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Sign In Link */}
              <div className="text-center mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-600 mb-3">Already have an account?</p>
                <Link 
                  href="/client/login"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                >
                  <span>Sign in to your account</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Talent Signup Link */}
              <div className="text-center mt-4">
                <p className="text-slate-600 text-sm mb-2">Looking to join as talent?</p>
                <Link 
                  href="/talent/signup"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
                >
                  Start your talent journey
                </Link>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-6">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-sm border-t border-white/20 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Trusted by 1000+ companies
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              ISO 27001 Certified
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}