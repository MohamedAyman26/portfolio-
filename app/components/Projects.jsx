const projects = [
  {
    title: "E-commerce Backend API",
    problem: "Needed scalable product & user management system",
    solution: "Built REST API with Django and optimized DB queries",
    result: "Fast responses with clean architecture",
    tech: ["Django", "PostgreSQL", "REST API"],
    github: "https://github.com/MohamedAyman26",
  },
  {
    title: "Full Stack Web App",
    problem: "Create dynamic UI with real-time data",
    solution: "Used Next.js with Node.js backend integration",
    result: "Smooth UX and efficient API handling",
    tech: ["Next.js", "Node.js", "Tailwind"],
    github: "https://github.com/MohamedAyman26",
  },
  {
    title: "Business Website",
    problem: "Build fast SEO-friendly website",
    solution: "Custom WordPress theme optimized for performance",
    result: "Improved loading speed and search visibility",
    tech: ["WordPress", "SEO"],
    github: "https://github.com/MohamedAyman26",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Selected Work
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg">
          A selection of projects focused on scalability, performance, and real-world impact.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-[#0f172a] border border-white/10 
                       hover:border-blue-500/40 transition duration-300 hover:-translate-y-2"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                            rounded-2xl transition" />

            <div className="relative z-10">

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              {/* Content */}
              <div className="space-y-3 text-sm text-gray-400 leading-6">

                <p>
                  <span className="text-white font-medium">Problem:</span> {project.problem}
                </p>

                <p>
                  <span className="text-white font-medium">Solution:</span> {project.solution}
                </p>

                <p>
                  <span className="text-white font-medium">Result:</span> {project.result}
                </p>

              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-white/5 border border-white/10 
                               hover:bg-white/10 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex justify-between items-center">

                <span className="text-xs text-gray-500">
                  Case Study
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  View →
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}