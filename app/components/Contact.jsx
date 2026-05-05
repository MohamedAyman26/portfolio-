export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative py-32 px-6 border-t border-white/10 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* BIG TEXT */}
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Let’s build
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            something real.
          </span>
        </h2>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="mailto:amohamedayman32@gmail.com?subject=Hiring Inquiry&body=Hello Mohamed,%0D%0A%0D%0AI saw your portfolio and I would like to discuss an opportunity with you.%0D%0A%0D%0AThanks."
            className="inline-block px-8 py-3 rounded-full 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       text-white font-medium text-sm
                       hover:scale-105 hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Profile */}
        <div className="mt-14 flex justify-center items-center gap-4">

          <div className="relative w-14 h-14 flex items-center justify-center rounded-full 
                          bg-white/5 border border-white/10 overflow-hidden group">

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-md transition" />

            <span className="relative text-xl font-bold 
                             bg-gradient-to-br from-blue-400 to-purple-500 
                             text-transparent bg-clip-text">
              M
            </span>
          </div>

          <div className="text-left">
            <p className="text-white font-semibold">
              Mohamed Ayman Ahmed
            </p>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">

          <a
            href="mailto:amohamedayman32@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="tel:01277599273"
            className="hover:text-white transition"
          >
            Phone
          </a>

          <a
            href="https://github.com/MohamedAyman26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-ayman-ahmed-6175a2374/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-16 text-xs text-gray-500">
          © {new Date().getFullYear()} Mohamed Ayman — Built with Next.js
        </div>

      </div>
    </footer>
  );
}