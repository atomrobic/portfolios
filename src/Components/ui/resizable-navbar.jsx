"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { CiCoffeeCup } from "react-icons/ci";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(0px)",
        backgroundColor: visible
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(0, 0, 0, 0)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "none",
        width: visible ? "45%" : "100%",
        borderRadius: visible ? "9999px" : "0",
        y: visible ? 16 : 0,
        border: visible ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "mx-auto hidden w-full max-w-7xl items-center justify-between rounded-full px-8 py-4 backdrop-blur-2xl transition-all duration-300 lg:flex",
        "bg-black/0",
        visible && "bg-black/70",
        className
      )}
      style={{ minWidth: "800px" }}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn("flex flex-1 items-center justify-center space-x-10", className)}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-lg font-medium text-white/80 transition-all hover:text-white"
        >
          {hovered === idx && (
            <motion.span
              layoutId="nav-hover"
              className="absolute inset-0 rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(0px)",
        backgroundColor: visible ? "rgba(0, 0, 0, 0.7)" : "transparent",
        y: visible ? 16 : 0,
        borderRadius: visible ? "2rem" : "0",
        padding: visible ? "0 16px" : "0",
        border: visible ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center bg-gray-100 px-6 py-4 lg:hidden",
        visible && "bg-black/70",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn("flex w-full items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed left-0 top-0 z-50 h-full w-80 bg-neutral-950/98 shadow-2xl border-r border-white/10",
              className
            )}
          >
            <div className="flex h-full flex-col p-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl p-3 bg-white/10 backdrop-blur-md transition-all hover:bg-white/20",
        className
      )}
    >
      {isOpen ? (
        <IconX className="h-6 w-6 text-white" />
      ) : (
        <IconMenu2 className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = ({ className }) => {
  return (
    <a
      href="#"
      className={cn("flex items-center space-x-3 text-xl font-bold", className)}
    >
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-BLACK-500  shadow-lg flex items-center justify-center">
        <CiCoffeeCup className="h-6 w-6 text-white" />
      </div>
     <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
  Akhil
</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl hover:scale-105",
    secondary:
      "border border-white/30 text-white backdrop-blur-md hover:bg-white/10",
    gradient: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={cn(
        "rounded-full px-6 py-3 text-sm font-bold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};