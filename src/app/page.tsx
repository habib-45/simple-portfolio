
"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  Monitor,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "StudioSpace",
    category: "Creative Marketplace",
    description:
      "A modern platform for discovering and booking creative studios.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    link: "https://github.com/",
  },
  {
    title: "E-Commerce",
    category: "Online Shopping",
    description:
      "A responsive online shopping platform with modern UI.",
    tech: ["React", "JavaScript", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900",
    link: "https://github.com/",
  },
  {
    title: "Dashboard UI",
    category: "Web Application",
    description:
      "A clean dashboard interface for managing business data.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    link: "https://github.com/",
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
  "Git",
  "GitHub",
  "Firebase",
  "Responsive Design",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen bg-[#080810] text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080810]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-2xl font-bold">
            Habib<span className="text-purple-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-gray-400 transition hover:text-purple-400"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-purple-500/50 px-5 py-2 text-sm transition hover:bg-purple-600 md:block"
          >
            Let's Talk ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#10101b] p-6 md:hidden">
            {navigation.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-gray-300"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
      >
        <div className="absolute left-1/4 top-1/4 -z-0 h-80 w-80 rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>
            <span className="mb-7 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
              ● Available for opportunities
            </span>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Hello, I'm
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Habib
              </span>
              <br />
              Frontend Developer
            </h1>

            <p className="mt-7 max-w-xl leading-8 text-gray-400">
              I build modern, responsive and user-friendly websites
              using React, Next.js and Tailwind CSS.
              Turning creative ideas into beautiful digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-purple-600 px-7 py-4 font-semibold transition hover:bg-purple-500"
              >
                View My Work <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-7 py-4 transition hover:border-purple-500"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex gap-6 text-gray-400">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="transition hover:text-purple-400" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="transition hover:text-purple-400" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="transition hover:text-purple-400" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-900/40 sm:h-96 sm:w-96">
                <img
                  src="/profile.jpg"
                  alt="My profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-10 rounded-xl border border-white/10 bg-[#171725] p-4 shadow-xl">
                <Code2 className="text-purple-400" />
                <p className="mt-2 text-sm font-semibold">Clean Code</p>
              </div>

              <div className="absolute -right-8 top-10 rounded-xl border border-white/10 bg-[#171725] p-4 shadow-xl">
                <Palette className="text-pink-400" />
                <p className="mt-2 text-sm font-semibold">Creative UI</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-semibold tracking-widest text-purple-400">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Designing with purpose,
            <br />
            <span className="text-purple-400">developing with passion.</span>
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="leading-8 text-gray-400">
              I'm a passionate Frontend Developer who loves creating
              beautiful and functional websites. I enjoy solving problems,
              learning new technologies and building projects that make
              people's lives easier.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                ["10+", "Projects Built"],
                ["12+", "Technologies"],
                ["100%", "Dedication"],
                ["∞", "Learning Mindset"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-4xl font-bold text-purple-400">
                    {number}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/5 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm tracking-widest text-purple-400">
            MY EXPERTISE
          </p>

          <h2 className="text-4xl font-bold">
            Skills & <span className="text-purple-400">Technologies</span>
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Frontend Development", icon: Monitor, desc: "Creating responsive and interactive interfaces." },
              { title: "UI / UX Design", icon: Palette, desc: "Building beautiful and user-friendly experiences." },
              { title: "Responsive Design", icon: Smartphone, desc: "Optimized layouts for all screen sizes." },
            ].map(({ title, icon: Icon, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-[#10101a] p-7">
                <Icon className="mb-5 text-purple-400" size={30} />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-purple-500/20 bg-purple-500/5 px-5 py-3 text-sm text-gray-300 transition hover:border-purple-400 hover:bg-purple-500/15"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm tracking-widest text-purple-400">
            MY PORTFOLIO
          </p>

          <h2 className="text-4xl font-bold">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#10101a] transition hover:-translate-y-2 hover:border-purple-500/50"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded bg-white/5 px-3 py-2 text-xs text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                  >
                    View Project <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-[#10101a] p-10 text-center md:p-20">

          <p className="text-sm tracking-widest text-purple-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Let's Build Something
            <span className="block text-purple-400">Amazing Together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
            Have a project idea or want to collaborate?
            My inbox is always open.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-500"
          >
            Send Me an Email <Mail size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Habib. All rights reserved.</p>
          <a href="#home" className="transition hover:text-purple-400">
            Back to Top ↑
          </a>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

    </main>
  );
}
