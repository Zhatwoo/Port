"use client";

import { motion } from "framer-motion";
import { FaPython, FaJs, FaJava, FaReact, FaNodeJs, FaDocker, FaDatabase, FaTools } from "react-icons/fa";
import { SiCplusplus, SiFlutter, SiNextdotjs, SiMongodb, SiFirebase, SiArduino } from "react-icons/si";
import { RiStockLine } from "react-icons/ri";

// Arrays
const technicalSkills = [
    {
        title: "Programming Languages",
        items: [
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript/TypeScript", icon: <FaJs /> },
            { name: "Java", icon: <FaJava /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Dart", icon: <SiFlutter /> },
        ]
    },
    {
        title: "Web Technologies",
        items: [
            { name: "React", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Express", icon: <FaNodeJs /> },
            { name: "HTML/CSS/SASS", icon: <FaReact /> },
        ]
    },
    {
        title: "Mobile Development",
        items: [
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "React Native", icon: <FaReact /> },
            { name: "Android SDK", icon: <FaJava /> },
            { name: "iOS Development", icon: <FaReact /> },
        ]
    },
    {
        title: "Databases & Tools",
        items: [
            { name: "PostgreSQL", icon: <FaDatabase /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Git", icon: <FaDocker /> },
            { name: "Docker", icon: <FaDocker /> },
        ]
    },
    {
        title: "Hardware & IoT",
        items: [
            { name: "Arduino", icon: <SiArduino /> },
            { name: "Raspberry Pi", icon: <SiArduino /> },
            { name: "Sensors", icon: <SiArduino /> },
            { name: "Microcontrollers", icon: <SiArduino /> },
        ]
    },
];

const tradingSkills = [
    {
        title: "Technical Analysis",
        items: [
            { name: "Chart Patterns", icon: <RiStockLine /> },
            { name: "Indicators", icon: <RiStockLine /> },
            { name: "Support/Resistance", icon: <RiStockLine /> },
            { name: "Trend Analysis", icon: <RiStockLine /> },
        ]
    },
    {
        title: "Fundamental Analysis",
        items: [
            { name: "Economic Calendar", icon: <RiStockLine /> },
            { name: "News Analysis", icon: <RiStockLine /> },
            { name: "Market Sentiment", icon: <RiStockLine /> },
            { name: "Central Bank Policies", icon: <RiStockLine /> },
        ]
    },
    {
        title: "Risk Management",
        items: [
            { name: "Position Sizing", icon: <RiStockLine /> },
            { name: "Stop Loss Strategy", icon: <RiStockLine /> },
            { name: "Portfolio Management", icon: <RiStockLine /> },
            { name: "Risk/Reward Ratios", icon: <RiStockLine /> },
        ]
    },
    {
        title: "Trading Tools",
        items: [
            { name: "MetaTrader 4/5", icon: <RiStockLine /> },
            { name: "TradingView", icon: <RiStockLine /> },
            { name: "Economic Indicators", icon: <RiStockLine /> },
            { name: "Backtesting", icon: <RiStockLine /> },
        ]
    },
    {
        title: "Strategy Development",
        items: [
            { name: "Scalping", icon: <RiStockLine /> },
            { name: "Swing Trading", icon: <RiStockLine /> },
            { name: "Algorithmic Trading", icon: <RiStockLine /> },
            { name: "Performance Analysis", icon: <RiStockLine /> },
        ]
    },

];

// Merge and alternate
const combinedSkills = [];
const maxLength = Math.max(technicalSkills.length, tradingSkills.length);
for (let i = 0; i < maxLength; i++) {
    if (technicalSkills[i]) combinedSkills.push({ ...technicalSkills[i], type: "tech" });
    if (tradingSkills[i]) combinedSkills.push({ ...tradingSkills[i], type: "trade" });
}

export default function DualExpertiseZigZag() {
    return (
        <section className="bg-[#1a1d29] py-16 px-4 sm:px-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Dual <span className="text-green-400">Expertise</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    Alternating technical and trading skills along the central trunk in a zig-zag tree design.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Labels */}
                <div className="flex justify-between mb-8">
                    <h3 className="flex items-center gap-2 text-green-400 text-2xl font-bold">
                        <FaTools className="text-3xl" /> Engineering Skills
                    </h3>
                    <h3 className="flex items-center gap-2 text-yellow-400 text-2xl font-bold">
                        <RiStockLine className="text-3xl" /> Trading Skills
                    </h3>
                </div>

                {/* Central trunk */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-600/30 -translate-x-1/2"></div>

                <div className="flex flex-col space-y-12">
                    {combinedSkills.map((skill, idx) => {
                        const isLeft = skill.type === "tech";
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`md:flex md:items-center relative ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                            >
                                <div className={`md:w-1/2 bg-[#222533] p-6 rounded-xl shadow-md ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                    <h4 className={`text-lg font-bold mb-2 ${isLeft ? 'text-green-400' : 'text-yellow-400'}`}>
                                        {skill.title}
                                    </h4>
                                    <ul className="flex flex-wrap gap-2 justify-start">
                                        {skill.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-1 text-white px-3 py-1 rounded-full text-sm bg-gray-700/20">
                                                {item.icon} {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Node circle */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                                    style={{ backgroundColor: isLeft ? '#22c55e' : '#facc15' }}
                                ></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
