import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight, ExternalLink, Calendar, Code, CheckCircle2, Briefcase } from 'lucide-react';

const TerminalExperience = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [selectedExp, setSelectedExp] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const loadingLogs = [
    ">>> import sys, os",
    ">>> from career.experience import WorkHistory",
    ">>> db_connection = WorkHistory.connect()",
    ">>> experiences = db_connection.fetch_all()",
    "SUCCESS: Retrieved 3 work experience records"
  ];

  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Python Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      progress: 95,
      description: "Architecting scalable backend systems using Django, FastAPI, and PostgreSQL. Building RESTful APIs and microservices serving millions of users.",
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "Redis", "Celery"],
      achievements: [
        "Optimized database queries reducing response time by 65%",
        "Built async task processing with Celery handling 100K+ jobs/day",
        "Led backend team of 5 developers"
      ],
      link: "https://github.com/atomrobic"
    },
    {
      year: "2021 - 2023",
      role: "Python Backend Developer",
      company: "Creative Agency",
      location: "Remote",
      progress: 85,
      description: "Developed REST APIs using Django REST Framework. Implemented data pipelines with Pandas and automated workflows with Python scripts.",
      technologies: ["Django", "Django REST", "MySQL", "Pandas", "NumPy", "pytest"],
      achievements: [
        "Created 20+ RESTful endpoints for client projects",
        "Automated data processing reducing manual work by 80%",
        "Achieved 95% test coverage with pytest"
      ],
      link: "https://github.com/atomrobic"
    },
    {
      year: "2019 - 2021",
      role: "Junior Python Developer",
      company: "Web Startups",
      location: "Bangalore, IN",
      progress: 70,
      description: "Built web applications with Flask and Django. Worked on data analysis scripts and automation tools using Python.",
      technologies: ["Python", "Flask", "Django", "SQLite", "BeautifulSoup", "Requests"],
      achievements: [
        "Delivered 15+ Flask applications",
        "Created web scraping tools for data collection",
        "Developed internal automation scripts"
      ],
      link: "https://github.com/atomrobic"
    },
  ];

  useEffect(() => {
    if (isLoading && loadingStep < loadingLogs.length) {
      const timer = setTimeout(() => {
        setLoadingStep(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (loadingStep === loadingLogs.length) {
      setIsLoading(false);
    }
  }, [isLoading, loadingStep]);

  useEffect(() => {
    if (!isLoading && visibleItems < experiences.length) {
      const timer = setTimeout(() => setVisibleItems(visibleItems + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [visibleItems, isLoading]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    /* REMOVED bg-black FROM HERE */
    <div className="bg-transparent text-gray-300 font-mono min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* TERMINAL CONTAINER: REMOVED bg-zinc-9 and bg-black/10 */}
        <div className="relative border border-white/20 rounded-xl overflow-hidden backdrop-blur-md bg-transparent shadow-2xl">

          {/* BACKGROUND LAYER: FIXED - removed bg-black/10 seen in your dev tools */}
          <div className="absolute inset-0 bg-transparent -z-10"></div>

          {/* Terminal Header */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <Terminal size={16} className="text-blue-400/60" />
              <span className="text-xs text-gray-400/60">python3 experience.py</span>
            </div>
            <div className="text-xs text-gray-500/50">{formatTime(currentTime)}</div>
          </div>

          {/* Terminal Body */}
          <div className="relative z-10 p-6 md:p-8 min-h-[600px] bg-transparent">
            {/* Version Info */}
            <pre className="text-[10px] md:text-xs text-gray-500/50 mb-6 italic">
              {`Python 3.11.5 (main, Jan 2024) [GCC 11.4.0] on linux`}
            </pre>

            {/* Loading Logs */}
            <div className="mb-8 space-y-2">
              {loadingLogs.slice(0, loadingStep).map((log, i) => (
                <div key={i} className="flex items-start gap-3 text-xs md:text-sm">
                  {i === loadingLogs.length - 1 ? (
                    <CheckCircle2 size={16} className="text-green-500/60 mt-0.5 flex-shrink-0" />
                  ) : (
                    <span className="text-blue-400/60 flex-shrink-0 animate-pulse">››</span>
                  )}
                  <span className={i === loadingLogs.length - 1 ? "text-green-400/70 font-semibold" : "text-gray-400/60"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>

            {!isLoading && (
              <div className="space-y-8 animate-in fade-in duration-700">
                <div className="border-t border-b border-white/10 py-4 bg-transparent">
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <span className="text-gray-500">#</span>
                    <span className="text-purple-400/80">def</span>
                    <span className="text-yellow-400/80">display_experience</span>
                    <span className="text-gray-400">():</span>
                  </div>
                </div>

                {/* Experience Cards */}
                <div className="space-y-6 md:ml-4">
                  {experiences.slice(0, visibleItems).map((exp, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-lg p-4 md:p-6 bg-transparent hover:border-white/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase size={18} className="text-blue-400/60" />
                            <h3 className="text-white font-bold text-base md:text-lg">{exp.role}</h3>
                          </div>
                          <p className="text-blue-400/80 text-sm font-semibold">{exp.company}</p>
                        </div>
                        <button
                          onClick={() => setSelectedExp(selectedExp === index ? null : index)}
                          className="p-1 rounded border border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <ChevronRight className={`transition-transform ${selectedExp === index ? 'rotate-90' : ''}`} size={16} />
                        </button>
                      </div>

                      <p className="text-sm text-gray-400/90 leading-relaxed">{exp.description}</p>

                      {selectedExp === index && (
                        <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top duration-300">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 text-[10px] border border-blue-400/20 text-blue-300/60 rounded bg-transparent">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a href={exp.link} target="_blank" rel="noreferrer" className="text-xs text-blue-400 flex items-center gap-1">
                            <ExternalLink size={12} /> View Project
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalExperience;