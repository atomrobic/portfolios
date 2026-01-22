import React, { useEffect, useRef } from "react";

export default function HeroHeader() {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const leftElement = leftTextRef.current;
      const rightElement = rightTextRef.current;

      // Parallax only for Desktop (wider than 1024px for grid layout)
      if (window.innerWidth > 1024 && leftElement && rightElement) {
        const leftTranslateX = Math.min(scrollY * 0.2, 100);
        leftElement.style.transform = `translateX(-${leftTranslateX}px)`;

        const rightTranslateX = Math.min(scrollY * 0.2, 100);
        rightElement.style.transform = `translateX(${rightTranslateX}px)`;
      } else if (leftElement && rightElement) {
        // Reset transform for mobile to ensure text stays centered
        leftElement.style.transform = `translateX(0px)`;
        rightElement.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative z-10 mt-5 xl:mt-1 md:mt-2 flex w-full max-w-[1400px] mx-auto flex-col overflow-hidden rounded-[1.5rem] bg-[#1a1a1] shadow-2xl  ring-white/10 lg:aspect-[16/9] min-h-[90vh] lg:min-h-[800px]">

      <div className="absolute inset-0 z-0 bg-grain pointer-events-none opacity-40" />

      <div className="relative z-10 flex flex-1 flex-col lg:grid lg:grid-cols-12 h-full px-6 md:px-12 py-10 items-center justify-center">

        {/* CENTER IMAGE — Moved to top on mobile for better flow */}
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-4 flex items-center justify-center relative w-full mb-8 lg:mb-0">
          <div className="relative aspect-[4/5] w-full max-w-[240px] md:max-w-[340px] lg:h-[85%] lg:w-full lg:max-w-[400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-[6px] border-[#2a2a2a] bg-[#2a2a2a] shadow-3xl group z-10">
            <div
              className="h-full w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
              style={{
                backgroundImage: "url('https://res.cloudinary.com/ddtpurhae/image/upload/v1769011466/ChatGPT_Image_Jan_21_2026_09_33_04_PM_wjncr8.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 z-30">
            </div>
          </div>
        </div>

        {/* LEFT — PYTHON */}
        <div className="order-2 lg:order-1 col-span-12 lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right w-full">
          <span className="hidden lg:inline-block text-[20px] md:text-xs font-bold uppercase tracking-[0.4em] text-white mb-2">
            AKHIL-A
          </span>
          <div
            ref={leftTextRef}
            className="transition-transform duration-100 ease-linear will-change-transform lg:-mr-16 z-20"
          >
            <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7rem] font-black leading-[0.8] text-white tracking-tighter uppercase">
              PYTHON
            </h1>
          </div>
        </div>

        {/* RIGHT — DEVELOPER */}
        <div className="order-3 col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full mt-2 lg:mt-0">
          <div
            ref={rightTextRef}
            className="transition-transform duration-100 ease-linear will-change-transform lg:-ml-16 z-20"
          >
            <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[6rem] font-black leading-[0.8] text-white tracking-tighter uppercase">
              DEVELOPER
            </h1>
          </div>
          <p className="text-gray-400 text-xs md:text-base max-w-[260px] mt-6 leading-relaxed font-medium">
            I'm a Full Stack Developer and <br className="hidden md:block" />
            video editor
          </p>
        </div>

      </div>
    </main >
  );
}