"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/75 dark:bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm tracking-[0.24em] text-black/70 dark:text-white/70 uppercase transition hover:text-black dark:hover:text-white"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-base font-semibold tracking-normal text-cyan-600 dark:text-cyan-200">
            R
          </span>
          <span className="hidden sm:block">Rishabh Dubey</span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 transition hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-cyan-500 dark:bg-cyan-300 px-4 text-white dark:text-black hover:bg-cyan-600 dark:hover:bg-cyan-200 sm:inline-flex"
          >
            <Link href="/#contact">
              Hire Me
            </Link>
          </Button>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black dark:text-white transition hover:bg-black/10 dark:hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-black/10 dark:border-white/8 bg-black/[0.03] dark:bg-white/[0.03] px-4 py-3 text-sm font-medium text-black/80 dark:text-white/80 transition hover:border-cyan-500/30 dark:hover:border-cyan-300/30 hover:bg-cyan-500/8 dark:hover:bg-cyan-300/8 hover:text-black dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              size="sm"
              className="mt-2 h-11 rounded-2xl bg-cyan-500 dark:bg-cyan-300 text-white dark:text-black hover:bg-cyan-600 dark:hover:bg-cyan-200"
            >
              <Link href="/#contact" onClick={closeMenu}>
                Hire Me
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
