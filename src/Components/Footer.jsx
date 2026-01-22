import React from "react";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    Download,
    Terminal,
    ChevronRight,
    Cpu,
    Code,
    Globe,
    FileText,
    Sparkles,
    MapPin,
    Navigation
} from "lucide-react";

const FooterWithMap = () => {
    const currentYear = new Date().getFullYear();
    const location = { lat: 9.9312, lng: 76.2673 }; // Kochi, Kerala coordinates

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-950 to-black text-gray-300 font-sans overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-emerald-900/10" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#00ff41_1px,transparent_1px),linear-gradient(180deg,#00ff41_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                {/* Header with terminal aesthetic */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                            <Terminal className="w-5 h-5 text-emerald-400" />
                            <span className="text-emerald-400 font-mono text-sm font-medium tracking-wider">
                                TERMINAL://LOCATION
                            </span>
                            <div className="flex gap-1 ml-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse delay-100" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/30 animate-pulse delay-200" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column: Profile Section */}
                        <div className="lg:w-2/5 space-y-8">
                            {/* Profile Card */}
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-900/20 rounded-lg">
                                        <Code className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-2">Akhil Appu</h3>
                                        <p className="text-gray-400 mb-4">
                                            Full Stack Engineer specializing in Python/Django, React, and cloud architecture.
                                        </p>

                                        {/* Contact Info */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Mail className="w-4 h-4 text-emerald-500" />
                                                <span className="text-sm">akhilappu@gmail.com</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-4 h-4 text-emerald-500" />
                                                <span className="text-sm">Kerala, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                <h4 className="text-sm font-medium text-gray-400 mb-4 tracking-wider">TECHNOLOGY STACK</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "Django", "FastAPI", "React", "PostgreSQL", "AWS", "Docker", "Redis", "Tailwind", "Git", "TypeScript", "Next.js"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-xs bg-gray-900/50 text-gray-300 rounded-lg border border-gray-800 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Resume Download Card */}
                            <motion.a
                                href="https://drive.google.com/file/d/1VC_aYurVHgj0kCu1e__b-Kl3V0G9phkJ/preview"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                className="block bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group p-5"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-emerald-900/20 rounded-lg">
                                        <FileText className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                                    Download Resume
                                                </span>
                                                <p className="text-sm text-gray-500 mt-1">Latest version • PDF Format</p>
                                            </div>
                                            <Download className="w-5 h-5 text-emerald-500 opacity-70 group-hover:opacity-100 group-hover:translate-y-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        </div>

                        {/* Right Column: Map & Social */}
                        <div className="lg:w-3/5">
                            {/* Map Container */}
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden mb-6">
                                <div className="p-5 border-b border-gray-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Navigation className="w-5 h-5 text-emerald-400" />
                                        <h3 className="text-lg font-semibold text-white">Location</h3>
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono">
                                        9.9312° N, 76.2673° E
                                    </div>
                                </div>

                                {/* Map Visualization */}
                                <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-900 to-black">
                                    {/* Simplified map representation */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Map background */}
                                        <div className="relative w-full h-full overflow-hidden">
                                            {/* Grid for map background */}
                                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#00ff41_1px,transparent_1px),linear-gradient(180deg,#00ff41_1px,transparent_1px)] bg-[size:30px_30px]" />

                                            {/* Continent/land representation */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-800/20 rounded-full border border-gray-700/50" />
                                            <div className="absolute top-1/3 left-1/3 w-24 h-32 bg-gray-800/10 rounded-lg border border-gray-700/30" />
                                            <div className="absolute bottom-1/4 right-1/4 w-32 h-20 bg-gray-800/10 rounded-xl border border-gray-700/30" />

                                            {/* Location marker */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.8, 1, 0.8]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="relative"
                                                >
                                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                                            <MapPin className="w-4 h-4 text-white" />
                                                        </div>
                                                    </div>
                                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-emerald-500" />
                                                </motion.div>
                                            </div>

                                            {/* Map coordinates grid */}
                                            <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-mono">
                                                LAT: 9.9312° N
                                            </div>
                                            <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono">
                                                LNG: 76.2673° E
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 border-t border-gray-800 bg-gray-900/50">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-gray-300">Kochi, Kerala</span>
                                        </div>
                                        <span className="text-gray-500">Timezone: IST (UTC+5:30)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links Row */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    {
                                        label: "GitHub",
                                        icon: Github,
                                        href: "https://github.com/atomrobic",
                                        color: "text-gray-300",
                                        bg: "bg-gray-900"
                                    },
                                    {
                                        label: "LinkedIn",
                                        icon: Linkedin,
                                        href: "https://linkedin.com/in/akhil",
                                        color: "text-blue-400",
                                        bg: "bg-blue-900/20"
                                    },
                                    {
                                        label: "Email",
                                        icon: Mail,
                                        href: "mailto:akhilappu@gmail.com",
                                        color: "text-red-400",
                                        bg: "bg-red-900/20"
                                    }
                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-800 hover:border-emerald-500/30 hover:bg-gray-900/50 transition-all duration-300"
                                    >
                                        <div className={`p-3 rounded-lg ${item.bg} group-hover:scale-110 transition-transform`}>
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                                            {item.label}
                                        </span>
                                        <div className="w-4 h-[2px] bg-emerald-500/0 group-hover:bg-emerald-500 transition-all duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright & Info */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm text-gray-400">
                                    © {currentYear} Akhil Appu • All rights reserved
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
                                <Cpu className="w-3 h-3" />
                                <span>System: v2.4.0 • Production Ready</span>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 rounded-full border border-gray-800">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-xs font-mono text-emerald-400 tracking-wider">
                                    STATUS: AVAILABLE
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Sparkles className="w-4 h-4 text-emerald-500" />
                                <span className="text-gray-300">Open for opportunities</span>
                            </div>
                        </div>
                    </div>

                    {/* Final Message */}
                    <div className="mt-8 pt-6 border-t border-gray-800/30 text-center">
                        <p className="text-sm text-gray-500 font-mono tracking-wider">
                            {"//"} Built with <span className="text-emerald-500">&lt;/&gt;</span> from{" "}
                            <span className="text-gray-400">Kerala, India</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                            Coordinates locked • Last sync: {new Date().toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        </footer>
    );
};

export default FooterWithMap;