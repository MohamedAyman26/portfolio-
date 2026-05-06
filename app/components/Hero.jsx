export default function Hero() {
  return (
    <section
      className="
      relative min-h-screen
      flex items-center justify-center
      overflow-hidden
      bg-[#050816]
      text-white
      px-6
    "
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-cyan-500/10 via-transparent to-blue-500/10" />

      {/* Glow Effects */}
      <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px]
                      bg-cyan-500/20 blur-2xl rounded-full 
                      top-[-120px] left-[-120px]" />

      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]
                      bg-blue-500/20 blur-2xl rounded-full 
                      bottom-[-120px] right-[-120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]
                      bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                      bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Badge */}
        <span
          className="
          inline-flex items-center gap-2
          text-xs md:text-sm
          px-4 py-2 mb-8
          rounded-full
          border border-white/10
          bg-white/5 backdrop-blur-md
          text-slate-300
        "
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Full-Stack Developer
        </span>

        {/* Title */}
        <h1
          className="
          text-4xl sm:text-5xl md:text-7xl
          font-extrabold
          tracking-tight
          leading-tight
        "
        >
          Mohamed Ayman
        </h1>

        {/* Gradient Subtitle */}
        <h2
          className="
          mt-5
          text-lg sm:text-xl md:text-2xl
          font-medium
          bg-gradient-to-r
          from-cyan-400 to-blue-500
          text-transparent bg-clip-text
        "
        >
          Building scalable systems & modern web experiences
        </h2>

        {/* Description */}
        <p
          className="
          mt-6
          text-slate-300
          text-base md:text-lg
          leading-7 md:leading-8
          max-w-2xl
          mx-auto
        "
        >
          I design and develop high-performance backend systems
          and clean, responsive interfaces focused on scalability,
          performance, and real-world impact.
        </p>

        {/* Buttons */}
        <div
          className="
          mt-10
          flex flex-col sm:flex-row
          justify-center
          gap-4
        "
        >

          {/* Primary */}
          <a
            href="#projects"
            className="
            px-8 py-3
            rounded-full
            bg-gradient-to-r
            from-cyan-500 to-blue-500
            text-white
            font-medium
            shadow-lg shadow-cyan-500/20
            hover:scale-105
            transition duration-300
          "
          >
            View Work
          </a>

          {/* Secondary */}
          <a
            href="#contact"
            className="
            px-8 py-3
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition duration-300
          "
          >
            Contact
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">

          <div
            className="
            w-6 h-10
            rounded-full
            border border-white/10
            flex justify-center
            p-2
          "
          >
            <div
              className="
              w-1 h-2
              rounded-full
              bg-cyan-400
              animate-bounce
            "
            />
          </div>

        </div>

      </div>

    </section>
  );
}