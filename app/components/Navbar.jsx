"use client";

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-4 left-1/2 -translate-x-1/2
      z-50
      w-[95%] md:w-auto
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      rounded-2xl
      shadow-2xl shadow-black/20
    "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        px-5 md:px-6
        py-3
        flex items-center justify-between
        gap-6
      "
      >

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
        >

          {/* Icon */}
          <div
            className="
            relative
            w-10 h-10
            rounded-xl
            overflow-hidden
            border border-white/10
            bg-gradient-to-br
            from-cyan-500/20 to-blue-500/20
            flex items-center justify-center
          "
          >

            {/* Glow */}
            <div
              className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              bg-cyan-400/20
              blur-xl
              transition
            "
            />

            <span
              className="
              relative
              text-lg font-bold
              bg-gradient-to-r
              from-cyan-300 to-blue-400
              text-transparent bg-clip-text
            "
            >
              M
            </span>

          </div>

          {/* Name */}
          <div className="hidden sm:block">

            <p className="text-white font-semibold leading-none">
              Mohamed
            </p>

            <span className="text-xs text-slate-400">
              Full-Stack Developer
            </span>

          </div>

        </a>

        {/* Links */}
        <div
          className="
          flex items-center
          gap-5 md:gap-8
          text-sm
        "
        >

          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
              relative
              text-slate-300
              hover:text-white
              transition
              group
            "
            >
              {item}

              {/* underline */}
              <span
                className="
                absolute left-0 -bottom-1
                w-0 h-[2px]
                bg-gradient-to-r
                from-cyan-400 to-blue-500
                transition-all duration-300
                group-hover:w-full
              "
              />

            </a>
          ))}

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="
          hidden md:flex
          items-center justify-center
          px-5 py-2.5
          rounded-xl
          bg-gradient-to-r
          from-cyan-500 to-blue-500
          text-white
          text-sm
          font-medium
          shadow-lg shadow-cyan-500/20
          hover:scale-105
          transition duration-300
        "
        >
          Let’s Talk
        </a>

      </div>

    </nav>
  );
}