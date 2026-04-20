"use client";

import { ReactLenis } from "lenis/react";
import React from "react";
import { motion } from "framer-motion";

export default function ScrollStory() {
  return (
    <ReactLenis root={false}>
      <div className="relative">
        {/* SECTION 1 */}
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 overflow-hidden">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="2xl:text-7xl text-4xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10"
          >
            Building scalable digital products <br />
            <span className="text-cyan-400">that deliver real-world impact</span>
          </motion.h1>
        </section>

        {/* SECTION 2 */}
        <section className="bg-neutral-200 text-black grid place-content-center h-screen sticky top-0 rounded-tr-[3rem] rounded-tl-[3rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="2xl:text-7xl text-3xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10"
          >
            From idea to launch, I build <br />
            <span className="text-cyan-600">with clean code & strong architecture</span>
          </motion.h2>
        </section>

        {/* SECTION 3 */}
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 overflow-hidden">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="2xl:text-7xl text-3xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10"
          >
            Constantly evolving, <br />
            <span className="text-cyan-400">learning, and pushing boundaries</span>
          </motion.h2>
        </section>
      </div>
    </ReactLenis>
  );
}
