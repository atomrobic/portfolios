"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();
  
  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || "#ffffff",
              },
              move: {
                enable: true,
                speed: speed || 2,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "bounce",
                },
                attract: {
                  enable: true,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                }
              },
              number: {
                value: particleDensity || 120,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  enable: true,
                  speed: 3,
                  sync: false,
                },
              },
              wobble: {
                enable: true,
                distance: 5,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1
                }
              }
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

export const Sparkles = (props) => {
  return <SparklesCore {...props} />;
};

// Enhanced version with different sparkle effects
export const AdvancedSparklesCore = (props) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 1,
    maxSize = 4,
    speed = 2,
    particleColor = "#ffffff",
    particleDensity = 150,
    sparkleIntensity = 1,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background,
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "emitter",
                },
                onHover: {
                  enable: true,
                  mode: "trail",
                },
                resize: true,
              },
              modes: {
                emitter: {
                  position: {
                    x: 50,
                    y: 50
                  },
                  rate: {
                    delay: 0.1,
                    quantity: 10
                  },
                  size: {
                    width: 100,
                    height: 100,
                    mode: "percent"
                  }
                },
                trail: {
                  delay: 0.1,
                  quantity: 1,
                  particles: {
                    color: {
                      value: particleColor,
                    },
                    size: {
                      value: {
                        min: minSize,
                        max: maxSize,
                      },
                    },
                  },
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              color: {
                value: particleColor,
              },
              move: {
                enable: true,
                speed: speed,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: true,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                }
              },
              number: {
                value: particleDensity,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.8,
                },
                animation: {
                  enable: true,
                  speed: speed * 2,
                  sync: false,
                  startValue: "random",
                },
              },
              shape: {
                type: ["circle", "star", "polygon"],
                options: {
                  star: {
                    sides: 5,
                  },
                  polygon: {
                    sides: 6,
                  }
                }
              },
              size: {
                value: {
                  min: minSize,
                  max: maxSize,
                },
                animation: {
                  enable: true,
                  speed: 4,
                  sync: false,
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.08 * sparkleIntensity,
                  opacity: 1,
                  color: {
                    value: "#ffffff"
                  }
                }
              },
              roll: {
                darken: {
                  enable: true,
                  value: 25
                },
                enable: true,
                speed: {
                  min: 5,
                  max: 15
                }
              }
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

export const AdvancedSparkles = (props) => {
  return <AdvancedSparklesCore {...props} />;
};

// Simple floating dots version
export const FloatingParticlesCore = (props) => {
  const {
    className,
    particleColor = "#ffffff",
    density = 80,
    speed = 1,
  } = props;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {Array.from({ length: density }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-current"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: particleColor,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, Math.random() * 0.8 + 0.2, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2 + speed,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const FloatingParticles = (props) => {
  return <FloatingParticlesCore {...props} />;
};