"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    try {
      // 1. Initialize EmailJS (Crucial for v4)
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.replace(/['"]+/g, "");
      if (PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
      }

      // 2. Clean Service and Template IDs
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.replace(/['"]+/g, "");
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.replace(/['"]+/g, "");

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Missing EmailJS configuration. Please check your .env.local file.");
      }

      console.log("Sending form...");

      // 3. Use sendForm (most reliable for capturing all fields including hidden ones)
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      console.log("SUCCESS!", result.status, result.text);
      setStatus("success");
      formRef.current.reset();
    } catch (err: unknown) {
      console.error("--- CONTACT FORM ERROR ---");
      // Handle the case where EmailJS returns a string instead of an object
      const errorObj = err as Record<string, unknown>;
      const errorDetail = typeof err === 'string' ? err : (errorObj?.text || errorObj?.message || "Check console for details");
      console.error("Error Detail:", errorDetail);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return <section id="contact" className="py-24 bg-black min-h-[600px]" />;

  return (
    <section id="contact" className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-cyan-400">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Have a project in mind? Let&apos;s build something amazing together.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden field for EmailJS recipient with guaranteed fallback */}
            <input 
              type="hidden" 
              name="to_email" 
              value={(process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_EMAIL || "dubeyrishabh.dev@gmail.com").replace(/['"]+/g, "") || ""}
              readOnly
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Name</label>
                <Input 
                  name="user_name"
                  placeholder="John Doe" 
                  required 
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Email</label>
                <Input 
                  name="user_email"
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Subject</label>
              <Input 
                name="subject"
                placeholder="Project Inquiry" 
                required 
                className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Message</label>
              <textarea 
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-6 text-lg transition-all transform hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-center text-green-400 font-medium animate-pulse">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
