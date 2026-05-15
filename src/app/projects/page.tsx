"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";
import { Code2, Globe, ExternalLink, Layers, Zap, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ["All", "Full Stack", "Frontend", "AI / ML", "Architecture"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "All" || project.tag === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tighter">
              Featured <span className="text-orange-600 dark:text-orange-400">Projects.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A curated selection of technical solutions, ranging from high-performance 
              web architectures to intelligent AI-driven applications.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input 
                placeholder="Search by tech or title..." 
                className="pl-10 w-full md:w-[300px] bg-secondary/50 border-border focus:ring-orange-500/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* --- CATEGORY FILTER --- */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                filter === cat 
                ? "bg-orange-600 dark:bg-orange-500 border-orange-600 dark:border-orange-500 text-white dark:text-black shadow-lg" 
                : "bg-card border-border text-muted-foreground hover:border-orange-500/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group relative flex flex-col bg-card/40 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    {project.tag === "AI / ML" ? <Zap className="size-6" /> : <Layers className="size-6" />}
                  </div>
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Code2 className="size-5" />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge 
                      key={t} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-orange-500/10 hover:text-orange-600 transition-colors border-none text-[10px] font-bold px-3 py-1"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Link 
                href={`/projects/${project.slug}`}
                className="block w-full py-4 text-center bg-secondary/30 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white dark:hover:text-black transition-all text-xs font-bold uppercase tracking-[0.2em] border-t border-border"
              >
                View Architecture & Details
              </Link>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 border border-dashed border-border rounded-3xl">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setFilter("All"); setSearchQuery("");}}
              className="mt-4 text-orange-600 font-bold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

