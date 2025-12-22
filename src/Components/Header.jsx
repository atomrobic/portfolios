import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RotatingText from "./RotatingText";

const cn = (...classes) => classes.filter(Boolean).join(" ");

// Text Scramble Component
const TextScramble = ({ text, className, scrambleColor = "#22d3ee" }) => {
  const [displayText, setDisplayText] = React.useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  React.useEffect(() => {
    let frame = 0;
    const queue = [];
    const output = [];

    for (let i = 0; i < text.length; i++) {
      queue.push({
        from: chars[Math.floor(Math.random() * chars.length)],
        to: text[i],
        start: Math.floor(Math.random() * 40),
        end: Math.floor(Math.random() * 40) + 40 + i,
      });
    }

    const update = () => {
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output[i] = to;
        } else if (frame >= start) {
          output[i] = chars[Math.floor(Math.random() * chars.length)];
        } else {
          output[i] = "";
        }
      }
      setDisplayText(output.join(""));
      if (complete === queue.length) return;
      frame++;
      requestAnimationFrame(update);
    };

    update();
  }, [text, chars]);

  return <span className={className}>{displayText}</span>;
};

// Hero Highlight with animated gradient
const HeroHighlight = ({ children, className }) => {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent",
        className
      )}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      style={{ backgroundSize: "200% 200%" }}
    >
      {children}
    </motion.span>
  );
};

const HeroHighlightDemo = ({ name, highlightText }) => (
  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
    <span className="text-neutral-200">{name} </span>
    <HeroHighlight>{highlightText}</HeroHighlight>
  </div>
);

const Sparkles = ({ particleColor, particleDensity, minSize, maxSize, className }) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: Math.floor(particleDensity / 50) }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const shapeOptions = {
  circle: "rounded-full border-[3px] border-purple-500",
  squircle: "rounded-[30%] border-[3px] border-cyan-400",
  softSquare: "rounded-3xl border-[3px] border-blue-400",
  pill: "rounded-[100px] border-[3px] border-orange-400",
  modern: "rounded-[40px] border-[3px] border-green-400",
  gradient: "rounded-full border-[3px] border-transparent bg-gradient-to-r from-white to-gray-50 p-1"
};

// Real Icons for Skills
const SkillIcons = {
  Python: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.01 2.055h4.312v.617H5.92s-2.927-.332-2.927 4.282c0 4.288 2.555 4.445 2.555 4.445h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"/>
      <path d="M14.142 12.308H9.814s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.01-2.055h-4.312v-.617h6.049s2.927.332 2.927-4.282c0-4.288-2.555-4.445-2.555-4.445h-1.524v2.141s.083 2.554-2.513 2.554zm.056 5.74a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"/>
    </svg>
  ),
  Django: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
    </svg>
  ),
  React: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 18.177c-3.619 0-7.162-.705-9.577-1.876.998-2.022 2.741-4.792 5.301-7.553C10.48 5.858 13.569 3 15.978 3c1.047 0 1.921.227 2.605.655.685.428 1.152 1.052 1.417 1.822.265.77.32 1.623.16 2.5-.16.877-.537 1.747-1.104 2.55-.567.803-1.3 1.51-2.151 2.066-.851.556-1.795.945-2.776 1.138-.981.193-1.97.183-2.917-.03-.946-.212-1.822-.627-2.57-1.21"/>
      <path d="M12 18.177c3.619 0 7.162-.705 9.577-1.876-.998-2.022-2.741-4.792-5.301-7.553C13.52 5.858 10.431 3 8.022 3c-1.047 0-1.921.227-2.605.655-.685.428-1.152 1.052-1.417 1.822-.265.77-.32 1.623-.16 2.5.16.877.537 1.747 1.104 2.55.567.803 1.3 1.51 2.151 2.066.851.556 1.795.945 2.776 1.138.981.193 1.97.183 2.917-.03.946-.212 1.822-.627 2.57-1.21"/>
      <path d="M8.022 12c0 2.21 1.794 4 4.008 4 2.213 0 4.007-1.79 4.007-4 0-2.21-1.794-4-4.007-4-2.214 0-4.008 1.79-4.008 4z"/>
    </svg>
  ),
  "Next.js": () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-.93-.42-1.42-.42-.825 0-1.47.345-1.875.945-.45.6-.675 1.47-.585 2.355.135 1.14.96 1.785 2.055 2.205 1.005.375 1.35.81 1.35 1.365 0 .39-.15.69-.495.885-.375.195-.885.24-1.38.135-.42-.075-.915-.33-1.26-.75-.405-.45-1.08-1.215-2.295-1.215-.72 0-1.305.48-1.305 1.215 0 .75.72 1.215 1.395 1.215.495 0 .975-.195 1.38-.585.27-.27.48-.57.615-.885.42.765 1.125 1.215 2.055 1.215 1.125 0 1.965-.675 1.965-1.785 0-.75-.405-1.215-1.125-1.59zm-8.34-5.16c0-1.605-.915-2.475-2.475-2.475-1.125 0-2.055.6-2.415 1.215.045-.36.045-.75.045-1.125V6.75h-2.25v6.75c0 2.205 1.215 3.375 3.375 3.375 1.125 0 2.085-.36 2.715-1.05-.18-.54-.405-1.215-.405-2.04z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 12v12h24V0H0v12zm9.165 5.874c.66 0 1.155-.045 1.755-.135v-1.785c-.345.075-.66.105-1.05.105-.66 0-1.005-.27-1.005-.915V7.5H6.9v7.815c0 1.785.945 2.55 2.265 2.55zm6.57.126c2.205 0 3.48-.96 4.005-2.25l-1.785-.96c-.33.69-1.05 1.125-1.95 1.125-1.305 0-2.055-.81-2.055-2.205 0-1.44.75-2.25 2.055-2.25.9 0 1.62.435 1.95 1.125l1.785-.96c-.525-1.29-1.8-2.25-4.005-2.25-2.625 0-4.305 1.65-4.305 4.305 0 2.655 1.68 4.305 4.305 4.305z"/>
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
    </svg>
  )
};

