import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, TreeDeciduous } from "lucide-react";
import toast from "react-hot-toast";
import bgImage from "../../assets/images/bgImage.png";
import logo from "../../assets/images/Logo.png";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!formData.agreeTerms) {
      toast.error("Please agree to the Terms & Conditions");
      return;
    }
    toast.success("Account created successfully!");
    console.log("Sign Up data:", formData);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center relative font-rubik"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Register Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1F2D16] rounded-2xl mb-4 shadow-lg">
              <img src={logo} alt="GardenApp Logo" className="w-10 h-10 object-contain invert" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Grow With Us</h1>
            <p className="text-gray-600">Create your account to start your gardening journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-600 transition-all outline-none"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-600 transition-all outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-white/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-600 transition-all outline-none"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="px-1">
              <label className="flex items-start gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  I agree to the{" "}
                  <Link to="/terms-conditions" className="font-semibold text-green-700 hover:underline">
                    Terms & Conditions
                  </Link>
                  {" "}and{" "}
                  <Link to="/privacy-policy" className="font-semibold text-green-700 hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1F2D16] hover:bg-[#2a3d1e] text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transform active:scale-[0.98] transition-all"
            >
              Start Growing
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center pb-2">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-green-700 hover:text-green-800 transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-white/60 text-xs flex items-center justify-center gap-1.5">
            <TreeDeciduous size={12} />
            Powered by GardenApp Design Engine
          </p>
        </div>
      </div>
    </div>
  );
}
