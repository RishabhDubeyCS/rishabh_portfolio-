import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects-data";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-200 transition mb-12"
        >
          ← Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4 sm:text-6xl tracking-tight">
          {project.title}
        </h1>

        {/* Tag */}
        <span className="inline-block mb-6 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
          {project.tag}
        </span>

        {/* Description */}
        <p className="text-xl text-cyan-200 mb-10 leading-relaxed">
          {project.description}
        </p>

        {/*  Tech Stack Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none text-neutral-300">
          <p className="text-lg leading-loose">{project.content}</p>
        </div>
      </div>
    </div>
  );
}
