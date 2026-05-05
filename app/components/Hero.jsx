export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-[#0B0F19] text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-blue-500/10 via-transparent to-purple-500/10" />

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Grid Overlay (لمسة تقيلة) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">

        {/* Small Badge */}
        <span className="inline-block text-xs px-3 py-1 mb-6 rounded-full 
                         bg-white/5 border border-white/10 text-gray-400">
          Full-Stack Developer
        </span>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Mohamed Ayman
        </h1>

        {/* Gradient Highlight */}
        <h2 className="mt-4 text-xl md:text-2xl font-medium 
                       bg-gradient-to-r from-blue-400 to-purple-500 
                       text-transparent bg-clip-text">
          Building scalable systems & modern web experiences
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-lg leading-7">
          I design and develop high-performance backend systems and clean,
          responsive interfaces that solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#projects"
            className="px-7 py-3 rounded-full 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       text-white font-medium
                       hover:scale-105 hover:opacity-90 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full 
                       border border-white/20 
                       hover:bg-white/10 transition"
          >
            Contact
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="w-[2px] h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-white animate-bounce" />
          </div>
        </div>

      </div>

    </section>
  );
}