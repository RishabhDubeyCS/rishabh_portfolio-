"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, X, MessageSquare, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm Rishabh's AI assistant. I can tell you about my skills, projects, or my journey as a developer. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const getResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    // Greeting / Identity
    if (q.includes("who are you") || q.includes("your name") || q.includes("who is rishabh")) {
      return "I'm Rishabh Dubey, a student Full Stack Developer pursuing my B.Tech in CSE at SAGE University. I specialize in building scalable web applications using the MERN stack and Next.js. I'm passionate about the intersection of AI and web development!";
    }

    // Projects
    if (q.includes("project") || q.includes("build") || q.includes("work")) {
      return "I've built several projects, including 'Steam Talk' (a real-time community platform), 'Wanderlust' (an Airbnb-style app), and a 'Real-time Object Detection Dashboard' using TensorFlow.js. I focus on clean architecture and scalability. Would you like to see my projects page?";
    }

    // Skills / Tech Stack
    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("use")) {
      return "My core stack is MERN (MongoDB, Express, React, Node.js) and Next.js with TypeScript. I also have experience with AI tools like OpenAI API and LangChain, as well as Java and Python for backend logic. I'm always learning new things to stay ahead!";
    }

    // Education / SAGE
    if (q.includes("education") || q.includes("college") || q.includes("university") || q.includes("study") || q.includes("sage")) {
      return "I'm currently a B.Tech Computer Science student at SAGE University, Bhopal (Batch 2023-2027). My studies focus on software engineering, data structures, and modern web technologies. I'm constantly bridging the gap between academic theory and industry practice.";
    }

    // Hiring / Internship / Job
    if (q.includes("hire") || q.includes("job") || q.includes("internship") || q.includes("work for us")) {
      return "I'm currently open to internship opportunities where I can contribute to real-world products and learn from experienced teams! I'm confident in my full-stack skills and eager to bring value to a growing project. Feel free to contact me!";
    }

    // Contact
    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return "You can reach me through the contact section at the bottom of the page, or check out my social links in the footer. I'd love to chat about potential collaborations or opportunities!";
    }

    // Default / Unknown
    if (q.includes("help") || q.includes("can you do")) {
      return "I can tell you about my technical skills, walkthrough my favorite projects, or share my career goals as a developer. Just ask me something like 'What projects have you built?'";
    }

    return "I'm still learning about that specific topic, but I'm always improving! I'd love to talk more about my web development projects or my skills in the MERN stack. I can show you what I've built if you're interested.";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response following the persona rules
    setTimeout(() => {
      const botResponse = getResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: botResponse },
      ]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mb-4 w-[350px] sm:w-[400px] max-h-[500px] shadow-2xl"
          >
            <Card className="flex flex-col h-[500px] border-orange-500/20 bg-background/95 backdrop-blur-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-orange-500/10 bg-orange-500/5">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <Bot size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Rishabh&apos;s AI</p>
                    <div className="flex items-center gap-1">
                      <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Online</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="size-8 rounded-full hover:bg-orange-500/10"
                >
                  <X size={18} />
                </Button>
              </div>

              {/* Message List */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-orange-500/20"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-end gap-2",
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <div className={cn(
                      "size-7 rounded-full flex items-center justify-center flex-shrink-0 text-white",
                      message.role === "user" ? "bg-primary" : "bg-orange-500"
                    )}>
                      {message.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                      message.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-br-none" 
                        : "bg-muted text-foreground rounded-bl-none border border-orange-500/10"
                    )}>
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-end gap-2">
                    <div className="size-7 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      <Bot size={14} />
                    </div>
                    <div className="bg-muted text-foreground rounded-2xl rounded-bl-none px-4 py-2 text-sm border border-orange-500/10">
                      <Loader2 size={14} className="animate-spin" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-orange-500/10">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="flex gap-2"
                >
                  <Input
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-muted/50 border-orange-500/10 focus-visible:ring-orange-500/30"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={!input.trim() || isLoading}
                    className="bg-orange-500 hover:bg-orange-600 text-white shrink-0"
                  >
                    <Send size={18} />
                  </Button>
                </form>
                <p className="text-[10px] text-center mt-2 text-muted-foreground">
                  AI can make mistakes. Built with ❤️ by Rishabh.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "size-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-colors duration-300",
          isOpen ? "bg-orange-600" : "bg-orange-500"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
