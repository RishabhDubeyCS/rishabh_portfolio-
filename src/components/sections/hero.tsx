"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[40rem] lg:h-screen w-full overflow-hidden bg-background antialiased md:items-center md:justify-center py-20 lg:py-0">
      
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px]",
          "dark:[background-image:linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="currentColor"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 text-center">
        
        {/* Heading */}
        <h1 className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          Hi, I&apos;m Rishabh Dubey 
        </h1>

        {/* Subheading */}
       <h2 className="mt-4 text-lg md:text-2xl text-muted-foreground font-medium">
          Full Stack Developer & AI-Driven Applications
       </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground/80 leading-relaxed">
          Building intelligent products at the intersection of Full Stack Development
          and Artificial Intelligence. I design and develop scalable applications that
          leverage AI to enhance user experience, automate workflows, and deliver real-world impact.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all transform hover:scale-105"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="rounded-lg border border-input bg-background px-8 py-3 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-105"
          >
            Contact Me
          </Link>

          <a
            href="/resume.pdf"
            download="Rishabh_Dubey_Resume.pdf"
            className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-8 py-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-all transform hover:scale-105"
          >
            <Download className="size-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
