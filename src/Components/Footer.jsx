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
    ChevronUp,
} from "lucide-react";

const SimpleTerminalFooter = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            id="contact"
            className="relative text-gray-300 font-mono border-t border-white/5 overflow-hidden scroll-mt-24 bg-[#0b0d10]"
        >
            {/* Background Layers */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(148,163,184,0.06),transparent_40%)] mix-blend-screen" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(100,116,139,0.04),transparent_40%)] mix-blend-screen" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-400/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                {/* Header Widget */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="flex items-center gap-2 bg-slate-900/60 px-4 py-2 rounded-lg border border-slate-800 shadow-sm">
                        <Terminal className="w-5 h-5 text-slate-300" />
                        <span className="text-slate-300 text-sm tracking-widest uppercase">
              //CONTACT_NODE
                        </span>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white tracking-tight">
                                Akhil Appu
                            </h3>
                            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                                Full Stack Engineer • Django • React • FastAPI
                                <br />
                                Engineering scalable web architecture & custom solutions.
                            </p>
                        </div>

                        {/* Stack */}
                        <div className="bg-slate-950/60 border border-slate-800/50 rounded-xl p-5 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Cpu className="w-4 h-4 text-slate-400" />
                                <span className="text-[10px] text-slate-500 tracking-[0.2em] font-bold">
                                    COMPILED_STACK
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Python",
                                    "Django",
                                    "FastAPI",
                                    "React",
                                    "PostgreSQL",
                                    "Docker",
                                    "Tailwind",
                                    "AWS",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-[10px] rounded-md bg-slate-800/40 text-slate-300 border border-slate-700/50 hover:border-slate-500/50 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Resume */}
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://drive.google.com/file/d/1VC_aYurVHgj0kCu1e__b-Kl3V0G9phkJ/preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-slate-800/40 border border-slate-600/40 
                px-6 py-3 rounded-xl text-sm text-slate-200 font-bold
                hover:bg-slate-700/50 hover:text-white transition-all group"
                        >
                            <Download
                                size={18}
                                className="group-hover:translate-y-0.5 transition-transform"
                            />
                            RESUME.PDF
                        </motion.a>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        {/* Social */}
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/atomrobic" },
                                {
                                    icon: Linkedin,
                                    href: "https://www.linkedin.com/in/akhil-a-7186052b5",
                                },
                                { icon: Mail, href: "mailto:akhilappuyeroor@gmail.com" },
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -3 }}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800
                    flex items-center justify-center text-slate-400
                    hover:text-white hover:border-slate-500/50
                    transition-all shadow-inner"
                                >
                                    <item.icon size={20} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="bg-slate-950/60 border border-slate-800/50 rounded-xl p-5 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-4 h-4 text-slate-400" />
                                <span className="text-[10px] text-slate-500 tracking-[0.2em] font-bold">
                                    SYSTEM_STATUS
                                </span>
                            </div>
                            <div className="text-xs space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">AVAILABILITY:</span>
                                    <span className="text-slate-200 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
                                        READY_FOR_PROJECTS
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">LOCATION:</span>
                                    <span className="text-slate-300">REMOTE / INDIA</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">TIMEZONE:</span>
                                    <span className="text-slate-300">IST (UTC+5:30)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 tracking-[0.15em] font-bold">
                    <div className="order-2 md:order-1">
                        © {currentYear} AKHIL_APPU_SYS
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="order-1 md:order-2 mb-6 md:mb-0 group flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
                    >
                        [ <span className="px-1">GO_TO_ROOT</span>{" "}
                        <ChevronUp
                            size={14}
                            className="group-hover:-translate-y-0.5 transition-transform"
                        />{" "}
                        ]
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
