"use client";

import Image from "next/image";
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

const data = [
  {
    title: "Google Analytics Certification",
    desc: "What started as a curiosity about how users actually interact with products has now turned into a Google Analytics Certification. This journey sharpened my ability to turn data into insights and measure real business impact.",
    img: "https://images.unsplash.com/photo-1551288049-bbda38a594a0",
    tag: "Analytics",
  },
  {
    title: "AWS Billing & Cost Management",
    desc: "Amazon Web Services Training and Certification focused on Billing and Cost Management. Sharpening skills in cloud financial management and cost optimization strategies.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tag: "Cloud",
  },
  {
    title: "AI / Machine Learning",
    desc: "Certificate of Achievement from DevTown. Successfully completed the course with dedication and proficiency, demonstrating a deep understanding of AI and Machine Learning concepts.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tag: "AI/ML",
  },
  {
    title: "Generative AI Workshop",
    desc: "Participated in the Generative AI model workshop conducted by Mr. Trivikrama (IIT Delhi alumnus). Designed to equip students with skills essential in the AI era.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8d",
    tag: "Generative AI",
  },
  {
    title: "Klaviyo Product Certificate",
    desc: "Issued Dec 2025 · Expires Dec 2027. Credential ID: 170058414. Proficiency in marketing automation and customer data platform utilization.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tag: "Marketing",
  },
];

export default function CertificatesPage() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & Achievements 🏆
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A journey of continuous learning and professional growth. Here are some of the certifications and workshops I&apos;ve completed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              {/* Image */}
              <CardHeader className="p-0">
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg text-white">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {item.tag}
                  </Badge>
                </div>

                <CardDescription className="text-neutral-400 text-sm">
                  {item.desc}
                </CardDescription>
              </CardContent>

              {/* Footer */}
              <CardFooter className="p-5 pt-0 flex gap-3">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  View Certificate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}