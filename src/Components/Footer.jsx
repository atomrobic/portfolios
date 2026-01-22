import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Code2, Terminal } from "lucide-react";

const TerminalFooter = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/atomrobic" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/akhil" },
        { icon: Mail, label: "Email", href: "mailto:akhilappu@gmail.com" }
    ];

    const techStack = [
        "Python", "Django", "FastAPI", "React", "PostgreSQL", "Docker", "Redis"
    ];

    return (
        <footer className="relative bg-black text-gray-300 font-mono border-t border-gray-900">

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Terminal size={24} className="text-blue-400" />
                            <h3 className="text-xl md:text-2xl font-bold text-white">Akhil Appu</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Full Stack Developer specializing in Python, Django, and modern web technologies.
                            Building scalable, production-ready applications.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <MapPin size={14} />
                            <span>Kerala, India</span>
                        </div>
                    </div>

                    {/* Quick Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Code2 size={16} className="text-blue-400" />
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400 hover:border-blue-600/50 hover:text-blue-400 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Status */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                            Get in Touch
                        </h4>

                        {/* Social Links */}
                        <div className="space-y-3 mb-6">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                                >
                                    <link.icon size={16} className="group-hover:scale-110 transition-transform" />
                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>

                        {/* Status Indicator */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-2 h-2 bg-green-500 rounded-full"
                            />
                            <span className="text-xs text-gray-400">Available for Freelance</span>
                        </div>
                    </div>
                </div>

                {/* Terminal Command Line */}
                <div className="border-t border-gray-900 pt-8 mb-8">
                    <div className="bg-gray-950 border border-gray-900 rounded-lg p-4 font-mono">
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                            <span className="text-blue-400">$</span>
                            <span className="text-gray-500">whoami</span>
                        </div>
                        <div className="mt-2 text-xs md:text-sm text-gray-400 space-y-1 ml-4">
                            <p><span className="text-purple-400">name</span>: <span className="text-gray-300">"Akhil Appu"</span></p>
                            <p><span className="text-purple-400">role</span>: <span className="text-gray-300">"Full Stack Developer"</span></p>
                            <p><span className="text-purple-400">email</span>: <span className="text-gray-300">"akhilappu@gmail.com"</span></p>
                            <p><span className="text-purple-400">stack</span>: <span className="text-gray-300">["Python", "Django", "React", "FastAPI"]</span></p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                            <span>© {currentYear} Akhil Appu</span>
                            <span className="hidden md:inline">•</span>
                            <span className="hidden md:inline">All rights reserved</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>System Online</span>
                            </div>
                            <span>•</span>
                            <span className="text-blue-400">v1.0.0</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default TerminalFooter;