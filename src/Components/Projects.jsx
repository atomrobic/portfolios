import React, { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // REAL PROJECTS FROM YOUR CV (B&W STYLE)
  const projects = [
    {
      id: 1,
      title: "Food Delivery Platform",
      company: "I Hub (UK) • Remote",
      time: "2024 – Present",
      tech: "Django • React • PostgreSQL",
      desc: "Engineered full-stack platform with payment integration, real-time order tracking, and admin dashboard. Deployed with CI/CD on Render and Vercel.",
      link: "https://github.com/atomrobic/food-delivery-django",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457a8c?w=800&h=600&fit=crop&grayscale=100",
    },
    {
      id: 2,
      title: "E-Learning Management System",
      company: "Mashupstack • Internship",
      time: "2023 – 2024",
      tech: "Django • PostgreSQL",
      desc: "Created LMS with course management and enrollment workflows. Designed responsive UI for students and instructors. Optimized performance through modular architecture.",
      link: "https://github.com/atomrobic/elearning-django",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&grayscale=100",
    },
    {
      id: 3,
      title: "Career Portal",
      company: "Freelance / I Hub",
      time: "2024",
      tech: "DRF • React • JWT",
      desc: "Built job portal with posting and application tracking. Implemented advanced search and filtering with JWT auth. Integrated DRF backend with modern React frontend.",
      link: "https://github.com/atomrobic/job-portal-drf",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a666f8?w=800&h=600&fit=crop&grayscale=100",
    },
    {
      id: 4,
      title: "Ticket Management System",
      company: "Personal Project",
      time: "2024",
      tech: "FastAPI • PostgreSQL",
      desc: "Developed high-performance FastAPI backend. Implemented role-based access for multiple user types. Created API documentation with Swagger UI.",
      link: "https://github.com/atomrobic/ticket-fastapi",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&grayscale=100",
    },
    {
      id: 5,
      title: "KSEB Pass Management Portal",
      company: "GG Net Solution • Freelance",
      time: "2024",
      tech: "Django • Admin",
      desc: "Government project for secure pass issuance and management. Built with Django Admin and custom workflows.",
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c2f2?w=800&h=600&fit=crop&grayscale=100",
    },
    {
      id: 6,
      title: "STL 3D Model Compressor",
      company: "Personal • C# Project",
      time: "2023",
      tech: "C# • WinForms",
      desc: "Built desktop tool for 3D model file compression. Implemented multithreaded binary file processing. Designed intuitive Windows Forms interface.",
      link: "https://github.com/atomrobic/stl-compressor-csharp",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop&grayscale=100",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = window.innerWidth < 768 ? 340 : 420;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* ────────────────────────  TITLE CARD  ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title-card mx-auto mt-12"
        >
          <h2 className="title-text">PROJECTS</h2>
          <div className="title-underline" />
        </motion.div>

        <div className="relative mt-16">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white border-2 border-black rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
          >
            <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-8 px-6 py-8 scroll-smooth cursor-grab active:cursor-grabbing scrollbar-hide snap-x snap-mandatory select-none"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px] snap-center"
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  perspective={1200}
                  scale={1.02}
                  transitionSpeed={1800}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glareColor="#000000"
                  glarePosition="all"
                  className="h-full"
                >
                  <div className="relative group rounded-lg overflow-hidden border-2 border-gray-300 shadow-xl h-[560px] transition-all duration-500 hover:shadow-2xl hover:border-white bg-gradient-to-b from-gray-900 to-black">
                    {/* B&W Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-6">
                      <div>
                        <p className="text-xs font-bold text-white tracking-widest uppercase">
                        </p>
                        <h3 className="text-2xl font-black mt-1 leading-tight text-center">
                          {project.title}
                        </h3>
                      </div>

                     <p className="project-desc text-sm text-white/80 leading-relaxed">
  {project.desc}
</p>


                      <div className="space-y-3 text-sm">
                          
                        <div className="text-xs font-mono text-gray-500">
                          {project.tech}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-sm rounded-md hover:bg-gray-200 transition-all duration-300 group"
                        >
                          View on GitHub
                          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white border-2 border-black rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
          >
            <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-400 text-sm font-medium"
        >
          Swipe to explore more projects
        </motion.p>
      </div>

      {/* ────────────────────────  STYLES  ──────────────────────── */}
      <style jsx>{`
      .project-desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;       /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
}

.project-desc::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;                 /* fade height */
  width: 100%;
  background: linear-gradient(to bottom, transparent, #000); /* black fade */
}
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* TITLE CARD */
        .title-card {
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 1rem;
          padding: 1.5rem 3rem;
          max-width: fit-content;
          box-shadow: 
            0 8px 32px rgba(0,0,0,.2),
            inset 0 0 0 1px rgba(255,255,255,.05);
          transition: all .4s ease;
        }
        .title-card:hover {
          background: rgba(255,255,255,.12);
          transform: translateY(-4px);
          box-shadow: 
            0 12px 40px rgba(0,0,0,.25),
            inset 0 0 0 1px rgba(255,255,255,.08);
        }
        .title-text {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          text-align: center;
          background: linear-gradient(135deg, #e0e0e0 0%, #ffffff 50%, #b0b0b0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0;
          line-height: 1;
        }
        .title-underline {
          height: 4px;
          width: 80px;
          background: linear-gradient(90deg, #22d3ee, #3b82f6, #a855f7);
          border-radius: 2px;
          margin: 0.75rem auto 0;
        }
      `}</style>
    </div>
  );
};

export default Projects;