const stacks = [
  {
    title: "Frontend Engineering",
    description:
      "Building scalable and responsive interfaces with clean architecture and modern UI systems.",
    tech: ["React", "Next.js", "Redux", "Tailwind"],
    color: "from-cyan-400 to-blue-500",
    border: "hover:border-cyan-400/40",
    icon: "</>",
  },
  {
    title: "Backend Systems",
    description:
      "Designing scalable APIs and backend architectures optimized for performance and reliability.",
    tech: ["Django", "Node.js", "REST API"],
    color: "from-emerald-400 to-green-500",
    border: "hover:border-emerald-400/40",
    icon: "{ }",
  },
  {
    title: "CMS & Web Solutions",
    description:
      "Developing fast and SEO-focused business websites with modern web solutions.",
    tech: ["WordPress", "SEO"],
    color: "from-violet-400 to-purple-500",
    border: "hover:border-violet-400/40",
    icon: "⚡",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
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
            px-4 py-2
            rounded-full
            text-xs
            border border-white/10
            bg-white/5
            backdrop-blur-md
            text-slate-300
          "
          >
            Technologies
          </span>

          <h2
            className="
            mt-6
            text-4xl md:text-5xl
            font-extrabold
            tracking-tight
            text-white
          "
          >
            Tech Stack
          </h2>

          <p
            className="
            mt-5
            max-w-2xl
            text-slate-300
            leading-7
            text-base md:text-lg
          "
          >
            Technologies and tools I use to build scalable,
            modern, and high-performance web applications.
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

          {stacks.map((stack, index) => (
            <div
              key={index}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                transition duration-300
                hover:-translate-y-2
                ${stack.border}
              `}
            >

              {/* Glow */}
              <div
                className={`
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                bg-gradient-to-br
                ${stack.color}
                blur-3xl
                transition
              `}
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`
                  inline-flex
                  items-center justify-center
                  w-12 h-12
                  rounded-2xl
                  text-lg font-bold
                  bg-gradient-to-r
                  ${stack.color}
                  text-white
                  shadow-lg
                `}
                >
                  {stack.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                  mt-6
                  text-2xl
                  font-bold
                  text-white
                "
                >
                  {stack.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  mt-4
                  text-slate-300
                  text-sm
                  leading-7
                "
                >
                  {stack.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {stack.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      border border-white/10
                      bg-black/20
                      text-slate-300
                    "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}