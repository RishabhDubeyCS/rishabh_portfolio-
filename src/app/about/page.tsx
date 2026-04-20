import React from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6">
      
      {/* ================= HERO / INTRO SECTION ================= */}
      <div className="max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          About <span className="text-cyan-400">Me</span>
        </h1>
        
        <div className="space-y-2 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-300">
            Full Stack Developer | Building scalable web apps with MERN & Next.js
          </h2>
          <p className="text-lg text-neutral-200 font-medium">
            I turn ideas into fast, scalable, and production-ready web applications 🚀
          </p>
          <p className="text-neutral-400">
            Helping startups and businesses build modern, high-performance web solutions
          </p>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-neutral-300 text-lg leading-relaxed">
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

      {/* ================= JOURNEY SECTION ================= */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">My Journey as a Student & Developer</h2>

        <div className="relative border-l border-white/10 ml-3 pl-8 space-y-12">
          
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            <h3 className="text-cyan-300 font-bold text-xl mb-2">The Spark (2023)</h3>
            <p className="text-neutral-400 leading-relaxed">
              My journey began when I joined <span className="text-white font-medium">SAGE University, Bhopal</span> for my B.Tech in CSE. 
              Like many, I started with curiosity about how the internet works. What began as writing simple "Hello World" 
              programs in C and Java quickly evolved into a fascination with the web's infinite possibilities.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white/20 border-2 border-cyan-500"></div>
            <h3 className="text-cyan-300 font-bold text-xl mb-2">Diving into the MERN Stack</h3>
            <p className="text-neutral-400 leading-relaxed">
              I realized that to build real impact, I needed to master the full cycle of development. 
              I dedicated months to learning the <span className="text-white font-medium">MERN stack (MongoDB, Express, React, Node)</span>. 
              The transition from static pages to building dynamic, data-driven applications was a turning point. 
              I started focusing on how to make applications not just functional, but scalable and secure.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white/20 border-2 border-cyan-500"></div>
            <h3 className="text-cyan-300 font-bold text-xl mb-2">Building Real-World Impact</h3>
            <p className="text-neutral-400 leading-relaxed">
              I moved beyond tutorials to build production-ready projects. Developing a 
              <span className="text-white font-medium"> ChatGPT-style AI application</span> taught me how to integrate complex APIs and 
              manage state effectively. Working on secure authentication systems and API-driven platforms 
              helped me understand the importance of <span className="text-white font-medium">Clean Architecture</span> and 
              user security in the modern web.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white/20 border-2 border-cyan-500"></div>
            <h3 className="text-cyan-300 font-bold text-xl mb-2">Present & Beyond</h3>
            <p className="text-neutral-400 leading-relaxed">
              Today, I am bridging the gap between academic excellence and industry standards. 
              I am deepening my expertise in <span className="text-white font-medium">Next.js</span> and exploring the 
              intersection of <span className="text-white font-medium">Artificial Intelligence and Web Development</span>. 
              My goal is to solve meaningful problems and deliver high-quality solutions for clients and users worldwide.
            </p>
          </div>

        </div>
      </div>

      {/* ================= SKILLS SECTION (BENTO GRID) ================= */}
      <div className="mt-32 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-cyan-400">Arsenal</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              A curated list of technologies I use to build high-performance 
              applications, from frontend aesthetics to backend logic.
            </p>
          </div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-400/5 px-4 py-2 rounded-full border border-cyan-400/20">
            <Sparkles className="size-4 animate-pulse" />
            <span>Always Learning New Tech</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[180px]">
          
          {/* Frontend - Large Bento */}
          <BentoSkillCard 
            className="md:col-span-3 lg:col-span-4 lg:row-span-2 bg-gradient-to-br from-cyan-500/10 to-transparent"
            icon={<Code2 className="size-8 text-cyan-400" />}
            title="Frontend Mastery"
            skills={["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Redux Toolkit"]}
            description="Crafting immersive user experiences with modern frameworks and pixel-perfect responsiveness."
          />

          {/* Backend - Wide Bento */}
          <BentoSkillCard 
            className="md:col-span-3 lg:col-span-5 bg-gradient-to-br from-purple-500/10 to-transparent"
            icon={<Server className="size-8 text-purple-400" />}
            title="Backend Engineering"
            skills={["Node.js", "Express", "Java", "Python", "REST APIs", "Socket.io"]}
            description="Architecting robust server-side logic and scalable microservices."
          />

          {/* Database - Square Bento */}
          <BentoSkillCard 
            className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-emerald-500/10 to-transparent"
            icon={<Database className="size-8 text-emerald-400" />}
            title="Databases"
            skills={["MongoDB", "PostgreSQL", "MySQL", "Redis"]}
          />

          {/* AI / Modern Tools - Square Bento */}
          <BentoSkillCard 
            className="md:col-span-2 lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-orange-500/10 to-transparent"
            icon={<Cpu className="size-8 text-orange-400" />}
            title="AI & Intelligent Tools"
            skills={["OpenAI API", "LangChain", "Vector DBs", "Claude API"]}
            description="Integrating LLMs and AI agents into modern web workflows."
          />

          {/* DevOps - Wide Bento */}
          <BentoSkillCard 
            className="md:col-span-4 lg:col-span-5 bg-gradient-to-br from-blue-500/10 to-transparent"
            icon={<Globe className="size-8 text-blue-400" />}
            title="DevOps & Cloud"
            skills={["Docker", "CI/CD", "Vercel", "AWS (Basic)", "Git/GitHub"]}
          />

          {/* Principles - Slim Bento */}
          <BentoSkillCard 
            className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-pink-500/10 to-transparent"
            icon={<Layers className="size-8 text-pink-400" />}
            title="Architecture"
            skills={["Clean Code", "MVC", "System Design", "Agile"]}
          />

        </div>
      </div>

      {/* ================= EDUCATION SECTION ================= */}
      <div className="mt-32 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Education 🎓
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-500">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-cyan-300 font-bold text-2xl mb-1">
                  Bachelor of Technology
                </h3>
                <p className="text-neutral-400 font-medium">Computer Science Engineering</p>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold">
                2023 — 2027
              </div>
            </div>
            
            <p className="text-neutral-200 text-lg mb-4 font-medium">SAGE University, Bhopal</p>
            <p className="text-neutral-400 leading-relaxed italic">
              &quot;Focused on mastering full stack development and exploring the intersection of AI with modern web technologies.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔥 New & Attractive Bento Skill Card */
function BentoSkillCard({ 
  title, 
  skills, 
  icon, 
  description, 
  className 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode; 
  description?: string;
  className?: string;
}) {
  return (
    <div className={`
      relative group p-6 rounded-3xl border border-white/10 overflow-hidden 
      flex flex-col justify-between transition-all duration-500
      hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]
      ${className}
    `}>
      {/* Background Glow Effect */}
      <div className="absolute -right-10 -top-10 size-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
          {title}
          <ChevronRight className="size-4 text-white/0 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
        </h3>
        {description && (
          <p className="text-neutral-500 text-sm mb-4 leading-relaxed group-hover:text-neutral-400 transition-colors">
            {description}
          </p>
        )}
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-white/5 border border-white/5 text-neutral-400 group-hover:border-white/10 group-hover:text-white transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
}
