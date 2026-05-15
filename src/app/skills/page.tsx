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
  CheckCircle2
} from "lucide-react";
import { Input } from "@/components/ui/input";
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
  { name: "React / Next.js", cat: "frontend", level: "Expert", score: 95 },
  { name: "TypeScript", cat: "frontend", level: "Expert", score: 90 },
  { name: "Node.js", cat: "backend", level: "Expert", score: 92 },
  { name: "Express", cat: "backend", level: "Expert", score: 88 },
  { name: "MongoDB", cat: "database", level: "Expert", score: 90 },
  { name: "PostgreSQL", cat: "database", level: "Intermediate", score: 70 },
  { name: "OpenAI API", cat: "ai", level: "Advanced", score: 85 },
  { name: "LangChain", cat: "ai", level: "Intermediate", score: 65 },
  { name: "Tailwind CSS", cat: "frontend", level: "Expert", score: 95 },
  { name: "Framer Motion", cat: "frontend", level: "Advanced", score: 80 },
  { name: "Docker", cat: "devops", level: "Intermediate", score: 60 },
  { name: "AWS", cat: "devops", level: "Basic", score: 40 },
  { name: "Python", cat: "backend", level: "Advanced", score: 82 },
  { name: "Java", cat: "backend", level: "Advanced", score: 78 },
  { name: "Redis", cat: "database", level: "Intermediate", score: 65 },
  { name: "GraphQL", cat: "backend", level: "Intermediate", score: 60 },
];

const techLogos = [
  "react", "nextdotjs", "typescript", "tailwindcss", "nodedotjs", 
  "express", "mongodb", "postgresql", "docker", "amazonwebservices", 
  "python", "java", "vercel", "github", "git", "postman"
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skillsData.filter(skill => {
    const matchesTab = activeTab === "all" || skill.cat === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 selection:bg-orange-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold mb-4"
            >
              <Zap className="size-3 animate-pulse" />
              <span>Professional Proficiency</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tighter">
              Technical <span className="text-orange-600 dark:text-orange-400">Stack.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive breakdown of my engineering core competencies, 
              ranging from modern frontend frameworks to scalable backend architectures.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 tracking-tighter">10+ Projects</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Built & Deployed</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 tracking-tighter">MERN</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Core Stack</p>
            </div>
          </div>
        </div>

        {/* --- LOGO MARQUEE --- */}
        <div className="relative mb-24 overflow-hidden py-10 opacity-60 hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background z-10"></div>
          <Marquee pauseOnHover className="[--duration:40s]">
            {techLogos.map((logo) => (
              <div key={logo} className="mx-8 group relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${logo}`}
                  alt={logo}
                  className="h-10 w-10 object-contain dark:brightness-0 dark:invert grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* --- TOOLS & FILTERS --- */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  activeTab === cat.id 
                  ? "bg-orange-600 dark:bg-orange-500 border-orange-600 dark:border-orange-500 text-white dark:text-black shadow-lg" 
                  : "bg-card border-border text-muted-foreground hover:border-orange-500/50 hover:text-foreground"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input 
              placeholder="Filter skills..." 
              className="pl-10 bg-secondary/50 border-border focus:ring-orange-500/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {skill.name}
                  </h3>
                  <CheckCircle2 className="size-4 text-orange-600 dark:text-orange-400 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <span>{skill.level}</span>
                    <span>{skill.score}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.score}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-orange-600 dark:bg-orange-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LEARNING ROADMAP --- */}
        <div className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-card border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] -z-10"></div>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-3 py-1">
              On the Horizon
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Currently Mastering</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Technology moves fast. I am currently deepening my expertise in systems 
              architecture and high-concurrency patterns to build even more robust solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {["System Design", "Kubernetes", "WebRTC", "Go Lang"].map(t => (
                <span key={t} className="px-6 py-2.5 rounded-xl bg-secondary border border-border text-foreground font-bold text-xs uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
