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
    <section
      id="projects"
      className="
      relative
      py-24 md:py-32
      px-6
      bg-[#050816]
      overflow-hidden
    "
    >

      {/* Background Glow */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-br
        from-cyan-500/5
        via-transparent
        to-blue-500/5
        pointer-events-none
      "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-20">

          <span
            className="
            inline-flex
            text-xs
            px-4 py-2
            rounded-full
            border border-white/10
            bg-white/5
            text-slate-300
            backdrop-blur-md
          "
          >
            Featured Projects
          </span>

          <h2
            className="
            mt-6
            text-4xl md:text-5xl
            font-extrabold
            text-white
            tracking-tight
          "
          >
            Selected Work
          </h2>

          <p
            className="
            mt-5
            text-slate-300
            max-w-2xl
            leading-7
            text-base md:text-lg
          "
          >
            A selection of projects focused on scalability,
            performance, clean architecture, and modern user experiences.
          </p>

        </div>

        {/* Grid */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6 md:gap-8
        "
        >

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              hover:-translate-y-2
              hover:border-cyan-400/40
              transition duration-300
            "
            >

              {/* Glow */}
              <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                bg-gradient-to-br
                from-cyan-500/10
                to-blue-500/10
                transition
              "
              />

              {/* Top */}
              <div className="relative z-10">

                {/* Number */}
                <span className="text-xs text-slate-500">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3
                  className="
                  mt-4
                  text-2xl
                  font-bold
                  text-white
                  group-hover:text-cyan-300
                  transition
                "
                >
                  {project.title}
                </h3>

                {/* Content */}
                <div
                  className="
                  mt-6
                  space-y-4
                  text-slate-300
                  text-sm
                  leading-7
                "
                >

                  <p>
                    <span className="text-white font-medium">
                      Problem:
                    </span>{" "}
                    {project.problem}
                  </p>

                  <p>
                    <span className="text-white font-medium">
                      Solution:
                    </span>{" "}
                    {project.solution}
                  </p>

                  <p>
                    <span className="text-white font-medium">
                      Result:
                    </span>{" "}
                    {project.result}
                  </p>

                </div>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      border border-white/10
                      bg-black/20
                      text-slate-300
                    "
                    >
                      {t}
                    </span>
                  ))}

                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">

                  <span className="text-xs text-slate-500">
                    Case Study
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-sm
                    font-medium
                    text-cyan-400
                    hover:text-cyan-300
                    transition
                  "
                  >
                    View Project →
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}