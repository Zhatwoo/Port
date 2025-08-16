"use client";

import React from "react";
import { FaChartLine, FaShieldAlt, FaChartBar, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const tradingItems = [
    { icon: <FaChartLine className="text-yellow-500 text-4xl" />, title: "Consistent Growth", description: "Maintained steady portfolio performance over 24 months of active trading", buttonText: "2+ Years" },
    { icon: <FaShieldAlt className="text-yellow-500 text-4xl" />, title: "Risk Management", description: "Developed and implemented strict risk management protocols with position sizing", buttonText: "Max 2% Risk" },
    { icon: <FaChartBar className="text-yellow-500 text-4xl" />, title: "Strategy Development", description: "Created and backtested multiple trading strategies across different market conditions", buttonText: "5+ Strategies" },
    { icon: <FaBrain className="text-yellow-500 text-4xl" />, title: "Market Analysis", description: "Proficient in both technical and fundamental analysis for informed decision making", buttonText: "Multi-timeframe" },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.6 } }
};

export default function TradingProjects() {
    return (
        <section
            id="trading"
            className="relative w-full py-24 text-white overflow-hidden"
        >
            {/* ===== VIDEO BACKGROUND WITH SMOOTH SLOW-MOTION ===== */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover brightness-[1.2] saturate-110 animate-slowpan-smoother"
                src="/tradingbg1.mp4"
            />

            {/* Overlay for contrast (lighter for mobile) */}
            <div className="absolute inset-0 bg-black/25 sm:bg-black/50"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-extrabold text-yellow-500 mb-4">Trading Journey</h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Combining an engineering mindset with market expertise, I’ve spent two years developing consistent and sustainable trading strategies.
                    </p>
                </motion.header>

                {/* Trading Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                    {tradingItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1E1E1E]/80 rounded-2xl p-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105 backdrop-blur-md"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="mb-5">{item.icon}</div>
                            <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-sm mb-6">{item.description}</p>
                            <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full text-sm hover:bg-yellow-400 transition duration-300">{item.buttonText}</button>
                        </motion.div>
                    ))}
                </div>

                {/* Expertise & Methodology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-20">
                    {/* Trading Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center mb-6">
                            <FaBrain className="text-yellow-500 text-3xl mr-3" />
                            <h3 className="text-3xl font-bold text-yellow-500">Trading Expertise</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-6 text-lg">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Technical Analysis</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Risk Management</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Market Psychology</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Economic Calendar</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Strategy Backtesting</li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Chart Pattern Recognition</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Position Sizing</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Fundamental Analysis</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Money Management</li>
                                <li className="flex items-center"><span className="text-green-400 mr-2">●</span>Performance Analytics</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Trading Methodology */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center mb-6">
                            <FaChartBar className="text-yellow-500 text-3xl mr-3" />
                            <h3 className="text-3xl font-bold text-yellow-500">Trading Methodology</h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { phase: "Analysis Phase", desc: "Multi-timeframe technical analysis combined with fundamental market drivers", tags: ["MetaTrader", "TradingView", "Economic Calendar"] },
                                { phase: "Strategy Execution", desc: "Systematic approach with predefined entry/exit criteria and risk parameters", tags: ["Position Sizing Calculator", "Risk Management Rules", "Trade Journal"] },
                                { phase: "Performance Review", desc: "Regular analysis of trading performance with continuous strategy optimization", tags: ["Excel Analytics", "Performance Metrics", "Strategy Refinement"] },
                            ].map((item, idx) => (
                                <motion.div key={idx} className="bg-[#181818]/80 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 backdrop-blur-md">
                                    <h4 className="text-green-400 font-bold mb-2 text-lg">{item.phase}</h4>
                                    <p className="text-gray-300 mb-3 text-sm">{item.desc}</p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {item.tags.map(tag => <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full">{tag}</span>)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Professional Approach */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-[#181818]/80 rounded-2xl p-8 mt-20 text-center max-w-3xl mx-auto shadow-md hover:shadow-lg transition duration-300 backdrop-blur-md"
                >
                    <h4 className="text-green-400 font-bold mb-4 text-xl">Professional Approach</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        My trading approach emphasizes risk management, systematic analysis, and continuous learning. While maintaining strict confidentiality around specific performance metrics, I focus on developing sustainable strategies that combine technical expertise with market psychology.
                    </p>
                </motion.div>
            </div>

            {/* ===== SMOOTH SLOW-MOTION VIDEO ANIMATION ===== */}
            <style jsx>{`
                @keyframes smooth-slowpan {
                    0% { transform: scale(1) translateX(0) translateY(0); }
                    50% { transform: scale(1.02) translateX(-0.5%) translateY(-0.5%); }
                    100% { transform: scale(1) translateX(0) translateY(0); }
                }
                .animate-slowpan-smoother {
                    animation: smooth-slowpan 400s ease-in-out infinite; /* <- slow & smooth */
                }
            `}</style>
        </section>
    );
}
