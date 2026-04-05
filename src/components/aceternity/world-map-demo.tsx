"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function GlobalReach() {
  return (
    <div className="py-32 bg-black w-full">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center px-4">
        
        <h2 className="font-bold text-2xl md:text-5xl text-white">
          Building{" "}
          <span className="text-cyan-400">
            {"Global Solutions".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          I develop scalable web applications that connect users across the globe.
          From India to international clients, I focus on building fast,
          responsive, and user-friendly digital experiences.
        </p>
      </div>

      {/* World Map */}
      <div className="mt-12">
        <WorldMap
          dots={[
            {
              start: { lat: 23.2599, lng: 77.4126 }, // Bhopal (YOU)
              end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            },
            {
              start: { lat: 23.2599, lng: 77.4126 },
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: 23.2599, lng: 77.4126 },
              end: { lat: 48.8566, lng: 2.3522 }, // Paris
            },
            {
              start: { lat: 23.2599, lng: 77.4126 },
              end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            },
            {
              start: { lat: 23.2599, lng: 77.4126 },
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney
            },
          ]}
        />
      </div>
    </div>
  );
}