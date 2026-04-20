import React from "react";
import { ShieldCheck, Zap, Globe, Briefcase } from "lucide-react";

export interface Certificate {
  title: string;
  desc: string;
  img: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    title: "Google Analytics Certification",
    desc: "Sharpened my ability to turn data into insights and measure real business impact through user interaction analysis.",
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=800",
    tag: "Analytics",
    icon: <Globe className="size-5 text-blue-400" />,
    color: "from-blue-500/20",
    link: "#",
  },
  {
    title: "AWS Billing & Cost Management",
    desc: "Focused on cloud financial management and cost optimization strategies within the Amazon Web Services ecosystem.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tag: "Cloud",
    icon: <Zap className="size-5 text-orange-400" />,
    color: "from-orange-500/20",
    link: "#",
  },
  {
    title: "AI / Machine Learning",
    desc: "Demonstrated deep understanding of AI concepts and proficiency in ML algorithms through intensive study.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tag: "AI/ML",
    icon: <ShieldCheck className="size-5 text-purple-400" />,
    color: "from-purple-500/20",
    link: "#",
  },
  {
    title: "Generative AI Workshop",
    desc: "Hands-on experience with LLMs and Generative models conducted by industry experts from IIT Delhi.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8d?auto=format&fit=crop&q=80&w=800",
    tag: "GenAI",
    icon: <Zap className="size-5 text-cyan-400" />,
    color: "from-cyan-500/20",
    link: "#",
  },
  {
    title: "Klaviyo Product Certificate",
    desc: "Proficiency in marketing automation and leveraging customer data platforms for high-conversion workflows.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tag: "Marketing",
    icon: <Briefcase className="size-5 text-emerald-400" />,
    color: "from-emerald-500/20",
    link: "#",
  },
];
