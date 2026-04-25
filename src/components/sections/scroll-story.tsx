"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollStory() {
  return (
    <div className="relative bg-background">
      {/* SECTION 1 */}
      <section className="text-foreground h-screen w-full bg-background grid place-content-center sticky top-0 overflow-hidden z-10">
        <div className="absolute inset-0 dark:[background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="2xl:text-7xl text-4xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10"
        >
          Building scalable digital products <br />
          <span className="text-cyan-600 dark:text-cyan-400">that deliver real-world impact</span>
        </motion.h1>
      </section>

      {/* SECTION 2 */}
      <div className="h-screen w-full relative z-20">
        <section className="bg-secondary text-secondary-foreground grid place-content-center h-screen sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 dark:[background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-image:linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="2xl:text-7xl text-3xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10"
          >
            From idea to launch, I build <br />
            <span className="text-cyan-700 dark:text-cyan-400">with clean code & strong architecture</span>
          </motion.h2>
        </section>
      </div>

      {/* SECTION 3 */}
      <div className="h-screen w-full relative z-30">
        <section className="text-foreground h-screen w-full bg-background grid place-content-center sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 dark:[background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="2xl:text-7xl text-3xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10"
          >
            Constantly evolving, <br />
            <span className="text-cyan-600 dark:text-cyan-400">learning, and pushing boundaries</span>
          </motion.h2>
        </section>
      </div>
    </div>
  );
}