export default function GridBackgroundDemo() {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [selectedShape, setSelectedShape] = React.useState("squircle");
  const [showVideo, setShowVideo] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);
  const [longPressProgress, setLongPressProgress] = React.useState(0);
  const { scrollYProgress } = useScroll();
  
  const longPressTimer = React.useRef(null);
  const progressInterval = React.useRef(null);

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yParticles = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleOrb = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacityOrb = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  const ORIGINAL_VIDEO_URL = "https://res.cloudinary.com/ddtpurhae/video/upload/v1763206747/grok-video-54cf5e9b-e1ad-483b-88d7-112c0dc97be8_eflax3.mp4";
  const FALLBACK_VIDEO_URL = "https://res.cloudinary.com/demo/video/upload/docs/models.mp4";
  const videoSrc = videoError ? FALLBACK_VIDEO_URL : ORIGINAL_VIDEO_URL;

  const handleVideoError = (e) => {
    console.error("Video failed to load:", e);
    setVideoError(true);
    setShowVideo(true);
  };

  React.useEffect(() => {
    if (showVideo && !videoError) {
      setVideoError(false);
    }
  }, [showVideo]);

  // Long press handlers
  const handlePressStart = () => {
    if (showVideo) return;
    
    longPressTimer.current = setTimeout(() => {
      setShowVideo(true);
      setVideoError(false);
      setLongPressProgress(0);
    }, 1000);

    let progress = 0;
    progressInterval.current = setInterval(() => {
      progress += 2;
      setLongPressProgress(progress);
      if (progress >= 100) clearInterval(progressInterval.current);
    }, 20);
  };

  const handlePressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
    setLongPressProgress(0);
  };

  React.useEffect(() => {
    return () => handlePressEnd();
  }, []);

  // Skills data with colors
  const skills = [
    { name: "Python", color: "from-yellow-400 to-yellow-600" },
    { name: "Django", color: "from-green-500 to-green-700" },
    { name: "React", color: "from-blue-400 to-cyan-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" }
  ];

  return (
    <>
      <div className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* PARALLAX GRID BACKGROUND */}
        <motion.div
          className={cn(
            "fixed inset-0",
            "[background-size:30px_30px] sm:[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
          style={{ y: yBg }}
        />

        {/* PARALLAX GLOWING ORB */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{ scale: scaleOrb, opacity: opacityOrb }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-cyan-500/20 via-purple-600/10 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* PARALLAX FLOATING PARTICLES */}
        <motion.div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ y: yParticles }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 max-w-7xl w-full">

            {/* IMAGE/VIDEO */}
            <motion.div
              style={{ y: yImage }}
              className="relative flex-shrink-0 w-full md:w-auto flex justify-center order-1 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="absolute inset-0 -z-10">
                <Sparkles particleColor="#ffffff" particleDensity={300} minSize={1} maxSize={2.5} />
              </motion.div>

              <motion.div className="relative group">
                {showVideo ? (
                  <motion.video
                    key={videoSrc}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    poster="https://res.cloudinary.com/ddtpurhae/image/upload/v1762834610/akhilappu123_kdmxoj.jpg"
                    className={cn(
                      "relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] object-cover transition-all duration-500",
                      shapeOptions[selectedShape],
                      "group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/40"
                    )}
                    onError={handleVideoError}
                    onContextMenu={(e) => e.preventDefault()}
                    whileHover={{ scale: 1.05 }}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support video.
                  </motion.video>
                ) : (
                  <div className="relative">
                    <div className="relative">
  {/* 🔵 Animated Loading Bar */}
  {imageLoading && (
    <div className="absolute inset-0 z-20 flex items-end justify-center rounded-[inherit] overflow-hidden">
      <div className="mb-4 w-4/5 h-1.5 bg-neutral-700/60 rounded-full overflow-hidden">
        <div className="loader-bar" />
      </div>
    </div>
  )}

  {/* 👤 PROFILE IMAGE */}
  <motion.img
    src="https://res.cloudinary.com/ddtpurhae/image/upload/v1763213216/akhilappu_dp_b4ysyx.png"
    alt="Akhil"
    onLoad={() => setImageLoading(false)}
    onError={() => setImageLoading(false)}
    className={cn(
      "relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] object-cover transition-all duration-500",
      shapeOptions[selectedShape],
      imageLoading ? "opacity-0" : "opacity-100",
      "group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/40"
    )}
    whileHover={{ scale: 1.05 }}
    onMouseDown={handlePressStart}
    onMouseUp={handlePressEnd}
    onMouseLeave={handlePressEnd}
    onTouchStart={handlePressStart}
    onTouchEnd={handlePressEnd}
    onTouchCancel={handlePressEnd}
    style={{ cursor: "pointer" }}
  />
</div>


                    
                    {longPressProgress > 0 && (
                      <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="none"
                            stroke="#22d3ee"
                            strokeWidth="4"
                            strokeDasharray={`${longPressProgress * 3.01} 301`}
                            className="transition-all duration-75"
                          />
                        </svg>
                      </motion.div>
                    )}
                    
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{ borderRadius: 'inherit' }}
                    >
                      <span className="text-white text-sm font-medium px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-400/50">
                        Hold to play video
                      </span>
                    </motion.div>
                  </div>
                )}

                <motion.div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              </motion.div>

              <button
                onClick={() => {
                  setShowVideo(!showVideo);
                  setVideoError(false);
                }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm border border-cyan-400/50 rounded-full text-cyan-400 text-sm hover:bg-cyan-400/20 transition-all duration-300"
              >
                {showVideo ? (videoError ? "Fallback Active" : "Show Image") : "Show Video"}
              </button>

              {videoError && showVideo && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-red-400 bg-red-900/20 px-2 py-1 rounded">
                  Using fallback video
                </div>
              )}
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
              style={{ y: yText }}
              className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl order-2 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <HeroHighlightDemo name="I am" highlightText="Akhil" />
              </motion.div>

              <motion.p
                className="text-neutral-300 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 font-light tracking-wide leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I'm a{" "}
                <TextScramble
                  text="Full Stack Developer"
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold"
                  scrambleColor="#22d3ee"
                />
                {" "}and passionate{" "}
                <TextScramble
                  text="Designer & Creator"
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
                  scrambleColor="#ec4899"
                />
                .
              </motion.p>

              {/* SKILLS ROW */}
              <motion.div
                className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="px-4 py-2 bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-full text-neutral-300 text-sm font-medium whitespace-nowrap">
                  Skills:
                </span>

                {skills.map((skill, i) => {
                  const IconComponent = SkillIcons[skill.name];
                  return (
                    <motion.div
                      key={skill.name}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 rounded-full text-neutral-300 text-xs font-medium transition-all duration-300 hover:scale-105",
                        `hover:bg-gradient-to-r ${skill.color} hover:text-white hover:border-transparent`
                      )}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 400 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {IconComponent && <IconComponent />}
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* SHAPE SELECTOR */}
              <motion.div
                className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <span className="text-neutral-400 text-xs sm:text-sm mr-2">Shape:</span>
                {Object.keys(shapeOptions).map((shape) => (
                  <button
                    key={shape}
                    onClick={() => setSelectedShape(shape)}
                    className={cn(
                      "px-3 py-1.5 text-xs rounded-full border capitalize transition-all",
                      selectedShape === shape
                        ? "bg-cyan-500/30 border-cyan-400 text-cyan-300"
                        : "bg-neutral-800/40 border-neutral-600 text-neutral-400 hover:border-neutral-500"
                    )}
                  >
                    {shape}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
      <style jsx>{`
  .loader-bar {
    height: 100%;
    width: 40%;
    background: linear-gradient(
      90deg,
      transparent,
      #22d3ee,
      #3b82f6,
      transparent
    );
    animation: loading-slide 1.2s infinite ease-in-out;
  }

  @keyframes loading-slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(250%);
    }
  }
`}</style>

    </>
  );
}