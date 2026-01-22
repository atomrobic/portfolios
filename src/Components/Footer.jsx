import React from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    Download,
    Terminal,
    Cpu,
    Sparkles,
    ChevronUp
} from "lucide-react";

const SimpleTerminalFooter = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            id="about" // Change this to contact so Navbar can find it
            className="relative text-gray-300 font-mono border-t border-white/5 overflow-hidden scroll-mt-24 bg-[#060010]"
        >
            {/* --- Advanced Background Layers --- */}
            {/* 1. Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* 2. Primary Terminal Glow (Emerald) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(16,185,129,0.08),transparent_40%)] mix-blend-screen" />

            {/* 3. Secondary Tech Glow (Blue) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.04),transparent_40%)] mix-blend-screen" />

            {/* 4. Top Edge Beam */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

                {/* Header Widget */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="flex items-center gap-2 bg-gray-900/60 px-4 py-2 rounded-lg border border-gray-800 shadow-sm">
                        <Terminal className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 text-sm tracking-widest uppercase">
                            //CONTACT_NODE
                        </span>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT: Identity */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white tracking-tight">
                                Akhil Appu
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                Full Stack Engineer • Django • React • FastAPI
                                <br />
                                Engineering scalable web architecture & custom solutions.
                            </p>
                        </div>

                        {/* Tech Stack Chip Cloud */}
                        <div className="bg-gray-950/50 border border-gray-800/50 rounded-xl p-5 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Cpu className="w-4 h-4 text-emerald-500" />
                                <span className="text-[10px] text-gray-500 tracking-[0.2em] font-bold">
                                    COMPILED_STACK
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Python", "Django", "FastAPI", "React",
                                    "PostgreSQL", "Docker", "Tailwind", "AWS",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-[10px] rounded-md bg-emerald-500/5 text-emerald-400/80 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action: Resume */}
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://drive.google.com/file/d/1VC_aYurVHgj0kCu1e__b-Kl3V0G9phkJ/preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/30 
                px-6 py-3 rounded-xl text-sm text-emerald-400 font-bold
                hover:bg-emerald-500/10 hover:text-emerald-300 transition-all group"
                        >
                            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                            RESUME.PDF
                        </motion.a>
                    </div>

                    {/* RIGHT: Connectivity */}
                    <div className="space-y-6">
                        {/* Social Matrix */}
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/atomrobic" },
                                { icon: Linkedin, href: "https://linkedin.com/in/akhil" },
                                { icon: Mail, href: "mailto:akhilappu@gmail.com" },
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-xl bg-gray-900/80 border border-gray-800
                    flex items-center justify-center text-gray-400
                    hover:text-emerald-400 hover:border-emerald-500/30
                    transition-all shadow-inner"
                                >
                                    <item.icon size={20} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Live Server Status Widget */}
                        <div className="bg-gray-950/50 border border-gray-800/50 rounded-xl p-5 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-4 h-4 text-emerald-500" />
                                <span className="text-[10px] text-gray-500 tracking-[0.2em] font-bold">
                                    SYSTEM_STATUS
                                </span>
                            </div>
                            <div className="text-xs space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">AVAILABILITY:</span>
                                    <span className="text-emerald-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        READY_FOR_PROJECTS
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">LOCATION:</span>
                                    <span className="text-gray-300">REMOTE / INDIA</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">TIMEZONE:</span>
                                    <span className="text-gray-300">IST (UTC+5:30)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Metadata Bar */}
                <div className="mt-16 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-[0.15em] font-bold">
                    <div className="order-2 md:order-1">© {currentYear} AKHIL_APU_SYS</div>

                    <button
                        onClick={scrollToTop}
                        className="order-1 md:order-2 mb-6 md:mb-0 group flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors"
                    >
                        [ <span className="px-1">GO_TO_ROOT</span> <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" /> ]
                    </button>

                    <div className="order-3 hidden md:block opacity-50">
                        BUILD_HASH: 7F29A1
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SimpleTerminalFooter;