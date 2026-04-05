"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Marquee from "@/components/magicui/marquee";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "Svelte",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "shadcn/ui",
    "Sass",
    "HTML/CSS",
    "Framer Motion",
    "Three.js",
    "Redux",
    "Zustand",
    "React Query",
    "Vite",
    "Webpack",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Spring Boot",
    "Spring Cloud",
    "Spring Security",
    "Django",
    "FastAPI",
    "NestJS",
  ],
  Database: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Elasticsearch",
    "Supabase",
    "PlanetScale",
  ],
  DevOps: [
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Jenkins",
    "Terraform",
    "AWS",
    "Vercel",
    "Netlify",
  ],
  Tools: [
    "VS Code",
    "IntelliJ IDEA",
    "Postman",
    "Swagger",
    "Figma",
    "Storybook",
    "Git",
    "Nginx",
  ],
  Testing: [
    "Jest",
    "React Testing Library",
    "Playwright",
    "Cypress",
    "JUnit",
    "Mockito",
  ],
  Others: [
    "JWT",
    "OAuth2",
    "GraphQL",
    "Kafka",
    "RabbitMQ",
    "Redis",
    "Socket.io",
    "Stripe",
    "Cloudinary",
    "LangChain",
    "OpenAI API",
  ],
};

const techLogos = [
  "react", "nextdotjs", "angular", "vuedotjs", "svelte", "tailwindcss",
  "nodedotjs", "express", "springboot", "django", "fastapi", "nestjs",
  "mongodb", "postgresql", "mysql", "elasticsearch", "supabase", "docker",
  "kubernetes", "githubactions", "jenkins", "terraform", "amazonwebservices",
  "vercel", "typescript", "javascript", "python", "java", "go", "rust"
];

const Skill = () => {
  return (
    <section className="py-20 px-4 min-h-screen bg-black text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            My Tech Stack
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Magic UI Marquee for Tech Logos */}
        <div className="relative mb-20 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {techLogos.map((logo) => (
              <div key={logo} className="mx-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={`https://cdn.simpleicons.org/${logo}`}
                  alt={logo}
                  className="h-12 w-12 object-contain brightness-0 invert opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>

        {/* Skills Grid with Shadcn Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <Card
              key={category}
              className="bg-zinc-900/50 border-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-2 w-2 rounded-full bg-purple-500 group-hover:animate-pulse" />
                  <h3 className="text-2xl font-bold text-zinc-100">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-zinc-800/50 hover:bg-purple-500/20 hover:text-purple-300 transition-all border-zinc-700/50 text-zinc-300 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
