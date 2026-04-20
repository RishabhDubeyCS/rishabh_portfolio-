import Hero from "@/components/sections/hero";
import ScrollStory from "@/components/sections/scroll-story";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import GlobalReach from "@/components/sections/global-reach";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ScrollStory />
      <Projects />
      <Testimonials />
      <GlobalReach />
      <Contact />
    </main>
  );
}
