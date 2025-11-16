import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const leftItems = timelineRef.current.querySelectorAll('.direction-l');
    const rightItems = timelineRef.current.querySelectorAll('.direction-r');

    // Set initial positions - left items start from left, right items from right
    gsap.set(leftItems, { 
      x: -100, 
      opacity: 0,
      rotationY: -10 
    });
    gsap.set(rightItems, { 
      x: 100, 
      opacity: 0,
      rotationY: 10 
    });

    // Animate left items to center
    gsap.to(leftItems, {
      x: 0,
      opacity: 1,
      rotationY: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 70%",
        end: "bottom 20%",
      },
    });

    // Animate right items to center
    gsap.to(rightItems, {
      x: 0,
      opacity: 1,
      rotationY: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 70%",
        end: "bottom 20%",
      },
    });

    // Enhanced timeline line animation
    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      }
    );

    // Animate timeline dots with scale effect
    gsap.to(".timeline-dot", {
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add hover animations for cards
    const allCards = timelineRef.current.querySelectorAll('.direction-l, .direction-r');
    
    allCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

  }, []);

  return (
    <>
      <style>{`
        .timeline-container {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
         
          pointer-events: none;
        }

        .timeline-title {
          text-align: center;
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3c4141ff 0%, #b7bfcdff 50%, #444247ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 80px;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .timeline-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 10%;
          width: 80%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #22d3ee, #3b82f6, #a855f7, transparent);
          border-radius: 2px;
        }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            #454e4fff 15%, 
            #687272ff 50%, 
            #887a96ff 85%, 
            transparent 100%);
          transform: translateX(-50%);
          border-radius: 10px;
          box-shadow: 
            0 0 20px rgba(34, 211, 238, 0.6),
            0 0 40px rgba(138, 152, 176, 0.4),
            inset 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 80px;
          display: flex;
          align-items: center;
          min-height: 200px;
        }

        .direction-r,
        .direction-l {
          position: relative;
          width: 45%;
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(69, 86, 94, 0.7);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .direction-r {
          margin-left: auto;
          margin-right: 10px;
          transform-origin: right center;
        }

        .direction-l {
          margin-right: auto;
          margin-left: 10px;
          transform-origin: left center;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #656969ff, #383a3dff);
          border: 4px solid #0f172a;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          box-shadow: 
            0 0 0 6px rgba(34, 211, 238, 0.2),
            0 0 20px rgba(83, 88, 88, 0.06);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot {
          transform: translate(-50%, -50%) scale(1.2);
          box-shadow: 
            0 0 0 8px rgba(73, 82, 84, 0.3),
            0 0 30px rgba(79, 92, 94, 0.8);
        }

        .flag-wrapper {
          margin-bottom: 20px;
        }

        .flag {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #eef4f5ff 0%, #292b30ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .time {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #edfafcff;
          background: rgba(34, 211, 238, 0.1);
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(250, 253, 253, 0.86);
          backdrop-filter: blur(10px);
          letter-spacing: 0.5px;
        }

        .desc {
          color: #e2e8f0;
          line-height: 1.7;
          font-size: 1rem;
        }

        .desc br {
          margin-bottom: 8px;
        }

        /* Connection lines from dots to cards */
        .direction-l::before {
          content: '';
          position: absolute;
          right: -20px;
          top: 50%;
          width: 20px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #404444ff);
          transform: translateY(-50%);
        }

        .direction-r::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          width: 20px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #22d3ee);
          transform: translateY(-50%);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .timeline-container {
            padding: 60px 15px;
          }

          .timeline-title {
            font-size: 2.5rem;
            margin-bottom: 60px;
          }

          .timeline-line {
            left: 30px;
          }

          .timeline-dot {
            left: 30px;
            transform: translateY(-50%) scale(0);
          }

          .timeline-item {
            min-height: auto;
            margin-bottom: 60px;
          }

          .direction-r,
          .direction-l {
            width: calc(100% - 70px);
            margin-left: 70px !important;
            margin-right: 0 !important;
            text-align: left;
            padding: 25px;
          }

          .direction-l::before,
          .direction-r::before {
            left: -20px;
            right: auto;
            width: 20px;
            background: linear-gradient(90deg, transparent, #e1edefff);
          }

          .flag {
            font-size: 1.2rem;
          }

          .desc {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .timeline-title {
            font-size: 2rem;
          }

        /* ──────────────────────────────────────────────────────────────
   Transparent Timeline Cards (direction-r & direction-l)
   ────────────────────────────────────────────────────────────── */
.direction-r,
.direction-l {
  padding: 20px;
  margin-left: 50px !important;
  width: calc(100% - 50px);
 
  /* 1. Transparent background */
  background-color: transparent !important;
 
  /* 2. Remove backdrop / overlay */
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
 
  /* 3. Remove shadows, keep clean */
  box-shadow: none !important;
  outline: none !important;
 
  /* 4. ADD BORDER with custom color */
  border: 2px solid #33373aff !important; /* Change #3498db to your desired color */
 
  /* 5. Optional: Rounded corners */
  border-radius: 12px;
 
  /* 6. Keep text fully readable */
  color: inherit;
}

/* ──────────────────────────────────────────────────────────────
   Handle pseudo-elements (lines, connectors) – make them visible if needed
   ────────────────────────────────────────────────────────────── */
.direction-r::before,
.direction-l::before,
.direction-r::after,
.direction-l::after {
  background: transparent !important;
  border-color: #cedee65a !important; /* Match border color for connectors */
  border-width: 2px;
}

          .timeline-line {
            left: 20px;
          }

          .timeline-dot {
            left: 20px;
            width: 20px;
            height: 20px;
          }

          .direction-l::before,
          .direction-r::before {
            left: -15px;
            width: 15px;
          }
        }

        /* Clear floats */
        .timeline::after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>

      <div className="timeline-container">
        <h2 className="timeline-title">My Journey</h2>

        <div className="timeline">
          <div className="timeline-line"></div>

          <ul ref={timelineRef}>
            {/* BACHELOR'S DEGREE - 2024-2025 (CURRENT) */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">Bachelor's Degree — Kerala University</span>
                  <span className="time">2024 – 2025</span>
                </div>
                <div className="desc">
                  Studying computer science fundamentals and programming concepts.
                </div>
              </div>
            </li>

            {/* FREELANCER - 2024-PRESENT */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Freelancer — Full Stack Developer</span>
                  <span className="time">2024 – Present</span>
                </div>
                <div className="desc">
                  Building full-stack applications for global clients using Django, React,
                  REST APIs, Tailwind, and PostgreSQL. Responsible for architecture,
                  backend systems, UI, deployment, and client delivery.
                </div>
              </div>
            </li>

            {/* I HUB - 2024-PRESENT */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">I Hub — Python Django Developer</span>
                  <span className="time">2024 – Present</span>
                </div>
                <div className="desc">
                  Developed scalable Django backends, optimized authentication,
                  improved database performance, and delivered client applications.
                </div>
              </div>
            </li>

            {/* PROJECT EXPERIENCE - 2024 */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Full Stack Project Experience</span>
                  <span className="time">2024</span>
                </div>
                <div className="desc">
                  • Food Delivery App — JWT, Payments, SEO<br/>
                  • OTT Movie Zone — Streaming, Watch History<br/>
                  • E-Learning Platform — Courses, Students UI<br/>
                  • Job Portal — Profile, Job Filters, Blogs
                </div>
              </div>
            </li>

            {/* MASHUPSTACK - 2023-2024 */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">Mashupstack — Full Stack Intern</span>
                  <span className="time">2023 – 2024</span>
                </div>
                <div className="desc">
                  Worked on real projects like URL shortener, weight management system,
                  and API apps. Learned Django, React, Git, and Agile workflow.
                </div>
              </div>
            </li>

            {/* HIGHER SECONDARY - 2018-2020 */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Higher Secondary — Kerala</span>
                  <span className="time">2018 – 2020</span>
                </div>
                <div className="desc">
                  Completed higher secondary with focus on mathematics and science.
                </div>
              </div>
            </li>

            {/* HIGH SCHOOL - 2016-2017 */}
            <li className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">High School — G HSS Yeroor</span>
                  <span className="time">2016 – 2017</span>
                </div>
                <div className="desc">
                  Built early skills in logic, analytical thinking, and problem-solving.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Timeline;