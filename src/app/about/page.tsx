import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6">
      
      {/* ================= JOURNEY SECTION ================= */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>

        <p className="text-neutral-400 mb-10 max-w-2xl">
          Every great journey starts with a single step. Here’s how I began my
          path as a developer and how I continue to grow every day.
          Passionate Full Stack Developer focused on building scalable
          applications and impactful digital experiences.
        </p>

        <div className="space-y-6">

          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-cyan-300 font-semibold text-lg mb-1">
              The Beginning
            </h3>
            <p className="text-neutral-400">
              Started with curiosity for technology and problem-solving,
              learning programming fundamentals and web development basics.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-cyan-300 font-semibold text-lg mb-1">
              Building Skills
            </h3>
            <p className="text-neutral-400">
              Focused on mastering modern technologies and building real-world
              projects to strengthen development skills.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-cyan-300 font-semibold text-lg mb-1">
              Professional Growth
            </h3>
            <p className="text-neutral-400">
              Worked on diverse projects focusing on scalable, maintainable,
              and performance-driven applications.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-cyan-300 font-semibold text-lg mb-3">
              Continuous Learning
            </h3>

            <p className="text-neutral-400 mb-4">
              Constantly exploring new technologies and improving skills to
              deliver high-quality digital solutions.
            </p>

            <div className="space-y-2 text-neutral-400">
              <p><span className="text-white font-medium">Vision:</span> Transform ideas into real-world applications.</p>
              <p><span className="text-white font-medium">Precision:</span> Attention to detail in every line of code.</p>
              <p><span className="text-white font-medium">Passion:</span> Love for building impactful software.</p>
              <p><span className="text-white font-medium">Innovation:</span> Exploring modern technologies.</p>
              <p><span className="text-white font-medium">Excellence:</span> Scalable and user-focused products.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= SKILLS SECTION ================= */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Skills & Technologies 🚀
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <SkillCard title="Frontend" skills="React.js, Next.js, React Native" />
          <SkillCard title="Backend" skills="Node.js, Java, Python, TypeScript, Go, Spring Boot, Django, FastAPI, GraphQL, REST APIs" />
          <SkillCard title="Database" skills="PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Kafka" />
          <SkillCard title="DevOps" skills="AWS, Docker, Kubernetes, Terraform, Jenkins, CI/CD" />
          <SkillCard title="Tools" skills="Git, GitHub, Maven, Gradle, System Design, Agile, TDD" />
          <SkillCard title="AI / Advanced" skills="Machine Learning, Computer Vision, YOLO, Distributed Systems" />

        </div>
      </div>

      {/* ================= EDUCATION SECTION ================= */}
      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Education 🎓
        </h2>

        <div className="space-y-6">

        <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03]">
  <h3 className="text-cyan-300 font-semibold text-lg">
    Bachelor&apos;s Degree in Computer Science Engineering 
  </h3>
  <p className="text-neutral-400 text-sm mb-2">
    Sage University, Bhopal • 2023 — 2027
  </p>

  <p className="text-neutral-400 mb-3">
  Developed strong skills in full stack development, building scalable web
  applications using modern technologies and focusing on performance,
  clean architecture, and real-world problem solving.
</p>

</div>

        
        </div>
      </div>
    </div>
  );
}

/* 🔥 Reusable Skill Card */
function SkillCard({ title, skills }: { title: string; skills: string }) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
      <h3 className="text-cyan-300 font-semibold text-lg mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm">{skills}</p>
    </div>
  );
}