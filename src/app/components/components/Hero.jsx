"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[500px] lg:h-screen bg-[#0F131C] text-white flex items-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12">
      {/* Floating Background Layer */}
      <BackgroundDecor />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center h-full">
        {/* Left Side */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-xl">
            <span className="text-green-600">Computer Engineer</span> &{" "}
            <span className="text-yellow-500">Forex Trader</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-xl drop-shadow-sm">
            Bridging the gap between engineering innovation and financial market strategies.
            Building systems that solve problems while mastering the art of market analysis.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full">
            <Link href="#projects">
              <button className="bg-green-700 hover:bg-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg transition transform duration-300 hover:scale-110 w-full sm:w-auto">
                View My Projects
              </button>
            </Link>
            <Link href="#trading">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg transition transform duration-300 hover:scale-110 w-full sm:w-auto">
                Explore Trading Journey
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-transparent border border-white hover:bg-white hover:text-[#0F131C] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg transition transform duration-300 hover:scale-110 w-full sm:w-auto">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-col items-center justify-center w-full mt-10 lg:mt-0">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/25 via-transparent to-transparent rounded-3xl rotate-6 scale-105 blur-xl" />

          {/* Image */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 max-w-xs sm:max-w-md mx-auto">
            <Image
              src="/3366.jpg"
              alt="Formal Portrait"
              fill
              className="object-cover object-[center_30%] transition-transform duration-500 hover:scale-105 rounded-3xl"
              priority
            />
          </div>

          {/* Name */}
          <div className="mt-4 sm:mt-6 flex flex-col items-center group cursor-pointer w-full">
            <Link href="#about" scroll={true}>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-lg text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-400 font-serif">
                Neo A. Dela Torre
              </span>
            </Link>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full my-2 transition-all duration-300 group-hover:from-yellow-400 group-hover:via-green-400 group-hover:to-yellow-400" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 font-medium tracking-wide transition-all duration-300 group-hover:text-gray-200 font-serif">
              {/* Subtitle can go here */}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Decorative Background ---------------- */
function BackgroundDecor() {
  return (
    <>
      {/* Candlesticks */}
      <Candles className="absolute -left-8 top-10 opacity-30 animate-float-slow hidden md:block" scale={0.9} />
      <Candles className="absolute -right-6 bottom-6 opacity-25 animate-float-slower hidden lg:block" scale={1.1} />

      {/* Badges */}
      <BadgeArduino className="absolute left-8 bottom-10 opacity-40 animate-drift scale-125" />
      <BadgeJS className="absolute left-1/2 -translate-x-1/2 top-6 opacity-40 animate-float scale-125" />
      <BadgePython className="absolute right-10 top-24 opacity-35 animate-float-slow scale-125" />
      <BadgeCpp className="absolute right-1/4 bottom-20 opacity-35 animate-drift-slow scale-125" />

      {/* Radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 20%, rgba(34,197,94,0.08), transparent 60%), radial-gradient(500px 260px at 80% 70%, rgba(239,68,68,0.08), transparent 60%)",
        }}
      />

      {/* Animations */}
      <style jsx global>{`
        @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)} }
        @keyframes float-slow { 0%{transform:translateY(0)}50%{transform:translateY(-14px)}100%{transform:translateY(0)} }
        @keyframes float-slower { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
        @keyframes drift { 0%{transform:translate3d(0,0,0)rotate(0deg)}50%{transform:translate3d(6px,-8px,0)rotate(-2deg)}100%{transform:translate3d(0,0,0)rotate(0deg)} }
        @keyframes drift-slow { 0%{transform:translate3d(0,0,0)rotate(0deg)}50%{transform:translate3d(-8px,6px,0)rotate(2deg)}100%{transform:translate3d(0,0,0)rotate(0deg)} }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
        .animate-drift { animation: drift 9s ease-in-out infinite; }
        .animate-drift-slow { animation: drift-slow 12s ease-in-out infinite; }
      `}</style>
    </>
  );
}

/* ---------------- SVGs & Badges ---------------- */
function Candles({ className = "", scale = 1 }) {
  const size = 240 * scale;
  return (
    <svg aria-hidden className={className} width={size} height={size} viewBox="0 0 240 240" fill="none">
      <g stroke="url(#gridGrad)" strokeWidth="1" opacity="0.25">
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1="0" x2="240" y1={30 * (i + 1)} y2={30 * (i + 1)} />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={`v${i}`} y1="0" y2="240" x1={30 * (i + 1)} x2={30 * (i + 1)} />
        ))}
      </g>
      {[
        { x: 30, y: 120, h: 60, color: "#22c55e" },
        { x: 70, y: 90, h: 100, color: "#ef4444" },
        { x: 110, y: 110, h: 70, color: "#22c55e" },
        { x: 150, y: 80, h: 120, color: "#ef4444" },
        { x: 190, y: 100, h: 80, color: "#22c55e" },
      ].map((c, i) => (
        <g key={i} opacity="0.9">
          <rect x={c.x + 7} y={c.y - 20} width="2" height={c.h + 40} fill={c.color} opacity="0.8" />
          <rect x={c.x} y={c.y} width="16" height={c.h} rx="3" fill={c.color} />
        </g>
      ))}
      <defs>
        <linearGradient id="gridGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(99,102,241,0.2)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0.2)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Tailwind Badges
function BadgeArduino({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none flex items-center gap-2 px-4 py-3 rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm ${className}`}>
      <span className="text-sm font-medium text-green-400/90 tracking-wide">Arduino</span>
    </div>
  );
}
function BadgeJS({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none px-3 py-2 rounded-lg bg-yellow-500/20 ring-1 ring-yellow-500/30 ${className}`}>
      <span className="text-sm font-bold text-yellow-400">JavaScript</span>
    </div>
  );
}
function BadgePython({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none px-3 py-2 rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30 ${className}`}>
      <span className="text-sm font-bold text-blue-300">Python</span>
    </div>
  );
}
function BadgeCpp({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none px-3 py-2 rounded-lg bg-indigo-500/20 ring-1 ring-indigo-400/30 ${className}`}>
      <span className="text-sm font-bold text-indigo-300">C++</span>
    </div>
  );
}
