import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            My Projects 🚀
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
