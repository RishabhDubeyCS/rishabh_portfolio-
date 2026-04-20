"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  ShieldCheck, 
  Zap, 
  Search,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Marquee from "@/components/magicui/marquee";

const categories = [
  { id: "all", label: "All Tech", icon: <Globe className="size-4" /> },
  { id: "frontend", label: "Frontend", icon: <Code2 className="size-4" /> },
  { id: "backend", label: "Backend", icon: <Terminal className="size-4" /> },
  { id: "database", label: "Database", icon: <Database className="size-4" /> },
  { id: "ai", label: "AI & ML", icon: <Cpu className="size-4" /> },
  { id: "devops", label: "DevOps", icon: <ShieldCheck className="size-4" /> },
];

const skillsData = [
  { name: "React / Next.js", cat: "frontend", level: "Expert", top: true },
  { name: "TypeScript", cat: "frontend", level: "Expert", top: true },
  { name: "Node.js", cat: "backend", level: "Expert", top: true },
  { name: "Express", cat: "backend", level: "Expert" },
  { name: "MongoDB", cat: "database", level: "Expert", top: true },
  { name: "PostgreSQL", cat: "database", level: "Intermediate" },
  { name: "OpenAI API", cat: "ai", level: "Advanced", top: true },
  { name: "LangChain", cat: "ai", level: "Intermediate" },
  { name: "Tailwind CSS", cat: "frontend", level: "Expert" },
  { name: "Framer Motion", cat: "frontend", level: "Advanced" },
  { name: "Docker", cat: "devops", level: "Intermediate" },
  { name: "AWS", cat: "devops", level: "Basic" },
  { name: "Python", cat: "backend", level: "Advanced" },
  { name: "Java", cat: "backend", level: "Advanced" },
  { name: "Redis", cat: "database", level: "Intermediate" },
  { name: "GraphQL", cat: "backend", level: "Intermediate" },
];

const techLogos = [
  "react", "nextdotjs", "typescript", "tailwindcss", "nodedotjs", 
  "express", "mongodb", "postgresql", "docker", "amazonwebservices", 
  "python", "java", "vercel", "github", "git", "postman"
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter(s => s.cat === activeTab);

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-4 sm:px-6 selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-4"
            >
              <Zap className="size-3 animate-pulse" />
              <span>Production Ready Stack</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Technical <span className="text-cyan-400">Proficiency</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-lg"
            >
              A deep dive into my core competencies. From building intelligent AI interfaces 
              to architecting robust backend systems.
            </motion.p>
          </div>

          {/* Quick Stats for HR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4 w-full md:w-auto"
          >
            <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-2xl">
              <p className="text-cyan-400 font-bold text-2xl">15+</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">Tech Mastered</p>
            </div>
            <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-2xl">
              <p className="text-cyan-400 font-bold text-2xl">MERN</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">Core Speciality</p>
            </div>
          </motion.div>
        </div>

        {/* --- LOGO MARQUEE --- */}
        <div className="relative mb-24 overflow-hidden py-10">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black z-10"></div>
          <Marquee pauseOnHover className="[--duration:40s]">
            {techLogos.map((logo) => (
              <div key={logo} className="mx-8 group relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${logo}`}
                  alt={logo}
                  className="h-10 w-10 object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* --- INTERACTIVE FILTER --- */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`
                flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeTab === cat.id 
                  ? "bg-cyan-500 border-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                  : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/20 hover:text-white"
                }
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Card className={`group relative h-full bg-neutral-900/40 border-white/5 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 ${skill.top ? "ring-1 ring-cyan-500/20" : ""}`}>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors`}>
                        {skill.cat === "frontend" && <Code2 className="size-5" />}
                        {skill.cat === "backend" && <Terminal className="size-5" />}
                        {skill.cat === "database" && <Database className="size-5" />}
                        {skill.cat === "ai" && <Cpu className="size-5" />}
                        {skill.cat === "devops" && <ShieldCheck className="size-5" />}
                      </div>
                      {skill.top && (
                        <Badge className="bg-cyan-500 text-black font-bold text-[10px] py-0 px-2 uppercase tracking-tighter">
                          Top Choice
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-cyan-500 transition-all duration-1000 ${
                            skill.level === "Expert" ? "w-full" : 
                            skill.level === "Advanced" ? "w-[85%]" : 
                            skill.level === "Intermediate" ? "w-[60%]" : "w-[30%]"
                          }`}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">
                        {skill.level}
                      </span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-neutral-500 italic">Used in 5+ projects</span>
                      <ArrowUpRight className="size-3 text-cyan-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LEARNING PATH --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent border border-white/5 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 mb-6">
            <Search className="size-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Currently Mastering</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-lg">
            I believe technology never stops evolving. Here is what I am 
            currently diving deep into:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["System Design", "Kubernetes", "WebRTC", "Go Lang"].map(t => (
              <span key={t} className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
