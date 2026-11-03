
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  Monitor,
  ExternalLink,
  Sparkles,
  Database,
  Server,
  Image as ImageIcon,
} from "lucide-react";

const projects = [
  {
    title: "First Web",
    category: "Frontend Development",
    description:
      "My first web development project, showcasing my foundational frontend development skills and web design practice.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/first-web.jpeg",
    link: "https://habib-45.github.io/first-web/",
  },
  {
    title: "React Project",
    category: "Web Application",
    description:
      "A React and TypeScript based web application built with Vite as part of my frontend development journey.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    image: "/images/assignment-5.jpeg",
    link: "https://assignment-5-habib.netlify.app/",
  },
  {
    title: "FitLog",
    category: "Workout & Fitness Application",
    description:
      "A fitness companion where users can explore workouts, select exercises, build daily workout plans, and track their fitness activities.",
    tech: ["Next.js", "React", "Tailwind CSS", "DaisyUI"],
    image: "/images/fitlog.jpeg",
    link: "https://assignment-6-programming-hero-swart.vercel.app/",
  },
  {
    title: "StudioSpace",
    category: "Creative Marketplace",
    description:
      "A modern platform for discovering and booking creative studios with a responsive interface and studio listing experience.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    link: "https://github.com/habib-45",
  },
  {
    title: "E-Commerce",
    category: "Online Shopping",
    description:
      "A responsive online shopping platform with a modern user interface and product browsing experience.",
    tech: ["React", "JavaScript", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900",
    link: "https://github.com/habib-45",
  },
  {
    title: "Dashboard UI",
    category: "Web Application",
    description:
      "A clean dashboard interface designed for managing business information and displaying data in an organized layout.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    link: "https://github.com/habib-45",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "REST API",
  "MongoDB",
  "Database",
  "Git",
  "GitHub",
  "Firebase",
  "Responsive Design",
  "Adobe Photoshop",
  "Adobe Illustrator",
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const skillServices = [
  {
    title: "Frontend Development",
    icon: Monitor,
    desc: "Creating modern, responsive, and interactive interfaces using React and Next.js.",
  },
  {
    title: "Backend Development",
    icon: Server,
    desc: "Building server-side applications and APIs using Node.js and Express.js.",
  },
  {
    title: "Database Management",
    icon: Database,
    desc: "Working with MongoDB to store, organize, and manage application data.",
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    desc: "Building beautiful, intuitive, and user-friendly digital experiences.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    desc: "Creating optimized layouts that work across mobile, tablet, and desktop.",
  },
  {
    title: "Adobe Photoshop",
    icon: ImageIcon,
    desc: "Editing images, photo manipulation, and creating creative visual designs.",
  },
  {
    title: "Adobe Illustrator",
    icon: Sparkles,
    desc: "Creating vector graphics, logos, icons, and professional illustrations.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    const sections = navigation
      .map(([, link]) => document.querySelector(link))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080810] text-white">

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080810]/85 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="text-2xl font-bold"
          >
            Habib<span className="text-purple-500">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map(([name, link]) => {
              const sectionId = link.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={name}
                  href={link}
                  onClick={() => setActiveSection(sectionId)}
                  whileHover={{
                    y: -3,
                  }}
                  className={`relative py-2 text-sm transition-colors duration-300 ${isActive
                    ? "font-semibold text-purple-400"
                    : "text-gray-400 hover:text-purple-300"
                    }`}
                >
                  {name}

                  {/* ACTIVE UNDERLINE */}
                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-purple-400"
                  />
                </motion.a>
              );
            })}
          </div>

          {/* CONTACT BUTTON */}
          <motion.a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden rounded-full border border-purple-500/50 px-5 py-2 text-sm transition hover:bg-purple-600 md:block"
          >
            Let's Talk ↗
          </motion.a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-white/10 bg-[#10101b] p-6 md:hidden"
            >
              {navigation.map(([name, link], index) => {
                const sectionId = link.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={name}
                    href={link}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    onClick={() => {
                      setActiveSection(sectionId);
                      setMenuOpen(false);
                    }}
                    className={`block border-b border-white/5 py-3 transition-colors duration-300 ${isActive
                      ? "font-semibold text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      {name}

                      {isActive && (
                        <motion.span
                          initial={{
                            scale: 0,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="h-2 w-2 rounded-full bg-purple-400"
                        />
                      )}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
      >
        {/* Purple Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-purple-700/30 blur-[120px]"
        />

        {/* Pink Background Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-pink-700/10 blur-[120px]"
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {/* STATUS */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm text-purple-300 shadow-lg shadow-purple-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                    ease: "easeOut",
                  },
                },
              }}
              className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hello, I'm

              <span className="mt-2 block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Habib
              </span>

              <span className="mt-2 block text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Frontend Developer
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
              className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              I build modern, responsive, and user-friendly websites
              using React, Next.js, and Tailwind CSS.
              I'm also learning backend development to create
              complete web applications.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.07,
                  y: -5,
                  boxShadow:
                    "0px 12px 35px rgba(147, 51, 234, 0.4)",
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold shadow-lg shadow-purple-900/30"
              >
                View My Work

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.07,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-purple-500 hover:bg-purple-500/10"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
              className="mt-12 flex items-center gap-5"
            >
              <span className="mr-2 text-sm text-gray-500">
                Follow me
              </span>

              <motion.a
                href="https://github.com/habib-45"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-purple-500 hover:bg-purple-500/20 hover:text-purple-300"
              >
                <GitBranch size={22} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/md-habibullah-744977441/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-lg font-bold text-white transition hover:border-sky-500 hover:bg-sky-500/20"
              >
                in
              </motion.a>

              <motion.a
                href="mailto:your-email@gmail.com"
                aria-label="Email"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-pink-500 hover:bg-pink-500/20 hover:text-pink-300"
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - PROFILE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotateY: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex justify-center"
            style={{
              perspective: 1200,
            }}
          >
            <motion.div
              animate={{
                y: [0, -18, 0],
                rotateZ: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                rotateY: 8,
                rotateX: -5,
                scale: 1.03,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* GLOW */}
              <div className="absolute -inset-10 rounded-full bg-purple-600/20 blur-[80px]" />

              {/* ROTATING RING */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-full border-2 border-dashed border-purple-400/40"
              />

              {/* SECOND RING */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-10 rounded-full border border-pink-500/20"
              />

              {/* IMAGE */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-purple-500/60 bg-[#171725] shadow-2xl shadow-purple-900/50 sm:h-96 sm:w-96">
                <img
                  src="/images/me.png"
                  alt="Habib profile"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/10 via-transparent to-pink-500/10" />
              </div>

              {/* CLEAN CODE CARD */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-8 rounded-2xl border border-white/10 bg-[#171725]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-14"
              >
                <Code2 className="text-purple-400" size={25} />

                <p className="mt-2 text-sm font-bold">
                  Clean Code
                </p>

                <p className="text-xs text-gray-500">
                  Development
                </p>
              </motion.div>

              {/* CREATIVE UI CARD */}
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-10 rounded-2xl border border-white/10 bg-[#171725]/95 p-4 shadow-xl backdrop-blur-xl sm:-right-14"
              >
                <Palette className="text-pink-400" size={25} />

                <p className="mt-2 text-sm font-bold">
                  Creative UI
                </p>

                <p className="text-xs text-gray-500">
                  Design
                </p>
              </motion.div>

              {/* FLOATING DECORATION */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-5 bottom-16 h-7 w-7 rounded-lg border-2 border-purple-400/60"
              />

              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -left-8 top-16 h-4 w-4 rounded-full bg-pink-400 shadow-lg shadow-pink-500/50"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden px-6 py-28"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-purple-400">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Designing with purpose,
            <br />
            <span className="text-purple-400">
              developing with passion.
            </span>
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-2">

            {/* ABOUT CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="space-y-6"
            >
              <p className="leading-8 text-gray-400">
                Hi, I'm Habib, a passionate Web Developer who loves creating
                modern, responsive, and user-friendly websites.
              </p>

              <p className="leading-8 text-gray-400">
                I enjoy transforming creative ideas into interactive digital
                experiences. I work with HTML, CSS, JavaScript, React,
                Next.js, and Tailwind CSS to build beautiful and functional
                interfaces.
              </p>

              <p className="leading-8 text-gray-400">
                I'm also learning backend development with Node.js,
                Express.js, and MongoDB to become a skilled Full Stack
                Developer. Alongside development, I enjoy UI/UX design,
                Adobe Photoshop, and Adobe Illustrator.
              </p>

              {/* MY FOCUS */}
              <div className="pt-3">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  What I Focus On
                </h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Frontend Development",
                    "Backend Development",
                    "Responsive Design",
                    "UI / UX Design",
                    "Creative Design",
                  ].map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      className="rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400 hover:bg-purple-500/15"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CAREER GOAL */}
              <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5">
                <h3 className="mb-2 font-semibold text-purple-400">
                  My Career Goal
                </h3>

                <p className="text-sm leading-7 text-gray-400">
                  To become a skilled Full Stack Developer, build
                  high-quality web applications, and continuously
                  improve my development skills through real-world projects.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Download Resume
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 font-medium text-gray-300 transition hover:border-purple-500/50 hover:text-white"
                >
                  Let's Talk
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            {/* STATISTICS */}
            <div className="grid grid-cols-2 gap-5">
              {[
                ["6+", "Projects Built"],
                ["19+", "Technologies"],
                ["100%", "Dedication"],
                ["∞", "Learning Mindset"],
              ].map(([number, label], index) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow:
                      "0px 10px 30px rgba(168, 85, 247, 0.12)",
                  }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition"
                >
                  <h3 className="text-4xl font-bold text-purple-400">
                    {number}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {label}
                  </p>
                </motion.div>
              ))}

              {/* DEVELOPER CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                }}
                whileHover={{
                  y: -5,
                }}
                className="col-span-2 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/15 p-3">
                    <Code2
                      className="text-purple-400"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Full Stack Developer
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Building modern web experiences
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-3 py-2 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/5 bg-white/[0.02] px-6 py-28"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-7xl"
        >
          <p className="mb-4 text-sm tracking-widest text-purple-400">
            MY EXPERTISE
          </p>

          <h2 className="text-4xl font-bold">
            Skills &{" "}
            <span className="text-purple-400">
              Technologies
            </span>
          </h2>

          {/* SERVICE CARDS */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillServices.map(({ title, icon: Icon, desc }, index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-xl border border-white/10 bg-[#10101a] p-7 transition hover:border-purple-500/50"
              >
                <Icon
                  className="mb-5 text-purple-400"
                  size={30}
                />

                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SKILL TAGS */}
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                    scale: 0.85,
                    filter: "blur(5px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                  boxShadow:
                    "0px 8px 25px rgba(168, 85, 247, 0.25)",
                  borderColor: "rgba(192, 132, 252, 0.8)",
                }}
                className="cursor-pointer rounded-lg border border-purple-500/20 bg-purple-500/5 px-5 py-3 text-sm text-gray-300 transition-colors duration-300 hover:bg-purple-500/15 hover:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            <p className="mb-4 text-sm tracking-widest text-purple-400">
              MY PORTFOLIO
            </p>

            <h2 className="text-4xl font-bold">
              Featured{" "}
              <span className="text-purple-400">
                Projects
              </span>
            </h2>
          </motion.div>

          {/* PROJECT CARDS */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#10101a] transition hover:border-purple-500/50"
              >
                {/* PROJECT IMAGE */}
                <div className="h-52 overflow-hidden bg-[#171725]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-6">
                  <p className="text-xs tracking-widest text-purple-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded bg-white/5 px-3 py-2 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT LINK */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-purple-400 transition hover:text-purple-300"
                  >
                    View Project
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-28"
      >
        {/* BACKGROUND GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto max-w-4xl rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-[#10101a] p-8 text-center shadow-2xl shadow-purple-900/10 md:p-16"
        >
          {/* TITLE */}
          <p className="text-sm font-semibold tracking-widest text-purple-400">
            GET IN TOUCH
          </p>

          {/* ANIMATED ICON */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Sparkles
              className="mx-auto mt-6 text-purple-400"
              size={35}
            />
          </motion.div>

          {/* HEADING */}
          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Let's Build Something

            <span className="mt-2 block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            Have a project idea or want to collaborate?
            Feel free to contact me anytime.
            I'm always excited to work on new projects
            and create amazing digital experiences.
          </p>

          {/* CONTACT INFORMATION */}
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">

            {/* MOBILE */}
            <motion.a
              href="tel:+8801888496956"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-purple-500/50 hover:bg-purple-500/10"
            >
              <div className="rounded-xl bg-purple-500/15 p-3">
                <Smartphone
                  size={24}
                  className="text-purple-400"
                />
              </div>

              <div>
                <p className="text-xs tracking-wider text-gray-500">
                  MOBILE
                </p>

                <p className="mt-1 font-semibold text-white transition group-hover:text-purple-400">
                  01888496956
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="ml-auto text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
              />
            </motion.a>

            {/* EMAIL */}
            <motion.a
              href="mailto:habib885245@gmail.com"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-pink-500/50 hover:bg-pink-500/10"
            >
              <div className="rounded-xl bg-pink-500/15 p-3">
                <Mail
                  size={24}
                  className="text-pink-400"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs tracking-wider text-gray-500">
                  EMAIL
                </p>

                <p className="mt-1 break-all text-sm font-semibold text-white transition group-hover:text-pink-400">
                  habib885245@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="ml-auto shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-pink-400"
              />
            </motion.a>

            {/* FACEBOOK */}
            <motion.a
              href="https://www.facebook.com/mk.md.ha.y.a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/50 hover:bg-blue-500/10 sm:col-span-2"
            >
              <div className="rounded-xl bg-blue-500/15 p-3">
                <ExternalLink
                  size={24}
                  className="text-blue-400"
                />
              </div>

              <div>
                <p className="text-xs tracking-wider text-gray-500">
                  FACEBOOK
                </p>

                <p className="mt-1 font-semibold text-white transition group-hover:text-blue-400">
                  Connect with me on Facebook
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="ml-auto text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
              />
            </motion.a>
          </div>

          

          {/* SOCIAL LINK */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-sm text-gray-500">
              Let's connect
            </span>

            <a
              href="https://www.facebook.com/mk.md.ha.y.a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ExternalLink size={20} />
            </a>

            <a
              href="mailto:habib885245@gmail.com"
              aria-label="Email Habib"
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <Mail size={20} />
            </a>
          </div>

        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} Habib. All rights reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{
              y: -4,
            }}
            className="transition hover:text-purple-400"
          >
            Back to Top ↑
          </motion.a>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}