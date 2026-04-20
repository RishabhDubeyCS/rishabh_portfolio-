"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <section className="py-24 flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Words of <span className="text-cyan-400">Wisdom</span>
        </h2>
        <p className="text-neutral-400 text-lg">
          Insights from industry leaders that inspire my development process and philosophy.
        </p>
      </div>
      
      <InfiniteMovingCards
        items={quotes}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const quotes = [
  {
    quote:
      "Consistency beats talent when talent doesn’t work hard. Show up every day and improve 1% daily.",
    name: "James Clear",
    title: "Author of Atomic Habits",
  },
  {
    quote:
      "Don’t chase perfection, chase progress. Every bug you fix makes you a better developer.",
    name: "Sheryl Sandberg",
    title: "COO of Meta",
  },
  {
    quote:
      "The best way to learn to code is to build things. Start small, but start now.",
    name: "Mark Zuckerberg",
    title: "Co-founder of Facebook",
  },
  {
    quote:
      "Stay hungry, stay foolish. Never stop learning and experimenting.",
    name: "Steve Jobs",
    title: "Co-founder of Apple",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    name: "Harold Abelson",
    title: "Computer Scientist",
  },
  {
    quote:
      "First, solve the problem. Then, write the code.",
    name: "John Johnson",
    title: "Computer Scientist",
  },
];
