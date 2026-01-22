import { cn } from "../lib/utils";
import React from "react";
import CaseStudyCard from "./OpenCard";
import Services from "./Projects";
import TimelineDemo from "./TimeLine";
import { motion } from "framer-motion";
import resumePdf from "../assets/resume.pdf";

const MotionDiv = motion.div;

export function DotBackground() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">

      {/* Background Dots */}
      <div className="fixed inset-0 [background-size:20px_20px] md:[background-size:25px_25px] lg:[background-size:30px_30px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />

      {/* Radial Fade */}
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -200], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto space-y-24 lg:space-y-32">

          {/* PROJECTS / SERVICES SECTION */}
          <MotionDiv
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-9xl">
              <Services />
            </div>
          </MotionDiv>

          {/* RESUME TITLE */}


          {/* TIMELINE */}
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <TimelineDemo />
          </MotionDiv>

        </div>
      </div>
    </div>
  );
}

export default DotBackground;
