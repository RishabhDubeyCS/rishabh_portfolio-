"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Search, CheckCircle2, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { certificates, Certificate } from "@/lib/certificates-data";

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = certificates.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cert.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tighter">
              Professional <span className="text-orange-600 dark:text-orange-400">Credentials.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A record of technical certifications and academic milestones demonstrating 
              expertise in modern software engineering and data science.
            </p>
          </div>
          
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input 
              placeholder="Search certificates..." 
              className="pl-10 w-full bg-secondary/50 border-border focus:ring-orange-500/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* --- CERTIFICATES LIST --- */}
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                layout
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-2xl bg-card border border-border hover:border-orange-500/40 transition-all duration-300"
              >
                {/* Icon Column */}
                <div className="p-4 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                  <Trophy className="size-6" />
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {cert.title}
                    </h3>
                    <Badge variant="secondary" className="bg-secondary/50 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 border-none">
                      {cert.tag}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Action Column */}
                <div className="w-full md:w-auto pt-4 md:pt-0">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-black transition-all text-xs font-bold uppercase tracking-widest group/link"
                  >
                    Verify
                    <ExternalLink className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Verification Checkmark (Visual Flair) */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="size-4 text-orange-600 dark:text-orange-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-24 border border-dashed border-border rounded-3xl">
            <p className="text-muted-foreground">No certifications found matching your search.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center text-muted-foreground">
          <p className="text-sm">
            Continuous learning is part of my engineering DNA. More credentials incoming soon.
          </p>
        </div>

      </div>
    </main>
  );
}

