import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Youtube, MessageCircle,
  Mail, ChevronRight, X, Menu, ExternalLink, FileText
} from "lucide-react";

export default function PortfolioNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeWidget, setActiveWidget] = useState(null);

  const navLinks = ["Home", "About", "Projects", "Experience"];

  const sideIcons = [
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/atomrobic", color: "hover:bg-zinc-800" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/akhil", color: "hover:bg-blue-700" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#", color: "hover:bg-red-600" },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", href: "#", color: "hover:bg-green-600" },
    { icon: <Mail size={20} />, label: "Email", href: "mailto:contact@example.com", color: "hover:bg-red-500" },
  ];

  const handleIconClick = (index) => {
    setActiveWidget(activeWidget === index ? null : index);
  };

  return (
    <>
      {/* --- 1. TOP NAVBAR (Glass Design) --- */}
      <header className="fixed top-6 z-[50] w-full flex justify-center px-4">
        <nav className="relative flex items-center justify-between gap-2 rounded-full border border-white/20 bg-black/40 p-2 pl-3 backdrop-blur-xl shadow-2xl w-full max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-blue-500 bg-zinc-900 shadow-lg">
              <img
                src="https://res.cloudinary.com/ddtpurhae/image/upload/v1769018925/WhatsApp_Image_2026-01-21_at_11.37.37_PM_cxccek.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-blue-400">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button className="flex h-10 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-500 hover:scale-105 active:scale-95">
              Contact
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-0 right-0 mx-auto w-[90%] max-w-md rounded-2xl border border-white/20 bg-black/95 backdrop-blur-2xl p-4 shadow-2xl md:hidden flex flex-col gap-2">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-xl px-4 py-3 text-center text-white hover:bg-white/10 font-medium">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- 2. THE SIDEBAR HANDLE (Ghost Preview + Bling) --- */}
      <div className="fixed left-0 top-1/2 z-[100] -translate-y-1/2">
        {!isSidebarOpen && (
          <motion.button
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            onClick={() => setIsSidebarOpen(true)}
            className="group relative flex flex-col items-center gap-4 py-6 px-2 rounded-r-[2.5rem] bg-black/30 backdrop-blur-md border-y border-r border-white/10 shadow-2xl transition-all hover:bg-black/50 hover:px-3"
          >
            {/* Bling Pulse */}
            <div className="absolute inset-0 rounded-r-[2.5rem] bg-blue-500/10 animate-pulse -z-10" />

            {/* Ghost Icons */}
            <div className="flex flex-col gap-5 opacity-20 group-hover:opacity-60 transition-opacity">
              {sideIcons.slice(0, 3).map((item, idx) => (
                <div key={idx} className="text-white">{item.icon}</div>
              ))}
            </div>

            <ChevronRight size={20} className="text-blue-400 mt-2 animate-bounce-x" />

            {/* Blinking Dot */}

          </motion.button>
        )}
      </div>

      {/* --- 3. FULL SIDEBAR + WIDGET LOGIC --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setIsSidebarOpen(false); setActiveWidget(null); }} className="fixed inset-0 z-[101] bg-black/40 backdrop-blur-sm" />

            <motion.div
              initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -150, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="fixed left-4 top-1/2 z-[102] -translate-y-1/2 flex flex-row items-center"
            >
              {/* Main Sidebar Column */}
              <div className="flex flex-col gap-3 rounded-[2.5rem] border border-white/20 bg-zinc-900/90 p-3 backdrop-blur-2xl shadow-2xl">
                <button onClick={() => { setIsSidebarOpen(false); setActiveWidget(null); }} className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-red-500 hover:text-white transition-all">
                  <X size={20} />
                </button>

                {sideIcons.map((item, index) => (
                  <div key={index} className="relative">
                    <motion.button
                      onClick={() => handleIconClick(index)}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`group flex h-14 w-14 items-center justify-center rounded-2xl transition-all shadow-lg ${activeWidget === index ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-300 ' + item.color + ' hover:text-white'}`}
                    >
                      {item.icon}
                    </motion.button>

                    {/* Connection Line & Widget Box */}
                    <AnimatePresence>
                      {activeWidget === index && (
                        <>
                          {/* Animated Connection Line */}
                          <motion.div
                            initial={{ width: 0 }} animate={{ width: 40 }} exit={{ width: 0 }}
                            className="absolute left-14 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400"
                          />

                          {/* Widget Box */}
                          <motion.div
                            initial={{ opacity: 0, x: -10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -10, scale: 0.9 }}
                            className="absolute left-[90px] top-1/2 -translate-y-1/2 min-w-[220px] rounded-2xl border border-white/20 bg-black/95 backdrop-blur-xl p-4 shadow-3xl"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">{item.icon}</div>
                              <span className="text-sm font-bold text-white">{item.label}</span>
                            </div>

                            <div className="flex flex-col gap-3">
                              <div className="text-[10px] text-gray-500 truncate bg-white/5 p-2 rounded-md border border-white/5">
                                {item.href}
                              </div>
                              <div className="flex gap-2">
                                <a href={item.href} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-xs font-bold text-white hover:bg-blue-500 transition-colors">
                                  Visit <ExternalLink size={12} />
                                </a>
                                <button onClick={() => setActiveWidget(null)} className="flex-1 rounded-lg bg-white/10 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors">
                                  Close
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}