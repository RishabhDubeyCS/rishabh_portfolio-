"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { Code2, Globe, ArrowRight } from "lucide-react";

export default function Projects() {
  // Show only first 6 projects on home page
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-background px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Featured <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my recent work, ranging from full-stack applications 
              to specialized AI integrations and architectural experiments.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 border border-border text-foreground font-bold hover:bg-secondary transition-all group"
          >
            View All Projects
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="group p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:bg-accent/50 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Tag */}
              <span className="inline-block self-start mb-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Preview */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium px-2 py-1 bg-secondary rounded border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors group/link"
                >
                  Details
                  <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
                      title="GitHub Repository"
                    >
                      <Code2 className="size-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
                      title="Live Demo"
                    >
                      <Globe className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
