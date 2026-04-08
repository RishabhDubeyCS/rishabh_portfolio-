import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack Next.js commerce solution with Stripe integration.",
    slug: "e-commerce-platform",
    tag: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    content: "E-commerce app with cart, auth, and payment integration.",
  },
  {
    title: "AI Image Generator",
    description: "Generate high-quality images using OpenAI API.",
    slug: "ai-image-generator",
    tag: "AI",
    tech: ["React", "OpenAI API", "Node.js"],
    content: "AI-based image generator using prompt inputs.",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio using Framer Motion.",
    slug: "portfolio-website",
    tag: "Frontend",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    content: "Personal portfolio with animations and modern UI.",
  },
  {
    title: "Real-time Chat App",
    description: "Chat application using Socket.io and Redis.",
    slug: "chat-app",
    tag: "Realtime",
    tech: ["Node.js", "Socket.io", "Redis"],
    content: "Real-time messaging with instant updates.",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with authentication & payments.",
    slug: "saas-dashboard",
    tag: "SaaS",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    content: "SaaS dashboard with analytics and billing.",
  },
  {
    title: "Task Manager API",
    description: "REST API built with Node.js and MongoDB.",
    slug: "task-manager",
    tag: "Backend",
    tech: ["Node.js", "Express", "MongoDB"],
    content: "Task management backend API.",
  },
  {
    title: "Social Media App",
    description: "Full-stack app with posts, likes, and comments.",
    slug: "social-app",
    tag: "Full Stack",
    tech: ["React", "Node.js", "MongoDB"],
    content: "Social platform with user interaction features.",
  },
  {
    title: "Dev Portfolio Builder",
    description: "Tool to generate developer portfolios dynamically.",
    slug: "portfolio-builder",
    tag: "Tool",
    tech: ["Next.js", "Tailwind", "AI"],
    content: "Auto-generate developer portfolios.",
  },
  {
    title: "Blog Platform",
    description: "Markdown-based blogging system with CMS.",
    slug: "blog-platform",
    tag: "CMS",
    tech: ["Next.js", "Markdown", "CMS"],
    content: "Blog platform with markdown support.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            My Projects 
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            A collection of real-world applications showcasing full-stack development,
            modern UI/UX, and scalable systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Tag */}
              <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Preview */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-md text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-2 text-cyan-300 text-sm font-medium">
                View Details →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}