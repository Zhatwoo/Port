"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-[#0F131C] to-black text-gray-400 py-10 overflow-hidden">
      {/* 🔹 Background Grid (PCB style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Brand */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Neo Dela Torre</span>. All rights reserved.
        </p>

        {/* Middle - Navigation */}
        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-5">
          <a href="https://github.com/" target="_blank" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:neo@example.com" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
