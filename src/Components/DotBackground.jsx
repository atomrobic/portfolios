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
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="projects-title"
          >
            RESUME
          </motion.h2>

          <style>{`
            .projects-title {
              text-align: center;
              font-size: 3.5rem;
              font-weight: 800;
              background: linear-gradient(135deg, #505a5cff, #515a68ff, #baacc6ff);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              margin: 0 auto 40px auto;
              width: fit-content;
              position: relative;
            }

            .projects-title::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);
              width: 80%;
              height: 3px;
              background: linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #a855f7, transparent);
              border-radius: 2px;
            }
          `}</style>

          {/* RESUME SUBTEXT */}
          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-xl mt-2 tracking-wider max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
          </motion.p>

          {/* RESUME CARD */}
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
           <CaseStudyCard
  category="RESUME"
  image="https://res.cloudinary.com/ddtpurhae/image/upload/v1766402722/A_vdie41.png"
  link="https://drive.google.com/file/d/1VC_aYurVHgj0kCu1e__b-Kl3V0G9phkJ/preview"
  logo="https://cdn-icons-png.flaticon.com/512/888/888853.png"
  title="Akhil Appu - Full Stack Developer"
  type="resume"
/>
          </MotionDiv>

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
