// components/EngineeringProjects.tsx
"use client";

import Link from "next/link";

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

  return (
    <section className="relative py-20 overflow-hidden">
      {/* PCB & blueprint-inspired grid background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f1f] to-[#101522]">
        {/* Vertical PCB traces */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-cyan-500/10"
            style={{ left: `${(i / 30) * 100}%` }}
          />
        ))}

        {/* Horizontal PCB traces */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-cyan-500/10"
            style={{ top: `${(i / 20) * 100}%` }}
          />
        ))}

        {/* Solder dots / via holes */}
        {[...Array(50)].map((_, i) => (
          <span
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          ></span>
        ))}

        {/* Circuit/blueprint symbols floating */}
        {[...Array(15)].map((_, i) => {
          const symbols = ["⚡", "●", "▲", "■", "⬡"];
          const sym = symbols[Math.floor(Math.random() * symbols.length)];
          const size = Math.random() * 18 + 10;
          return (
            <span
              key={i}
              className="absolute text-cyan-400/30 animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${size}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {sym}
            </span>
          );
        })}
      </div>

      {/* Floating engineering shapes */}
      {[...Array(20)].map((_, i) => {
        const shapes = ["⚙️", "🛠️", "🔩", "▲", "■", "●", "⬡"];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 20 + 12;
        return (
          <span
            key={i}
            className="absolute text-gray-500/40 animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${size}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {shape}
          </span>
        );
      })}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
            Engineering Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-mono">
            Showcasing innovative technical projects with problem-solving, modern development, and engineering precision.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#181e2a] rounded-3xl p-8 shadow-2xl hover:shadow-cyan-400/50 hover:scale-[1.03] hover:rotate-1 transition-transform duration-300 border-l-4 border-t-2 border-b-2 border-gradient-to-br from-green-400 via-cyan-400 to-yellow-400 overflow-hidden"
            >
              {/* LED circuit dots */}
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
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="relative inline-flex items-center px-10 py-4 text-lg md:text-xl font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-500 via-green-400 to-cyan-500 shadow-lg shadow-cyan-600/50 hover:scale-105 hover:shadow-cyan-400/70 transition-transform duration-300"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-green-400 to-cyan-500 opacity-20 blur-xl"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.23c-3.338.727-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.774.418-1.306.762-1.606-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.287-1.552 3.292-1.23 3.292-1.23.655 1.653.245 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.921.43.37.815 1.103.815 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="relative z-10">View All Projects on GitHub</span>
          </Link>
        </div>
      </div>

      {/* Animations */}
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
