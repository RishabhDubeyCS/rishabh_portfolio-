"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck, Zap, Globe, Briefcase } from "lucide-react";
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

const certificates = [
  {
    title: "Google Analytics Certification",
    desc: "Sharpened my ability to turn data into insights and measure real business impact through user interaction analysis.",
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0",
    tag: "Analytics",
    icon: <Globe className="size-5 text-blue-400" />,
    color: "from-blue-500/20",
  },
  {
    title: "AWS Billing & Cost Management",
    desc: "Focused on cloud financial management and cost optimization strategies within the Amazon Web Services ecosystem.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tag: "Cloud",
    icon: <Zap className="size-5 text-orange-400" />,
    color: "from-orange-500/20",
  },
  {
    title: "AI / Machine Learning",
    desc: "Demonstrated deep understanding of AI concepts and proficiency in ML algorithms through intensive study.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tag: "AI/ML",
    icon: <ShieldCheck className="size-5 text-purple-400" />,
    color: "from-purple-500/20",
  },
  {
    title: "Generative AI Workshop",
    desc: "Hands-on experience with LLMs and Generative models conducted by industry experts from IIT Delhi.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8d",
    tag: "GenAI",
    icon: <Zap className="size-5 text-cyan-400" />,
    color: "from-cyan-500/20",
  },
  {
    title: "Klaviyo Product Certificate",
    desc: "Proficiency in marketing automation and leveraging customer data platforms for high-conversion workflows.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tag: "Marketing",
    icon: <Briefcase className="size-5 text-emerald-400" />,
    color: "from-emerald-500/20",
  },
];

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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative h-full flex flex-col overflow-hidden bg-neutral-900/40 border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Image Holder */}
                <CardHeader className="p-0 relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <div className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                      {item.icon}
                    </div>
                  </div>
                </CardHeader>

                {/* Body Content */}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-cyan-500/5 text-cyan-400 border-cyan-500/20 mb-3 px-3">
                      {item.tag}
                    </Badge>
                    <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </CardDescription>
                </CardContent>

                {/* Footer Link */}
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-white/5 hover:bg-cyan-500 hover:text-black text-white border border-white/10 hover:border-cyan-500 transition-all duration-300 flex items-center gap-2 group/btn"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
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
