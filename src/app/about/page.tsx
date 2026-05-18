"use client";

import React from "react";
import { 
  Calendar
} from "lucide-react";
import { SquigglyText } from "@/components/ui/squiggly-text";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6">
      
      {/* ================= HERO / INTRO SECTION ================= */}
      <div className="max-w-3xl mx-auto mb-24">
        <div className="flex flex-col gap-12">
          {/* Text Content Column */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-10 tracking-tighter">
              <SquigglyText>
                Crafting <span className="text-orange-600 dark:text-orange-400">scalable</span> digital experiences
              </SquigglyText>
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-xl">
              <p className="text-foreground font-medium leading-snug">
                I&apos;m Rishabh Dubey, a Full Stack Developer specializing in the MERN stack and Next.js. 
                I focus on building production-ready applications that solve real-world problems.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science, I bridge the gap between academic theory 
                and industry-standard software engineering. My approach is centered on clean architecture, 
                type safety, and user-centric design.
              </p>
              <p>
                From developing AI-integrated platforms to secure authentication systems, I enjoy the 
                challenge of turning complex requirements into elegant, maintainable code. I&apos;m always 
                looking for opportunities to collaborate on innovative projects and contribute to 
                high-impact engineering teams.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="px-5 py-2.5 rounded-full border border-border bg-card text-xs font-bold tracking-widest uppercase">
                Frontend
              </div>
              <div className="px-5 py-2.5 rounded-full border border-border bg-card text-xs font-bold tracking-widest uppercase">
                Backend
              </div>
              <div className="px-5 py-2.5 rounded-full border border-border bg-card text-xs font-bold tracking-widest uppercase">
                AI/LLMs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TECHNICAL ARSENAL ================= */}
      <div className="max-w-5xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillGroup 
            title="Frontend"
            skills={["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"]}
          />
          <SkillGroup 
            title="Backend"
            skills={["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"]}
          />
          <SkillGroup 
            title="Intelligence"
            skills={["OpenAI API", "LangChain", "Vector DBs", "RAG Patterns"]}
          />
          <SkillGroup 
            title="DevOps & Tools"
            skills={["Docker", "Git", "Vercel", "Postman", "Linux"]}
          />
        </div>
      </div>

      {/* ================= JOURNEY & EDUCATION ================= */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-2xl font-bold mb-10 tracking-tight">Learning Journey</h2>
          <div className="space-y-12">
            <TimelineItem 
              year="2024"
              title="Advanced Project Development"
              description="Built complex, full-stack applications including AI-driven platforms and secure SaaS architectures as part of my deep-dive into Next.js."
            />
            <TimelineItem 
              year="2023"
              title="Full Stack Specialization"
              description="Focused on mastering the MERN stack through rigorous project-based learning and academic coursework."
            />
            <TimelineItem 
              year="2022"
              title="Computer Science Foundations"
              description="Started B.Tech CSE, building solid fundamentals in C, Java, and computer science theory at SAGE University."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-10 tracking-tight">Education</h2>
          <div className="p-8 rounded-2xl border border-border bg-card/50">
            <div className="flex items-center gap-3 mb-4 text-orange-600 dark:text-orange-400">
              <Calendar className="size-5" />
              <span className="font-bold tracking-wider text-sm">2023 — 2027</span>
            </div>
            <h3 className="text-xl font-bold mb-2">B.Tech in Computer Science</h3>
            <p className="text-foreground/80 mb-4">SAGE University, Bhopal</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Specializing in Software Engineering and Artificial Intelligence. 
              Consistently applying academic concepts to real-world development projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">{title}</h3>
      <ul className="space-y-2">
        {skills.map(skill => (
          <li key={skill} className="text-foreground/80 flex items-center gap-2 group">
            <div className="size-1 rounded-full bg-orange-600 transition-all group-hover:scale-150" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="text-sm font-bold text-muted-foreground pt-1.5 w-12 shrink-0">{year}</div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold group-hover:text-orange-600 transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

