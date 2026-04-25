import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects-data";
import { Code2, Globe, ArrowLeft, ExternalLink } from "lucide-react";

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
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition mb-12 group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-foreground mb-6 sm:text-7xl tracking-tighter">
          {project.title}
        </h1>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            {project.tag}
          </span>
          
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code2 className="size-5" />
                <span>Source Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="size-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-cyan-700/80 dark:text-cyan-200/80 mb-16 leading-relaxed font-medium">
          {project.description}
        </p>

        {/* Content & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              Overview
              <div className="h-px flex-grow bg-border"></div>
            </h3>
            <div className="prose dark:prose-invert prose-cyan max-w-none text-muted-foreground">
              <p className="text-lg leading-loose whitespace-pre-line">
                {project.content}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-bold rounded-lg bg-secondary border border-border text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Card */}
              <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
                <h4 className="text-foreground font-bold">Ready to see it live?</h4>
                <p className="text-sm text-muted-foreground">
                  Explore the full codebase or check out the interactive demo.
                </p>
                <div className="pt-2 space-y-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black font-bold text-sm hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-colors"
                    >
                      View Live Demo
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary border border-border text-foreground font-bold text-sm hover:bg-accent transition-colors"
                    >
                      <Code2 className="size-4" />
                      View Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
