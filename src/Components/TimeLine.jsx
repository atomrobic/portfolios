import React from 'react';
import { Rocket, Coins, View, Smartphone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const RoadmapStep = ({ quarter, year, icon: Icon, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col items-start w-full"
  >
    <div className="relative mb-6 md:mb-8">
      {/* Quarter Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: (index * 0.1) + 0.3 }}
        className="absolute -top-8 left-2 md:left-6 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center shadow-lg z-20"
      >
        {quarter}
        <div className="w-2 h-2 bg-white absolute -bottom-1 left-0 rotate-45"></div>
      </motion.div>

      {/* Hexagon Container */}
      <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 flex items-center justify-center relative z-10 hexagon shadow-purple-500/50 shadow-xl">
        <Icon className="text-white w-5 h-5 md:w-6 md:h-6" />
      </div>

      <span className="absolute top-14 md:top-16 left-0 md:left-2 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
        {year}
      </span>
    </div>

    <div className="space-y-2 md:space-y-3 w-full">
      <h3 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4 pl-2 border-l-2 border-purple-500 uppercase tracking-wider">
        {quarter} {year}
      </h3>
      {items.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="bg-white/5 backdrop-blur-md p-3 md:p-4 rounded-md border border-white/5 text-xs md:text-sm text-slate-400 hover:border-purple-500/30 transition-all duration-300"
        >
          {item}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const RoadmapUI = () => {
  const roadmapData = [
    { quarter: "2018–2020", year: "Education", icon: Rocket, items: ["Completed BA Degree – Kerala University", "Built foundation in HTML, CSS & JavaScript", "Started learning Python for web development"] },
    { quarter: "2023", year: "Internship", icon: View, items: ["Full Stack Developer Intern – Mashupstack (8 Months)", "Worked with Django & React", "Collaborated in Agile team environment", "Hands-on frontend–backend integration"] },
    { quarter: "2021–2022", year: "Freelance", icon: Coins, items: ["Freelance Developer at GG Net Solutions", "Built custom web apps for clients", "Developed REST APIs & responsive UIs", "Managed deployments & client requirements"] },
    { quarter: "2022–2024", year: "Full-Time", icon: Smartphone, items: ["Python Django Developer – iHub (2 Years)", "Built scalable Django backends", "Integrated REST APIs with frontend frameworks", "Optimized database queries & authentication"] },
    { quarter: "2024–Present", year: "Freelancer", icon: Star, items: ["Freelance Full Stack Developer", "Working on client & personal SaaS projects", "React, Django, FastAPI based systems", "Portfolio & automation tools development"] }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      <style>{`
        .hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
        .topographic-bg { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cpath d='M0 100 Q 100 50 200 100 T 400 100' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M0 200 Q 150 150 250 250 T 400 200' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M0 300 Q 100 350 200 300 T 400 350' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E"); }
      `}</style>

      <main className="relative w-full py-12 md:py-20 px-4 topographic-bg">
        {/* Background Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none select-none hidden lg:block"
        >
          <h2 className="text-[8rem] md:text-[12rem] font-black uppercase tracking-widest text-white">HISTORY</h2>
        </motion.div>

        <div className="max-w-[1400px] mx-auto relative">
          {/* Snaking Path SVG with Draw Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full opacity-30" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M100 150 C 250 150, 350 100, 500 150 S 750 450, 900 400 S 1150 350, 1300 450"
                stroke="white" strokeWidth="2" fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Mobile: Vertical Stack */}
            <div className="flex flex-col gap-8 md:gap-12 lg:hidden">
              {roadmapData.map((step, idx) => (
                <RoadmapStep key={idx} {...step} index={idx} />
              ))}
            </div>

            {/* Desktop: Grid with Offsets */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-8 xl:gap-12">
              <div className="pt-[80px]"><RoadmapStep {...roadmapData[0]} index={0} /></div>
              <div className="pt-[40px]"><RoadmapStep {...roadmapData[1]} index={1} /></div>
              <div className="pt-[280px]"><RoadmapStep {...roadmapData[2]} index={2} /></div>
              <div className="pt-[220px]"><RoadmapStep {...roadmapData[3]} index={3} /></div>
              <div className="pt-[140px]"><RoadmapStep {...roadmapData[4]} index={4} /></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoadmapUI;