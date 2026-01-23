import React, { useEffect, useRef } from "react";

export default function HeroHeader() {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const leftElement = leftTextRef.current;
      const rightElement = rightTextRef.current;

      if (window.innerWidth > 1024 && leftElement && rightElement) {
        const translate = Math.min(scrollY * 0.2, 100);
        leftElement.style.transform = `translateX(-${translate}px)`;
        rightElement.style.transform = `translateX(${translate}px)`;
      } else if (leftElement && rightElement) {
        leftElement.style.transform = `translateX(0px)`;
        rightElement.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative z-10 mt-5 xl:mt-1 md:mt-2 flex w-full max-w-[1400px] mx-auto flex-col overflow-hidden rounded-[1.5rem] bg-[#1a1a1a] shadow-2xl ring-white/10 lg:aspect-[16/9] min-h-[90vh] lg:min-h-[800px]">

      {/* 1. TOP LEFT RIBBON - PORTFOLIO '26 */}
      <div className="absolute -top-1 -left-1 z-30 overflow-hidden w-32 h-32 pointer-events-none">
        <div className="absolute top-7 -left-8 w-40 rotate-[-45deg] bg-white text-[#1a1a1a] text-[10px] font-bold py-1 text-center shadow-lg uppercase tracking-widest">
          Portfolio '26
        </div>
      </div>

      {/* 2. TOP RIGHT STATUS BADGE - ACTIVE STATUS */}
      <div className="absolute top-6 right-8 z-30 hidden lg:flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase"></span>
          <span className="text-sm font-medium text-white/90">Kollam,Kerala,India</span>
        </div>
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-grain pointer-events-none opacity-40" />

      <div className="relative z-10 flex flex-1 flex-col lg:grid lg:grid-cols-12 h-full px-6 md:px-12 py-10 items-center justify-center">

        {/* LEFT TEXT */}
        <div className="order-2 lg:order-1 col-span-12 lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right w-full">
          <span className="lg:inline-block text-xs font-bold uppercase tracking-[0.4em] text-white/60 mb-2">
            AKHIL-A
          </span>
          <div
            ref={leftTextRef}
            className="transition-transform duration-100 ease-linear will-change-transform lg:-mr-16 z-20"
          >
            <h1 className="text-[3.2rem] md:text-[6rem] lg:text-[7rem] xl:text-[7rem] font-black leading-[0.8] text-white tracking-tighter uppercase">
              PYTHON
            </h1>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="order-1 lg:order-2 col-span-12 lg:col-span-4 flex items-center justify-center relative w-full mb-8 lg:mb-0">
          <div className="relative aspect-[4/5] w-full max-w-[240px] md:max-w-[340px] lg:h-[85%] lg:w-full lg:max-w-[400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-[6px] border-[#2a2a2a] bg-[#2a2a2a] shadow-3xl group z-10">
            <div
              className="h-full w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/ddtpurhae/image/upload/v1769011466/ChatGPT_Image_Jan_21_2026_09_33_04_PM_wjncr8.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="order-3 col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full mt-2 lg:mt-0">
          <div
            ref={rightTextRef}
            className="transition-transform duration-100 ease-linear will-change-transform lg:-ml-16 z-20"
          >
            <h1 className="text-[3.2rem] md:text-[6rem] lg:text-[7rem] xl:text-[6rem] font-black leading-[0.8] text-white tracking-tighter uppercase">
              ENGINEER
            </h1>
          </div>

          <p className="text-gray-300 text-sm md:text-base max-w-[320px] mt-6 leading-relaxed font-medium">
            I build scalable Django & FastAPI systems for real-world products.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Open for Freelance & Remote Roles
          </div>
        </div>
      </div>
    </main>
  );
}