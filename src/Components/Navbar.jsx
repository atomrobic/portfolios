"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { Menu , Dot,Circle} from 'lucide-react';
import Header from "./Header";
import { X, Linkedin, Github, MessageCircle, Plus } from "lucide-react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ============ RESUME & HIRE ME CONFIGURATION ============
  // Replace with your actual resume URL
  const RESUME_URL = "https://drive.google.com/file/d/YOUR_FILE_ID/view"; // Replace this!
  
  // Email configuration for "Hire Me" button
  const EMAIL_ADDRESS = "akhilappuyeroor@gmail.com";
  const EMAIL_SUBJECT = "Hiring Inquiry - Let's Work Together!";
  const EMAIL_BODY = "Hi Akhil,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential opportunity.%0D%0A%0D%0ABest regards,";
  
  const handleResumeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Open resume in new tab
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  const handleHireClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Create mailto link with subject and body
    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${EMAIL_BODY}`;
    // Use window.location for better compatibility
    window.location.href = mailtoLink;
  };
  // ========================================================

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Show floating menu button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingMenu(true);
      } else {
        setShowFloatingMenu(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/akhil-a-7186052b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/atomrobic",
      color: "hover:bg-gray-700",
      bgColor: "bg-gray-600",
    },
    {
      name: "Telegram",
      icon: <MessageCircle size={24} />,
      url: "https://t.me/HAPPY_LIFE000_P",
      color: "hover:bg-blue-500",
      bgColor: "bg-blue-400",
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-6">
            {/* Social Icons with Glow */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/akhil-a-7186052b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-[inset_0_0_8px_rgba(59,130,246,0.4)] hover:scale-110 rounded-full p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/atomrobic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 hover:shadow-[inset_0_0_8px_rgba(107,114,128,0.4)] hover:scale-110 rounded-full p-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://t.me/HAPPY_LIFE000_P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-[inset_0_0_8px_rgba(59,130,246,0.4)] hover:scale-110 rounded-full p-1"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
            </div>
            
            {/* Buttons with functionality */}
            <div className="flex items-center gap-4">
              <NavbarButton 
                variant="secondary" 
                onClick={handleResumeClick}
              >
                Resume
              </NavbarButton>
              <NavbarButton 
                variant="primary"
                onClick={handleHireClick}
              >
                Hire Me
              </NavbarButton>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-neutral-900 dark:text-white"
            />
            <NavbarLogo />
          </MobileNavHeader>

          {/* Mobile menu with white background and X button */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className={`fixed inset-0 z-50 bg-gray-100 dark:bg-neutral-900 transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-black dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6 p-6 mt-10">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-black dark:text-white transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

              <div className="flex flex-col gap-3">
                <NavbarButton
                  onClick={(e) => {
                    handleResumeClick(e);
                    setIsMobileMenuOpen(false);
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Resume
                </NavbarButton>
                <NavbarButton
                  onClick={(e) => {
                    handleHireClick(e);
                    setIsMobileMenuOpen(false);
                  }}
                  variant="primary"
                  className="w-full"
                >
                  Hire Me
                </NavbarButton>
              </div>

              <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/akhil-a-7186052b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/atomrobic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://t.me/HAPPY_LIFE000_P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors animate-pulse"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Your content */}
      <Header />

      {/* Floating Social Menu */}
      {showFloatingMenu && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Social Icons - appear when menu is open */}
          <div
            className={`flex flex-col gap-3 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bgColor} ${social.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-3 group`}
                aria-label={social.name}
                style={{
                  transitionDelay: isMenuOpen ? `${idx * 50}ms` : "0ms",
                }}
              >
                {/* Tooltip */}
                <span className="absolute right-full mr-3 bg-neutral-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {social.name}
                </span>
                {social.icon}
              </a>
            ))}
          </div>

          <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className={`bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-gray-400 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
    isMenuOpen ? "scale-90" : "scale-100"
  }`}
  aria-label="Toggle menu"
>
  {!isMenuOpen && (
    <>
      <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></span>
      <span className="absolute inset-0 rounded-full bg-gray-300 animate-pulse opacity-50"></span>
    </>
  )}
  
  {/* Circle Icon */}
  <Circle size={28} className="relative z-10" />
</button>
        </div>
      )}
    </div>
  );
}

export default NavbarDemo;