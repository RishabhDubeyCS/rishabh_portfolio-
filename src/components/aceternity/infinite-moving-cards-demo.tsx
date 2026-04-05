"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
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