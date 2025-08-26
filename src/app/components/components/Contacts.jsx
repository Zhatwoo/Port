"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative w-full py-20 px-6 sm:px-10 bg-gradient-to-b from-[#0F131C] via-[#10151F] to-black text-white overflow-hidden">
      
      {/* 🌌 Floating Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-purple-400/20 rounded-full blur-2xl animate-float-delay"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start z-10">
        
        {/* Left Section */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Whether you want to collaborate, ask a question, or just say hello — 
              I’d love to hear from you. Let’s connect!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/20 hover:border-green-400 transition">
              <div className="p-3 bg-green-900/30 rounded-xl">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-gray-200 text-lg">
                Ndelatorre0525@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/20 hover:border-yellow-400 transition">
              <div className="p-3 bg-yellow-900/30 rounded-xl">
                <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-gray-200 text-lg">
                +63 912 345 6789
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/20 hover:border-blue-400 transition">
              <div className="p-3 bg-blue-900/30 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-200 text-lg">
                Bocaue Bulacan, Philippines
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 sm:p-10 space-y-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:ring-2 focus:ring-green-400 outline-none backdrop-blur-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:ring-2 focus:ring-yellow-400 outline-none backdrop-blur-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 outline-none backdrop-blur-md resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="relative w-full rounded-lg bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold py-3 shadow-lg hover:shadow-green-400/50 transition duration-300"
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-yellow-400 blur-md opacity-40"></span>
          </button>
        </form>
      </div>

      {/* Animations (Custom Tailwind) */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-bounce-slow {
          animation: bounce 5s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
