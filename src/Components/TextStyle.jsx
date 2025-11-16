"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/Components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export function HeroHighlightDemo({ name, highlightText, subtitle }) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={cn(
          "bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-center font-bold text-transparent",
          "text-4xl px-4 sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-relaxed lg:leading-snug mx-auto"
        )}
      >
        {name || "Akhil"}{" "}
        {highlightText && (
          <Highlight className="text-white">
            {highlightText}
          </Highlight>
        )}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-neutral-400 sm:text-base md:text-lg max-w-md px-4 mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </HeroHighlight>
  );
}

export default HeroHighlightDemo;