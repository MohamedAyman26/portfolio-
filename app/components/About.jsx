export default function About() {
  return (
    <section
      id="about"
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

      {/* Grid */}
      <div
        className="
        max-w-6xl
        mx-auto
        relative z-10
        grid
        md:grid-cols-2
        gap-14 md:gap-20
        items-center
      "
      >

        {/* LEFT */}
        <div className="space-y-8">

          {/* Badge */}
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
            About Me
          </span>

          {/* Title */}
          <div>

            <h2
              className="
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold
              tracking-tight
              leading-tight
              text-white
            "
            >
              I don’t just build apps,
              <br />

              <span
                className="
                bg-gradient-to-r
                from-cyan-400 to-blue-500
                text-transparent bg-clip-text
              "
              >
                I engineer systems.
              </span>

            </h2>

            {/* Line */}
            <div
              className="
              mt-6
              h-[3px]
              w-28
              rounded-full
              bg-gradient-to-r
              from-cyan-400 to-blue-500
            "
            />

          </div>

          {/* Intro */}
          <p
            className="
            text-slate-300
            text-base md:text-lg
            leading-8
            max-w-lg
          "
          >
            Full-Stack Developer focused on building scalable,
            high-performance systems and modern digital experiences
            that solve real-world problems.
          </p>

          {/* Stats */}
          <div
            className="
            grid
            grid-cols-3
            gap-4 md:gap-6
            pt-4
          "
          >

            {[
              { value: "10+", label: "Projects" },
              { value: "3+", label: "Stacks" },
              { value: "100%", label: "Focus" },
            ].map((item) => (
              <div
                key={item.label}
                className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                p-4
                text-center
              "
              >

                <p
                  className="
                  text-2xl md:text-3xl
                  font-bold
                  text-white
                "
                >
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
          space-y-6
          text-slate-300
          text-base md:text-lg
          leading-8
        "
        >

          <p
            className="
            hover:text-white
            transition
          "
          >
            I specialize in backend engineering using Django and Node.js,
            focusing on scalable architectures, API development,
            and performance optimization.
          </p>

          <p
            className="
            hover:text-white
            transition
          "
          >
            On the frontend, I build responsive and modern interfaces
            using React, Next.js, and Tailwind CSS with a strong focus
            on clean UX and maintainable code.
          </p>

          <p
            className="
            hover:text-white
            transition
          "
          >
            My goal is not just writing code —
            it’s building systems that scale,
            perform efficiently, and deliver real value.
          </p>

          {/* Skills Card */}
          <div
            className="
            mt-8
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
          "
          >

            <p className="text-white font-semibold text-lg">
              Core Strengths
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              {[
                "API Design",
                "System Architecture",
                "Performance Optimization",
                "Clean Code",
                "Responsive UI",
                "Scalable Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="
                  px-4 py-2
                  rounded-full
                  text-sm
                  border border-white/10
                  bg-black/20
                  text-slate-300
                "
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