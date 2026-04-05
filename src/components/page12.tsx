'use client';
import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function ScrollStory() {
  return (
    <ReactLenis root>
      <main>
        <article>

          {/* SECTION 1 */}
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

          <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] relative z-10'>
  Building scalable digital products <br />
  that deliver real-world impact
</h1>
          </section>

          {/* SECTION 2 */}
          <section className='bg-neutral-200 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div className='absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%] relative z-10'>
              Building products from idea to launch <br />
with clean code and strong architecture
            </h1>
          </section>

          {/* SECTION 3 */}
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute inset-0 [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%] relative z-10'>
             From idea to launch <br />
I build products that truly matter
            </h1>
          </section>

        </article>
      </main>
    </ReactLenis>
  );
}