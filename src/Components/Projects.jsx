import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Food Delivery Platform",
    tech: ["Django", "Django template", "PostgreSQL"],
    desc: "Built a full-stack food delivery system with JWT authentication, secure payments, real-time order tracking, and an admin dashboard. Deployed using CI/CD on Render and Vercel.",
    outcome: "Improved API response time by ~40%.",
    github: "https://github.com/atomrobic/food-delivery-app",
    demo: null,
    cover: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "OTT Platform – Movie Zone",
    tech: ["Django REST Framework", "React.js", "PostgreSQL"],
    desc: "Developed a role-based movie streaming platform with watch history, pagination, caching, and CSRF protection for secure content delivery.",
    outcome: "Handled 1K+ records smoothly with optimized queries.",
    github: "https://github.com/atomrobic/movie-zone",
    demo: null,
    cover: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "E-Learning Management System",
    tech: ["Django", "PostgreSQL", "React.js"],
    desc: "Created an LMS with course management, enrollment workflows, and a responsive UI for students and instructors.",
    outcome: "Modular architecture improved maintainability and load time.",
    github: "https://github.com/atomrobic/e-learning-platform",
    demo: null,
    cover: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Career Portal",
    tech: ["Django REST Framework", "React.js", "MySQL"],
    desc: "Built a job portal with posting, applications, JWT auth, and advanced search & filtering.",
    outcome: "Reduced search response time by 30%.",
    github: "https://github.com/atomrobic/career-site",
    demo: null,
    cover: "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Ticket Management System",
    tech: ["FastAPI", "PostgreSQL"],
    desc: "Developed a high-performance FastAPI backend with role-based access control and Swagger API documentation.",
    outcome: "Improved API throughput for concurrent users.",
    github: null,
    demo: null,
    cover: "https://images.unsplash.com/photo-1581091012184-5c7f85f0b2d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "STL Compression Tool",
    tech: ["C#", "Windows Forms"],
    desc: "Built a desktop tool for 3D model file compression using multithreaded binary processing.",
    outcome: "Reduced STL file sizes by up to 45%.",
    github: null,
    demo: null,
    cover: "https://www.crealitycloud.com/es/model-detail/dragon-skull-hair-pin",
  },
];

const MAX_CHARS = 180;

export default function MovieApp() {
  const [cards, setCards] = useState(PROJECT_DATA);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const autoPlayTimer = useRef(null);

  const topCard = cards[0];

  const nextCard = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const swipedCard = newCards.shift();
      return [...newCards, swipedCard];
    });
  };

  useEffect(() => {
    setIsExpanded(false);
  }, [topCard.id]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(nextCard, 4000);
    }
    return () => clearInterval(autoPlayTimer.current);
  }, [isAutoPlaying]);

  const handleDragStart = () => setIsAutoPlaying(false);

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      nextCard();
    }
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  const getDisplayText = (text) => {
    if (isExpanded || text.length <= MAX_CHARS) return text;
    return text.slice(0, MAX_CHARS) + "...";
  };

  return (
    <div id="projects" className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-20">

        {/* Header */}
        <div className="mb-8 md:mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-light">
            Projects
          </h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tight">
            Selected Work
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-start">

          {/* LEFT — Card Stack */}
          <div className="relative h-[400px] md:h-[550px] lg:sticky lg:top-20">
            {cards.map((card, index) => {
              if (index > 2) return null;
              const isTop = index === 0;

              return (
                <motion.div
                  key={card.id}
                  drag={isTop}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  initial={{ scale: 1 - index * 0.04, y: index * 24, opacity: 1 - index * 0.25 }}
                  animate={{ scale: 1 - index * 0.04, y: index * 24, opacity: 1 - index * 0.25 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden border border-white/10 cursor-grab active:cursor-grabbing"
                  style={{
                    zIndex: 10 - index,
                    backgroundImage: `url(${card.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <div className="flex gap-2 mb-3 md:mb-4">
                      {card.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/20 font-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-3xl font-light tracking-tight whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT — Details */}
          <div className="hidden lg:block space-y-12 pt-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                0{PROJECT_DATA.length - cards.length + 1} / Featured
              </span>

              <h2 className="text-5xl font-light tracking-tight mb-8 leading-tight whitespace-pre-line">
                {topCard.title}
              </h2>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <p className="text-base text-gray-400 leading-relaxed font-light line-clamp-2">
                  {topCard.desc}
                </p>
                {topCard.desc.length > MAX_CHARS && (
                  <button
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="text-sm text-white hover:text-gray-300 transition underline underline-offset-4 font-light"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Outcome */}
              {topCard.outcome && (
                <div className="mb-10">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-light">
                    Outcome
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {topCard.outcome}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-light">
                  Tech Stack
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {topCard.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2.5 bg-white/5 border border-white/10 rounded text-sm font-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 flex-wrap">
                {topCard.github && (
                  <a
                    href={topCard.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded hover:bg-gray-200 transition-all font-light text-sm tracking-wide group"
                  >
                    <span>View Repository</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}

                {topCard.demo && (
                  <a
                    href={topCard.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded hover:bg-white/10 transition-all font-light text-sm tracking-wide group"
                  >
                    <span>Live Demo</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Progress */}
            <div className="flex gap-2 pt-8">
              {cards.slice(0, 6).map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${i === 0 ? "bg-white" : "bg-white/20"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
              0{PROJECT_DATA.length - cards.length + 1} / Featured
            </span>

            <p className="text-sm text-gray-400 leading-relaxed font-light line-clamp-2">
              {topCard.desc}
            </p>

            {topCard.desc.length > MAX_CHARS && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="text-xs text-white underline underline-offset-4 font-light"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}

            <div className="flex gap-2 flex-wrap">
              {topCard.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-light"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {topCard.github && (
                <a
                  href={topCard.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black rounded text-sm font-light"
                >
                  Repo
                </a>
              )}
              {topCard.demo && (
                <a
                  href={topCard.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 rounded text-sm font-light"
                >
                  Demo
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
