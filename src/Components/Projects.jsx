import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Food Delivery \n App",
    tech: ["Django", "PostgreSQL", "Tailwind CSS"],
    desc: "A full-stack food delivery platform with JWT authentication, restaurant listings, menu management, secure payment gateway, real-time order tracking, and an admin dashboard.",
    github: "https://github.com/atomrobic/food-delivery-app",
    cover:
      "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "OTT Platform - Movie Zone",
    tech: ["Django REST Framework", "React.js", "PostgreSQL"],
    desc: "A movie streaming application with role-based access control, watch history, CSRF protection, and performance optimization using pagination and caching.",
    github: "https://github.com/atomrobic/movie-zone",
    cover:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "E-Learning Platform",
    tech: ["Django", "React.js", "Bootstrap"],
    desc: "An online learning platform with backend APIs for courses, chapters, and enrollments, secure authentication, and a responsive interface for students and instructors.",
    github: "https://github.com/atomrobic/e-learning-platform",
    cover:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Career Site (Job Portal)",
    tech: ["Django REST Framework", "MySQL", "React.js"],
    desc: "A job portal with job posting, applications, blogs, JWT authentication, user profile management, and search/filter functionality.",
    github: "https://github.com/atomrobic/career-site",
    cover:
      "https://images.unsplash.com/photo-1556155099-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "URL Shortener",
    tech: ["React", "JavaScript", "Bootstrap"],
    desc: "A URL shortening web application built with React, featuring clean UI, responsive design, and simple redirection logic.",
    github: "https://github.com/atomrobic/url-shortener",
    cover:
      "https://images.unsplash.com/photo-1555066931-bf19c0fd1085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Weight Management",
    tech: ["Django", "Python", "Bootstrap"],
    desc: "A health-focused web app to track weight progress, built using Django with secure forms and user authentication.",
    github: "https://github.com/atomrobic/weight-management-app",
    cover:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const MAX_CHARS = 180;

const MovieApp = () => {
  const [cards, setCards] = useState(PROJECT_DATA);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const autoPlayTimer = useRef(null);

  const topCard = cards[0];

  // Rotate cards
  const nextCard = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const swipedCard = newCards.shift();
      return [...newCards, swipedCard];
    });
  };

  // Reset read more when card changes
  useEffect(() => {
    setIsExpanded(false);
  }, [topCard.id]);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(() => {
        nextCard();
      }, 4000);
    }
    return () => clearInterval(autoPlayTimer.current);
  }, [isAutoPlaying, cards]);

  const handleDragStart = () => {
    setIsAutoPlaying(false);
  };

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
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tight">Selected Work</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* LEFT SIDE - Card Stack */}
          <div className="relative h-[400px] md:h-[550px] lg:sticky lg:top-20">
            {cards.map((card, index) => {
              const isTop = index === 0;
              if (index > 2) return null;

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
                        <span key={i} className="text-xs px-2 md:px-3 py-1 md:py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/20 font-light">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-3xl font-light tracking-tight whitespace-pre-line">{card.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE - Details (Hidden on Mobile) */}
          <div className="hidden lg:block space-y-12 pt-8">
            <div>
              <div className="inline-block mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                  0{cards.findIndex(c => c.id === topCard.id) + 1} / Featured
                </span>
              </div>

              <h2 className="text-5xl font-light tracking-tight mb-8 leading-tight whitespace-pre-line">
                {topCard.title}
              </h2>

              {/* Description */}
              <div className="space-y-4 mb-10">
                <p className="text-base text-gray-400 leading-relaxed font-light">
                  {getDisplayText(topCard.desc)}
                </p>
                {topCard.desc.length > MAX_CHARS && (
                  <button
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="text-sm text-white hover:text-gray-300 transition-colors underline underline-offset-4 font-light"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mb-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-light">
                  Tech Stack
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {topCard.tech.map((t) => (
                    <span key={t} className="px-4 py-2.5 bg-white/5 border border-white/10 rounded text-sm font-light">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={topCard.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded hover:bg-gray-200 transition-all font-light text-sm tracking-wide group"
              >
                <span>View Repository</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 pt-8">
              {cards.slice(0, 6).map((card, i) => (
                <div
                  key={card.id}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${i === 0 ? 'bg-white' : 'bg-white/20'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Details - Compact */}
          <div className="lg:hidden space-y-4">
            <div className="inline-block mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                0{cards.findIndex(c => c.id === topCard.id) + 1} / Featured
              </span>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {getDisplayText(topCard.desc)}
              </p>
              {topCard.desc.length > MAX_CHARS && (
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="text-xs text-white hover:text-gray-300 transition-colors underline underline-offset-4 font-light"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-light">
                Tech Stack
              </h3>
              <div className="flex gap-2 flex-wrap">
                {topCard.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-light">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={topCard.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-all font-light text-sm tracking-wide group"
            >
              <span>View Repository</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Progress Indicator */}
            <div className="flex gap-2 pt-4">
              {cards.slice(0, 6).map((card, i) => (
                <div
                  key={card.id}
                  className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${i === 0 ? 'bg-white' : 'bg-white/20'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieApp;
