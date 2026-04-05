'use client';
import React, { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letters = "RISHABH".split("");

  const variants = {
    visible: (i: number) => ({
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.05,
      },
    }),
    hidden: { y: 200 },
  };

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setOpenPopUp(true);
    target.reset();
    setTimeout(() => {
      setOpenPopUp(false);
    }, 2000);
  };

  return (
    <footer
      className='relative h-full sm:pt-14 pt-8 bg-background text-foreground border-t border-border'
      ref={container}
    >
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='md:flex justify-between w-full gap-10'>
          <div className='flex-1'>
            <h2 className='md:text-4xl text-2xl font-semibold'>
              Let&apos;s do great work together
            </h2>
            <div className='pt-2 pb-6 md:w-96'>
              <p className='md:text-2xl text-xl py-4'>
                Sign up for my newsletter*
              </p>
              <div className='hover-button relative bg-foreground flex justify-between items-center border-2 overflow-hidden border-foreground rounded-full text-background hover:text-foreground md:text-2xl transition-colors duration-300'>
                <form
                  onSubmit={handleNewsLetterData}
                  className='relative z-10 grid grid-cols-6 w-full h-full group'
                >
                  <input
                    type='email'
                    name='newsletter_email'
                    required
                    className='border-none bg-transparent py-3 px-6 col-span-5 focus:outline-none placeholder:text-background/50 group-hover:placeholder:text-foreground/50'
                    placeholder='Your Email *'
                  />
                  <button
                    type='submit'
                    className='cursor-pointer w-full flex items-center justify-center bg-background text-foreground h-full col-span-1 border-l border-foreground hover:bg-accent transition-colors'
                  >
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      className='w-6 h-6'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
              {openPopup && (
                <p className="text-sm mt-2 text-green-500 font-medium">
                  Thanks for signing up!
                </p>
              )}
            </div>
          </div>

          <div className='flex gap-16 md:mt-0 mt-8'>
            <ul className="space-y-3">
              <li className='text-sm font-bold tracking-widest text-muted-foreground uppercase'>
                SITEMAP
              </li>
              <li className='text-lg font-medium'>
                <Link href='/#home' className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className='text-lg font-medium'>
                <Link href='/projects' className="hover:text-primary transition-colors">Projects</Link>
              </li>
              <li className='text-lg font-medium'>
                <Link href='/about' className="hover:text-primary transition-colors">About</Link>
              </li>
              <li className='text-lg font-medium'>
                <Link href='/#contact' className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className='text-sm font-bold tracking-widest text-muted-foreground uppercase'>
                SOCIAL
              </li>
              <li className='text-lg font-medium'>
                <a
                  href='https://linkedin.com/'
                  target='_blank'
                  rel="noopener noreferrer"
                  className='hover:underline hover:text-primary transition-colors'
                >
                  LinkedIn
                </a>
              </li>
              <li className='text-lg font-medium'>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel="noopener noreferrer"
                  className='hover:underline hover:text-primary transition-colors'
                >
                  GitHub
                </a>
              </li>
              <li className='text-lg font-medium'>
                <a
                  href='mailto:rishabh@example.com'
                  className='hover:underline hover:text-primary transition-colors'
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-y border-border md:py-8 py-4 mt-8 overflow-hidden'>
          <div
            ref={ref}
            className='flex justify-center items-center select-none'
          >
            <div className="flex overflow-hidden">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={variants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="text-[15vw] md:text-[12vw] font-black leading-none text-primary tracking-tighter inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-6 text-sm text-muted-foreground'>
          <span className='font-medium'>
            &copy; {new Date().getFullYear()} Rishabh Dubey. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link href='#' className='hover:text-foreground transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-foreground transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
