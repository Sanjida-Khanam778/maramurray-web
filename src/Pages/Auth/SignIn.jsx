import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, TreeDeciduous } from "lucide-react";
import toast from "react-hot-toast";
import bgImageUrl from "../../assets/images/bgImage.png";
import logoUrl from "../../assets/footerLogo.png";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../Api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Stores/authSlice";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const result = await signIn(formData).unwrap();
      dispatch(setCredentials(result));
      toast.success("Welcome back to GardenApp!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center relative font-rubik"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-4 flex justify-center">
              <img
                src={logoUrl}
                alt="GardenApp Logo"
                className="object-contain mb-4"
              />
            </div>
            {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1> */}
            <p className="text-gray-600">
              Enter your credentials to access your garden
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#1F2D16] hover:bg-[#2a3d1e] text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transform active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
