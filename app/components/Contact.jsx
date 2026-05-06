export default function Contact() {
  return (
    <footer
      id="contact"
      className="
      relative
      py-24 md:py-32
      px-6
      overflow-hidden
      border-t border-white/10
      bg-[#050816]
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
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Heading */}
        <h2
          className="
          text-4xl sm:text-5xl md:text-7xl
          font-extrabold
          leading-tight
          tracking-tight
        "
        >
          Let’s build
          <br />

          <span
            className="
            bg-gradient-to-r
            from-cyan-400 to-blue-500
            text-transparent bg-clip-text
          "
          >
            something real.
          </span>

        </h2>

        {/* Description */}
        <p
          className="
          mt-6
          text-slate-300
          text-base md:text-lg
          max-w-2xl
          mx-auto
          leading-7
        "
        >
          Open to freelance projects, collaborations,
          and full-time opportunities focused on scalable
          systems and modern web experiences.
        </p>

        {/* CTA */}
        <div className="mt-10">

          <a
            href="mailto:amohamedayman32@gmail.com"
            className="
            inline-flex items-center justify-center
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
            Contact Me
          </a>

        </div>

        {/* Profile */}
        <div
          className="
          mt-14
          flex flex-col sm:flex-row
          justify-center items-center
          gap-5
        "
        >

          {/* Avatar */}
          <div
            className="
            relative
            w-16 h-16
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            flex items-center justify-center
            overflow-hidden
            group
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
              text-2xl font-bold
              bg-gradient-to-r
              from-cyan-300 to-blue-400
              text-transparent bg-clip-text
            "
            >
              M
            </span>

          </div>

          {/* Info */}
          <div className="text-center sm:text-left">

            <p className="text-white font-semibold text-lg">
              Mohamed Ayman Ahmed
            </p>

            <p className="text-slate-400 text-sm">
              Full-Stack Developer
            </p>

          </div>

        </div>

        {/* Divider */}
        <div
          className="
          mt-12
          h-px w-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
        />

        {/* Links */}
        <div
          className="
          mt-10
          flex flex-wrap
          justify-center
          gap-5 md:gap-8
        "
        >

          {[
            {
              label: "Email",
              href: "mailto:amohamedayman32@gmail.com",
            },
            {
              label: "Phone",
              href: "tel:01277599273",
            },
            {
              label: "GitHub",
              href: "https://github.com/MohamedAyman26",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/mohamed-ayman-ahmed-6175a2374/",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={
                link.label === "GitHub" ||
                link.label === "LinkedIn"
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              className="
              text-slate-300
              hover:text-white
              transition
              text-sm md:text-base
            "
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-16 text-xs text-slate-500">

          © {new Date().getFullYear()} Mohamed Ayman 
         

        </div>

      </div>

    </footer>
  );
}