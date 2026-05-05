export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Tech Stack
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg">
          Technologies I use to build scalable systems and modern web applications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Frontend */}
        <div className="group relative p-6 rounded-2xl bg-[#0f172a] border border-white/10 
                        hover:border-blue-500/40 transition duration-300 hover:-translate-y-2">

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                          bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl transition" />

          <div className="relative z-10">

            {/* Icon */}
            <div className="mb-4 text-blue-400 text-2xl">⚛️</div>

            <h3 className="text-xl font-semibold mb-3">
              Frontend Engineering
            </h3>

            <p className="text-gray-400 text-sm mb-5 leading-6">
              Building scalable UI systems with clean state management and performance focus.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Redux", "Tailwind"].map((t) => (
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

          </div>
        </div>

        {/* Backend */}
        <div className="group relative p-6 rounded-2xl bg-[#0f172a] border border-white/10 
                        hover:border-green-500/40 transition duration-300 hover:-translate-y-2">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                          bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl transition" />

          <div className="relative z-10">

            <div className="mb-4 text-green-400 text-2xl">🛠️</div>

            <h3 className="text-xl font-semibold mb-3">
              Backend Systems
            </h3>

            <p className="text-gray-400 text-sm mb-5 leading-6">
              Designing APIs and scalable architectures optimized for real-world usage.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Django", "Node.js", "REST API"].map((t) => (
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

          </div>
        </div>

        {/* CMS */}
        <div className="group relative p-6 rounded-2xl bg-[#0f172a] border border-white/10 
                        hover:border-purple-500/40 transition duration-300 hover:-translate-y-2">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                          bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl transition" />

          <div className="relative z-10">

            <div className="mb-4 text-purple-400 text-2xl">🌐</div>

            <h3 className="text-xl font-semibold mb-3">
              CMS & Web Solutions
            </h3>

            <p className="text-gray-400 text-sm mb-5 leading-6">
              Delivering fast and SEO-optimized business websites using WordPress.
            </p>

            <div className="flex flex-wrap gap-2">
              {["WordPress", "SEO"].map((t) => (
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

          </div>
        </div>

      </div>

    </section>
  );
}