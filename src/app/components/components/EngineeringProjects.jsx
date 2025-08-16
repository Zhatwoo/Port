"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EngineeringProjects = () => {
  const projects = [
    {
      title: "Smart IoT Home Automation",
      category: "IoT",
      description:
        "Developed a comprehensive home automation system using Arduino and Raspberry Pi, featuring voice control, mobile app integration, and energy monitoring.",
      technologies: ["Arduino", "Raspberry Pi", "React Native", "Node.js", "MQTT"],
      links: [
        { label: "Code", url: "#" },
        { label: "Demo", url: "#" },
      ],
    },
    {
      title: "Real-time Data Dashboard",
      category: "Web Development",
      description:
        "Built a responsive web application for visualizing real-time sensor data with interactive charts and alerting system for industrial monitoring.",
      technologies: ["React", "TypeScript", "Socket.io", "D3.js", "PostgreSQL"],
      links: [
        { label: "Code", url: "#" },
        { label: "Demo", url: "#" },
      ],
    },
    {
      title: "Trading Algorithm Backtester",
      category: "Finance Tech",
      description:
        "Created a Python-based backtesting framework for forex trading strategies with comprehensive analytics and performance metrics.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQLite"],
      links: [{ label: "Code", url: "#" }],
    },
    {
      title: "Mobile Expense Tracker",
      category: "Mobile Development",
      description:
        "Designed and developed a cross-platform mobile app for personal finance management with budgeting tools and spending insights.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider", "Charts"],
      links: [
        { label: "Code", url: "#" },
        { label: "Demo", url: "#" },
      ],
    },
  ];

  // Variants for entrance and exit
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 0.6 },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  };

  const [bgDots, setBgDots] = useState([]);
  const [bgSymbols, setBgSymbols] = useState([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const symbolChoices = ["⚡", "●", "▲", "■", "⬡"];
    const generatedSymbols = Array.from({ length: 15 }, () => {
      const symbol = symbolChoices[Math.floor(Math.random() * symbolChoices.length)];
      const sizePx = Math.random() * 18 + 10;
      const rotateDeg = Math.random() * 360;
      return {
        symbol,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        fontSize: `${sizePx}px`,
        rotateDeg,
      };
    });

    setBgDots(generatedDots);
    setBgSymbols(generatedSymbols);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* PCB & blueprint background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f1f] to-[#101522]">
        {[...Array(30)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-cyan-500/10"
            style={{ left: `${(i / 30) * 100}%` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-cyan-500/10"
            style={{ top: `${(i / 20) * 100}%` }}
          />
        ))}
        {bgDots.map((dot, i) => (
          <span
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              opacity: dot.opacity,
            }}
            aria-hidden
          ></span>
        ))}
        {bgSymbols.map((s, i) => (
          <span
            key={`sym-${i}`}
            className="absolute text-cyan-400/30 animate-float-slow"
            style={{
              top: s.top,
              left: s.left,
              fontSize: s.fontSize,
              transform: `rotate(${s.rotateDeg}deg)`,
            }}
            aria-hidden
          >
            {s.symbol}
          </span>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
            Engineering Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-mono">
            Showcasing innovative technical projects with problem-solving, modern development, and engineering precision.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-[#181e2a] rounded-3xl p-8 shadow-2xl hover:shadow-cyan-400/50 hover:scale-[1.03] hover:rotate-1 transition-transform duration-300 border-l-4 border-t-2 border-b-2 border-gradient-to-br from-green-400 via-cyan-400 to-yellow-400 overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <span className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">{project.title}</h2>
                <span className="text-xs md:text-sm font-medium text-yellow-400 bg-yellow-900/20 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-300 mb-5 font-mono">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs md:text-sm font-bold text-gray-200 bg-gray-900 px-3 py-1 rounded-md border border-green-400 shadow-sm hover:shadow-green-400/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                {project.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    className="text-sm md:text-base font-medium text-cyan-400 hover:text-green-400 hover:underline flex items-center gap-1"
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EngineeringProjects;
