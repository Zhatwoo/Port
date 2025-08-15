"use client";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#101522] text-white py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full bg-[#181e2a] rounded-3xl shadow-2xl ring-1 ring-green-400/10 p-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src="/3366.jpg"
            alt="Neo Dela Torre"
            className="w-40 h-40 rounded-full border-4 border-green-400 object-cover shadow-lg"
          />
        </div>
        {/* About Me Text */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide"
            style={{ fontFamily: "'Playfair Display', 'Montserrat', serif" }}
          >
            About Me (wip)
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            Hi, I'M <span className="text-green-400 font-semibold">Neo Dela Torre</span>, a passionate Computer Engineer and Forex Trader. I specialize in building robust systems, automating trading strategies, and leveraging technology to solve real-world problems. My journey blends engineering expertise with financial acumen, allowing me to innovate in both fields. Let's connect and create something impactful together!
          </p>
        </div>
      </div>
    </section>
  );
}