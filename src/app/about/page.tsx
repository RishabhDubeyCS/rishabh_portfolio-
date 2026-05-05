import React from "react";
import Image from "next/image";
import { 
  Code2, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6">
      
      {/* ================= HERO / INTRO SECTION ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image Column */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-orange-600 to-orange-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-background bg-muted shadow-xl aspect-square w-full max-w-[350px]">
                <Image
                  src="/Rishabh_dubey_img.jpeg"
                  alt="Rishabh Dubey profile photo"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-2">
               <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold">
                 Developer
               </span>
               <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold">
                 Designer
               </span>
               <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                 Innovator
               </span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              About <span className="text-orange-600 dark:text-orange-400">Me</span>
            </h1>
            
            <div className="space-y-2 mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-orange-600 dark:text-orange-300">
                Full Stack Developer | Building scalable web apps with MERN & Next.js
              </h2>
              <p className="text-lg text-foreground/80 font-medium">
                I turn ideas into fast, scalable, and production-ready web applications 🚀
              </p>
              <p className="text-muted-foreground">
                Helping startups and businesses build modern, high-performance web solutions
              </p>
            </div>

            <div className="prose prose-orange dark:prose-invert max-w-none space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                I’m a Full Stack Developer currently pursuing B.Tech in Computer Science at SAGE University Bhopal, 
                specializing in building scalable and production-ready web applications using the MERN stack and Next.js. 
                I have hands-on experience developing real-world projects including a ChatGPT-style AI application, 
                secure authentication systems, and API-driven platforms with clean architecture.
              </p>
              <p>
                I focus on writing efficient, maintainable code and delivering responsive, user-friendly interfaces. 
                Beyond development, I have practical exposure to REST APIs, database design (MongoDB & MySQL), 
                and basic DevOps practices like Docker and CI/CD.
              </p>
              <p>
                I’m actively seeking opportunities where I can contribute to real-world products, 
                solve meaningful problems, and deliver high-quality solutions — whether as a developer 
                in a growing team or by helping clients build fast, scalable web applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= JOURNEY SECTION ================= */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-orange-500 dark:border-orange-400 pl-4">My Journey as a Student & Developer</h2>

        <div className="relative border-l border-border ml-3 pl-8 space-y-12">
          
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-orange-600 dark:bg-orange-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            <h3 className="text-orange-600 dark:text-orange-300 font-bold text-xl mb-2">The Spark (2023)</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey began when I joined <span className="text-foreground font-medium">SAGE University, Bhopal</span> for my B.Tech in CSE. 
              Like many, I started with curiosity about how the internet works. What began as writing simple &quot;Hello World&quot; 
              programs in C and Java quickly evolved into a fascination with the web&apos;s infinite possibilities.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-secondary border-2 border-orange-600 dark:border-orange-500"></div>
            <h3 className="text-orange-600 dark:text-orange-300 font-bold text-xl mb-2">Diving into the MERN Stack</h3>
            <p className="text-muted-foreground leading-relaxed">
              I realized that to build real impact, I needed to master the full cycle of development. 
              I dedicated months to learning the <span className="text-foreground font-medium">MERN stack (MongoDB, Express, React, Node)</span>. 
              The transition from static pages to building dynamic, data-driven applications was a turning point. 
              I started focusing on how to make applications not just functional, but scalable and secure.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-secondary border-2 border-orange-600 dark:border-orange-500"></div>
            <h3 className="text-orange-600 dark:text-orange-300 font-bold text-xl mb-2">Building Real-World Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              I moved beyond tutorials to build production-ready projects. Developing a 
              <span className="text-foreground font-medium"> ChatGPT-style AI application</span> taught me how to integrate complex APIs and 
              manage state effectively. Working on secure authentication systems and API-driven platforms 
              helped me understand the importance of <span className="text-foreground font-medium">Clean Architecture</span> and 
              user security in the modern web.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-secondary border-2 border-orange-600 dark:border-orange-500"></div>
            <h3 className="text-orange-600 dark:text-orange-300 font-bold text-xl mb-2">Present & Beyond</h3>
            <p className="text-muted-foreground leading-relaxed">
              Today, I am bridging the gap between academic excellence and industry standards. 
              I am deepening my expertise in <span className="text-foreground font-medium">Next.js</span> and exploring the 
              intersection of <span className="text-foreground font-medium">Artificial Intelligence and Web Development</span>. 
              My goal is to solve meaningful problems and deliver high-quality solutions for clients and users worldwide.
            </p>
          </div>

        </div>
      </div>

      {/* ================= TECHNICAL ARSENAL (AI-INSPIRED) ================= */}
      <div className="mt-32 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold mb-4">
            <Sparkles className="size-3 animate-pulse" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Technical <span className="text-orange-600 dark:text-orange-400">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured collection of technologies I leverage to build 
            intelligent, high-performance digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory 
            title="Frontend Development"
            icon={<Code2 className="size-5" />}
            skills={["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]}
          />
          <SkillCategory 
            title="Backend Engineering"
            icon={<Server className="size-5" />}
            skills={["Node.js", "Express", "Java", "Python", "REST APIs", "Socket.io"]}
          />
          <SkillCategory 
            title="Intelligence & Data"
            icon={<Cpu className="size-5" />}
            skills={["OpenAI", "LangChain", "Vector DBs", "MongoDB", "PostgreSQL"]}
          />
          <SkillCategory 
            title="Tools & DevOps"
            icon={<Layers className="size-5" />}
            skills={["Git/GitHub", "Docker", "Vercel", "AWS", "CI/CD", "Postman"]}
          />
        </div>
      </div>

      {/* ================= EDUCATION SECTION ================= */}
      <div className="mt-32 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
          Education 🎓
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden group hover:bg-accent/50 transition-all duration-500">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-600 dark:bg-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-orange-600 dark:text-orange-300 font-bold text-2xl mb-1">
                  Bachelor of Technology
                </h3>
                <p className="text-muted-foreground font-medium">Computer Science Engineering</p>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-bold">
                2023 — 2027
              </div>
            </div>
            
            <p className="text-foreground/90 text-lg mb-4 font-medium">SAGE University, Bhopal</p>
            <p className="text-muted-foreground leading-relaxed italic">
              &quot;Focused on mastering full stack development and exploring the intersection of AI with modern web technologies.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔥 Minimalist & AI-Inspired Skill Category */
function SkillCategory({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-accent/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:border-orange-500/20 hover:text-foreground transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

