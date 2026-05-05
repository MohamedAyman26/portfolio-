export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 max-w-6xl mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <div className="space-y-8">

          {/* Badge */}
          <span className="inline-block text-xs px-3 py-1 rounded-full 
                           bg-white/5 border border-white/10 text-gray-400">
            About Me
          </span>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            I don’t just build apps,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              I engineer systems.
            </span>
          </h2>

          {/* Line */}
          <div className="h-[2px] w-28 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />

          {/* Short Intro */}
          <p className="text-gray-400 text-lg leading-7 max-w-md">
            Full-Stack Developer focused on performance, scalability,
            and building products that actually solve problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">

            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-xs text-gray-500">Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-gray-500">Focus</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6 text-gray-400 text-lg leading-8">

          <p className="hover:text-white transition">
            I build backend systems with Django and Node.js, focusing on clean
            architecture, performance optimization, and scalability.
          </p>

          <p className="hover:text-white transition">
            On the frontend, I create modern interfaces using React, Next.js,
            and Tailwind — keeping UX clean and responsive.
          </p>

          <p className="hover:text-white transition">
            My goal is not just to write code, but to design systems that last,
            scale, and deliver real value.
          </p>

          {/* Skills Highlight */}
          <div className="mt-8 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">

            <p className="text-white font-semibold mb-3">
              Core Strengths
            </p>

            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "API Design",
                "System Architecture",
                "Performance Optimization",
                "Clean Code",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}