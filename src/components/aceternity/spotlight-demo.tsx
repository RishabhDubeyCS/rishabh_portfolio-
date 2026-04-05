"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export default function HeroSection() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#00ffcc"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 text-center">
        
        {/* Heading */}
        <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          Hi, I&apos;m Rishabh Dubey 
        </h1>

        {/* Subheading */}
       <h2 className="mt-4 text-lg md:text-2xl text-neutral-300">
  Full Stack Developer • AI-Driven Applications
</h2>

        {/* Description */}
      <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-neutral-400 leading-relaxed">
  Building intelligent products at the intersection of Full Stack Development
  and Artificial Intelligence. I design and develop scalable applications that
  leverage AI to enhance user experience, automate workflows, and deliver real-world impact.
</p>
<p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-neutral-400 leading-relaxed">
  Full Stack Developer crafting AI-powered web applications that are fast,
  scalable, and built for real-world impact.
</p>
        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            View Projects
          </Link>

          <a
            href="/contact"
            className="rounded-lg border border-white px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}