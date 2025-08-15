"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#trading", label: "Trading" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("dark");
  const [showHeader, setShowHeader] = useState(false);
  const [showName, setShowName] = useState(false);

  // Smooth scroll and active link highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const scrollPos = window.scrollY + 80;
      let current = "";
      sections.forEach((section, idx) => {
        if (section && section.offsetTop <= scrollPos) {
          current = navLinks[idx].href;
        }
      });
      setActive(current);

      // Show header if user has scrolled even slightly
      if (window.scrollY > 10) {
        setShowHeader(true);
        setShowName(true);
      } else {
        setShowHeader(false);
        setShowName(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header
      className={`w-full ${
        theme === "dark" ? "bg-[#101522]" : "bg-white"
      } text-white shadow-lg fixed top-0 left-0 z-50 border-b border-green-400/10
      transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Picture / Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/3366.jpg"
            alt="Neo Dela Torre"
            width={40}
            height={40}
            className="rounded-full border-2 border-green-400 object-cover"
            priority
          />
          <span
            className={`text-2xl font-bold tracking-wide ${
              theme === "dark" ? "text-white" : "text-[#101522]"
            } transition-all duration-500 ${
              showName ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ fontFamily: "'Playfair Display', 'Montserrat', serif" }}
          >
            Neo Dela Torre
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition font-medium cursor-pointer ${
                active === link.href
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : theme === "dark"
                  ? "text-white hover:text-green-400"
                  : "text-[#101522] hover:text-green-600"
              }`}
              style={{ scrollBehavior: "smooth" }}
            >
              {link.label}
            </a>
          ))}
          {/* Call-to-action Button */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
          >
            Download CV
          </a>
          {/* Social Media Icons */}
        
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.38 9.38 0 012.5-.34c.85.01 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 w-12 h-6 flex items-center bg-green-400/30 rounded-full relative border border-green-400 transition"
            aria-label="Toggle theme"
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ${
                theme === "dark"
                  ? "bg-yellow-400 translate-x-0"
                  : "bg-green-600 translate-x-6"
              }`}
              style={{ boxShadow: "0 0 4px rgba(0,0,0,0.2)" }}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}