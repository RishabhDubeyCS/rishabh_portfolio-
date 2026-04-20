"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { Code2, Globe, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            A collection of real-world applications showcasing full-stack development,
            modern UI/UX, and scalable systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Tag */}
              <span className="inline-block self-start mb-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Preview */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium px-2 py-1 bg-white/5 rounded border border-white/5 text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] font-medium px-2 py-1 text-neutral-500">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:text-cyan-200 transition-colors group/link"
                >
                  Details
                  <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all"
                      title="GitHub Repository"
                    >
                      <Code2 className="size-4" />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all"
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
    </div>
  );
}
