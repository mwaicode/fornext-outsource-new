

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { 
//   Eye, 
//   EyeOff, 
//   Mail, 
//   Lock, 
//   ArrowLeft, 
//   Code, 
//   CheckCircle,
//   Trophy,
//   Star,
//   Briefcase,
//   TrendingUp
// } from "lucide-react";

// export default function TalentLoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
    
//     try {
//       // Replace with your actual talent login API call
//       // const result = await loginTalent({ email, password });
      
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // For demo purposes - replace with actual logic
//       if (email && password) {
//         // Store talent info in localStorage
//         const mockTalent = { 
//           id: "talent123", 
//           email, 
//           name: "John Developer",
//           skills: ["React", "Node.js", "TypeScript"]
//         };
//         localStorage.setItem("talent", JSON.stringify(mockTalent));
//         localStorage.setItem("talentId", mockTalent.id);
        
//         // Redirect to talent dashboard
//         router.push("/talent/dashboard");
//       } else {
//         throw new Error("Please fill in all fields");
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.error || err.message || "Login failed.";
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const features = [
//     {
//       icon: Trophy,
//       text: "Top 3% Global Talent Network"
//     },
//     {
//       icon: TrendingUp,
//       text: "45% Higher Earning Potential"
//     },
//     {
//       icon: Briefcase,
//       text: "Premium Project Opportunities"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       <div className="relative z-10 min-h-screen flex">
//         {/* Left Side - Branding */}
//         <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white">
//           <div className="max-w-md text-center">
//             {/* Logo */}
//             <div className="flex items-center justify-center gap-3 mb-8">
//               <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
//                 <Code className="w-8 h-8 text-white" />
//               </div>
//               <span className="text-4xl font-bold">Fornxt</span>
//             </div>

//             <h1 className="text-4xl font-bold mb-6 leading-tight">
//               Join the elite
//               <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
//                 {" "}developer community
//               </span>
//             </h1>

//             <p className="text-xl text-slate-300 mb-10 leading-relaxed">
//               Connect with world-class companies, work on cutting-edge projects, and accelerate your career.
//             </p>

//             {/* Features */}
//             <div className="space-y-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center gap-3 text-slate-200">
//                   <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
//                     <feature.icon className="w-4 h-4" />
//                   </div>
//                   <span className="font-medium">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Success Stories */}
//             <div className="mt-10 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
//               <div className="flex items-center gap-2 mb-2">
//                 <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-400 fill-current" />
//               </div>
//               <p className="text-slate-300 text-sm italic">
//                 "Fornxt transformed my freelance career. I'm now working with Fortune 500 companies and earning 3x more."
//               </p>
//               <p className="text-slate-400 text-xs mt-2">- Sarah Chen, Full Stack Developer</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
//           <div className="w-full max-w-md">
//             {/* Mobile Logo */}
//             <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
//               <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                 <Code className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold text-white">Fornxt</span>
//             </div>

//             {/* Login Card */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-bold text-slate-900 mb-2">Talent Login</h2>
//                 <p className="text-slate-600">Welcome back! Ready for your next challenge?</p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Email Input */}
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-slate-700 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Password Input */}
//                 <div className="relative">
//                   <label className="block text-sm font-medium text-slate-700 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
//                     >
//                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                   <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
//                     <p className="text-red-600 text-sm flex items-center gap-2">
//                       <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs">!</span>
//                       </div>
//                       {error}
//                     </p>
//                   </div>
//                 )}

//                 {/* Login Button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
//                       <span>Signing you in...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span>Access Dashboard</span>
//                       <CheckCircle className="w-5 h-5" />
//                     </>
//                   )}
//                 </button>
//               </form>

//               {/* Forgot Password */}
//               <div className="text-center mt-6">
//                 <Link 
//                   href="/talent/forgot-password" 
//                   className="text-emerald-600 hover:text-emerald-700 text-sm font-medium hover:underline transition-colors"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>

//               {/* Sign Up Link */}
//               <div className="text-center mt-8 pt-6 border-t border-slate-200">
//                 <p className="text-slate-600 mb-3">Ready to join the elite network?</p>
//                 <Link 
//                   href="/talent/signup"
//                   className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors"
//                 >
//                   <span>Apply to join Fornxt</span>
//                   <span>→</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Back to Home */}
//             <div className="text-center mt-6">
//               <Link 
//                 href="/" 
//                 className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span>Back to Home</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Trust Indicators */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-sm border-t border-white/20 py-4">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
//             <span className="flex items-center gap-2">
//               <CheckCircle className="w-4 h-4 text-emerald-400" />
//               Vetted by industry experts
//             </span>
//             <span className="flex items-center gap-2">
//               <CheckCircle className="w-4 h-4 text-emerald-400" />
//               Secure payments guaranteed
//             </span>
//             <span className="flex items-center gap-2">
//               <CheckCircle className="w-4 h-4 text-emerald-400" />
//               24/7 talent support
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  Code,
  CheckCircle,
  Trophy,
  Star,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function TalentLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email && password) {
        const mockTalent = {
          id: "talent123",
          email,
          name: "John Developer",
          skills: ["React", "Node.js", "TypeScript"],
        };
        localStorage.setItem("talent", JSON.stringify(mockTalent));
        localStorage.setItem("talentId", mockTalent.id);

        router.push("/talent/dashboard");
      } else {
        throw new Error("Please fill in all fields");
      }
    } catch (err: unknown) {
      let message = "Login failed.";
      if (err instanceof Error) {
        message = err.message;
      }
      if (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        (err as { response?: { data?: { error?: string } } }).response?.data
          ?.error
      ) {
        message = (
          err as { response?: { data?: { error?: string } } }
        ).response!.data!.error!;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const features: { icon: React.ElementType; text: string }[] = [
    {
      icon: Trophy,
      text: "Top 3% Global Talent Network",
    },
    {
      icon: TrendingUp,
      text: "45% Higher Earning Potential",
    },
    {
      icon: Briefcase,
      text: "Premium Project Opportunities",
    },
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
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-bold">Fornxt</span>
            </div>

            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Join the elite{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                developer community
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Connect with world-class companies, work on cutting-edge projects,
              and accelerate your career.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Success Stories */}
            <div className="mt-10 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm italic">
                "Fornxt transformed my freelance career. I'm now working with
                Fortune 500 companies and earning 3x more."
              </p>
              <p className="text-slate-400 text-xs mt-2">
                - Sarah Chen, Full Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Fornxt</span>
            </div>

            {/* Login Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Talent Login
                </h2>
                <p className="text-slate-600">
                  Welcome back! Ready for your next challenge?
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm flex items-center gap-2">
                      <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                        !
                      </span>
                      {error}
                    </p>
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Signing you in...</span>
                    </>
                  ) : (
                    <>
                      <span>Access Dashboard</span>
                      <CheckCircle className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Forgot Password */}
              <div className="text-center mt-6">
                <Link
                  href="/talent/forgot-password"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium hover:underline transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-600 mb-3">
                  Ready to join the elite network?
                </p>
                <Link
                  href="/talent/signup"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors"
                >
                  <span>Apply to join Fornxt</span>
                  <span>→</span>
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
              Vetted by industry experts
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Secure payments guaranteed
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              24/7 talent support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
