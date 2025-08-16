"use client";

import { Cpu, LineChart, Lightbulb, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const listVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full text-white py-10 md:py-20 px-4 sm:px-6 flex justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#101522] to-[#0f172a] animate-gradient bg-[length:400%_400%]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-float"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.animationDelay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative max-w-5xl w-full bg-[#181e2a]/90 backdrop-blur-md rounded-3xl shadow-2xl ring-1 ring-green-400/10 p-4 sm:p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={listVariants}
      >
        {/* About Me */}
        <motion.div
          className="md:col-span-2 flex items-center gap-4 md:gap-6 flex-col md:flex-row w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/3366.jpg"
            alt="Neo Dela Torre"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-400 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 md:mb-4 tracking-wide font-serif break-words">
              About Me
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full mb-4 md:mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium break-words">
              Hi, I'M <span className="text-green-400 font-semibold">Neo Dela Torre</span>, a passionate Computer Engineer and Forex Trader. I specialize in building robust systems, automating trading strategies, and leveraging technology to solve real-world problems. My journey blends engineering expertise with financial acumen, allowing me to innovate in both fields.
            </p>
          </div>
        </motion.div>

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-green-400">My Journey</h3>
          <ul className="space-y-3 sm:space-y-4">
            {[
              { icon: Cpu, title: "Started Computer Engineering", desc: "Began formal education in systems design", color: "text-green-400" },
              { icon: LineChart, title: "Discovered Forex Trading", desc: "Started learning market analysis and trading strategies", color: "text-yellow-400" },
              { icon: Shield, title: "Active Trading & Engineering", desc: "Balancing academic projects with live market trading", color: "text-green-400" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-[#222b3a] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: idx * 0.2 }}
              >
                <item.icon size={24} className={`${item.color} mt-1`} />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="grid grid-cols-2 gap-2 sm:gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {[
            { icon: Cpu, title: "Engineering", desc: "System design & problem-solving", color: "text-green-400" },
            { icon: LineChart, title: "Market Analysis", desc: "Forex technical & fundamental analysis", color: "text-yellow-400" },
            { icon: Lightbulb, title: "Innovation", desc: "Modern & efficient solutions", color: "text-green-400" },
            { icon: Shield, title: "Risk Management", desc: "Strategic project & portfolio handling", color: "text-yellow-400" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-2 sm:p-4 bg-gray-800 rounded-lg text-center hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.2 }}
            >
              <item.icon className={`mx-auto ${item.color}`} size={32} />
              <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
