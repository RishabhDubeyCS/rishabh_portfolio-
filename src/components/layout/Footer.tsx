"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/RishabhDubeyCS?tab=repositories",
    label: "GitHub",
    icon: Code2,
  },
  {
    href: "https://www.linkedin.com/in/rishabh-dubey-362500298/",
    label: "LinkedIn",
    icon: Globe,
  },
  {
    href: "mailto:rishabhdubeycse@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-background/50 backdrop-blur-sm pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Status */}
          <div className="sm:col-span-2 space-y-6">
            <div className="flex flex-col gap-2 text-center sm:text-left items-center sm:items-start">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Rishabh Dubey
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-sm">
                Full-stack Developer crafting modern, high-performance web experiences with a focus on impact and clean architecture.
              </p>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Badge variant="outline" className="px-3 py-1 border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400 gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Available for new projects
              </Badge>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-orange-500 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <link.icon className="size-4 group-hover:text-orange-500 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="relative group mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-card border border-border/50 rounded-2xl p-6 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Ready to ship something great?</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Let&apos;s turn your vision into a production-ready reality.</p>
            </div>
            <Link 
              href="/#contact" 
              className="w-full sm:w-auto bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-foreground/10"
            >
              Get in touch
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border/40 gap-6 text-sm text-muted-foreground">
          <p>© {currentYear} Rishabh Dubey. Built with Next.js, Tailwind 4 and Framer Motion.</p>
          <div className="flex items-center gap-8">
            <Link href="/#home" className="hover:text-foreground transition-colors flex items-center gap-1 group">
              Back to top
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUpRight className="size-3 -rotate-45" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
