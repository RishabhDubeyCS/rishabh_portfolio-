"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Award, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certificates, Certificate } from "@/lib/certificates-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function CertificateCard({ item }: { item: Certificate }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="group relative h-full flex flex-col overflow-hidden bg-neutral-900/40 border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
        
        {/* Visual Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

        {/* Image Holder */}
        <CardHeader className="p-0 relative h-56 overflow-hidden bg-neutral-800">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 z-10">
              <Loader2 className="size-8 text-cyan-500/50 animate-spin" />
            </div>
          )}
          
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-800 text-neutral-500 gap-2">
              <Award className="size-10 opacity-20" />
              <span className="text-xs font-medium uppercase tracking-wider">Credential Image</span>
            </div>
          ) : (
            <Image
              src={item.img}
              alt={item.title}
              fill
              className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
          
          {/* Tag & Icon Overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
             <div className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
               {item.icon}
             </div>
             <Badge variant="outline" className="bg-black/60 backdrop-blur-md text-cyan-400 border-cyan-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
               {item.tag}
             </Badge>
          </div>
        </CardHeader>

        {/* Body Content */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors mb-3 line-clamp-2">
            {item.title}
          </CardTitle>
          <CardDescription className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {item.desc}
          </CardDescription>
        </CardContent>

        {/* Footer Link */}
        <CardFooter className="p-6 pt-0 mt-auto">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button 
              className="w-full bg-white/5 hover:bg-cyan-500 hover:text-black text-white border border-white/10 hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn py-6 rounded-xl font-bold"
            >
              <span>Verify Credential</span>
              <ExternalLink className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-x-0 -top-10 h-32 bg-cyan-500/5 blur-[100px] -z-10 rounded-full"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6"
          >
            <Award className="size-4" />
            <span>Learning Milestones</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Certifications & <span className="text-cyan-400">Achievements</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            A validation of my technical skills and dedication to continuous improvement 
            in Full Stack Development, Cloud, and AI.
          </motion.p>
        </div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((item, index) => (
            <CertificateCard key={index} item={item} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-500 text-sm">
            Curious about more? Check out my <Link href="/projects" className="text-cyan-400 hover:underline">Projects</Link> to see these skills in action.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
