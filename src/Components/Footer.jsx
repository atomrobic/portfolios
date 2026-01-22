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

    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        /* Added id="contact" and scroll-mt-24 to handle the fixed navbar offset */
        <footer
            id="about"
            className="relative text-gray-300 font-mono border-t border-gray-900 overflow-hidden scroll-mt-24"
        >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="flex items-center gap-2 bg-gray-900/60 px-4 py-2 rounded-lg border border-gray-800">
                        <Terminal className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 text-sm tracking-widest">
                            //CONTACT_NODE
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT: Profile */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Akhil Appu
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Full Stack Engineer • Django • React • FastAPI
                                <br />
                                Building scalable web products & freelancing.
                            </p>
                        </div>

                        {/* Stack */}
                        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Cpu className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-gray-400 tracking-wider">
                                    ACTIVE STACK
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Python", "Django", "FastAPI", "React",
                                    "PostgreSQL", "Docker", "Tailwind", "AWS",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-[10px] rounded-full bg-gray-800 text-emerald-400 border border-emerald-500/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Resume */}
                        <a
                            href="https://drive.google.com/file/d/1VC_aYurVHgj0kCu1e__b-Kl3V0G9phkJ/preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 border border-emerald-500/50 
                px-6 py-3 rounded-xl text-sm text-emerald-400
                hover:bg-emerald-500/10 hover:text-white transition-all group"
                        >
                            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                            DOWNLOAD_RESUME
                        </a>
                    </div>

                    {/* RIGHT: Social + Status */}
                    <div className="space-y-6">

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/atomrobic" },
                                { icon: Linkedin, href: "https://linkedin.com/in/akhil" },
                                { icon: Mail, href: "mailto:akhilappu@gmail.com" },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800
                    flex items-center justify-center text-gray-400
                    hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/5
                    transition-all"
                                >
                                    <item.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-gray-400 tracking-wider">
                                    LIVE STATUS
                                </span>
                            </div>
                            <div className="text-sm space-y-2">
                                <p>
                                    <span className="text-gray-500">ROLE:</span>{" "}
                                    Full Stack Developer
                                </p>
                                <p>
                                    <span className="text-gray-500">MODE:</span>{" "}
                                    Freelancer
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">STATUS:</span>
                                    <span className="text-emerald-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                        Available for work
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase">
                    <div>© {currentYear} Akhil Appu</div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="my-4 md:my-0 flex items-center gap-2 hover:text-emerald-400 transition-colors"
                    >
                        [ BACK_TO_TOP <ChevronUp size={14} /> ]
                    </button>

                    <div className="mt-2 md:mt-0">
                        V2.4.0-STABLE
                    </div>
                </div>
            </div>

            {/* Glow orbs */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        </footer>
    );
};

export default SimpleTerminalFooter;