"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">

          <div className="w-10 h-10 flex items-center justify-center rounded-full 
                          border border-white/10 
                          bg-white/5 
                          relative overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-md transition" />

            <span className="relative text-lg font-bold 
                             bg-gradient-to-br from-blue-400 to-purple-500 
                             text-transparent bg-clip-text">
              M
            </span>
          </div>

          <span className="text-white font-semibold tracking-wide">
            Mohamed
          </span>

        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">

          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-white transition"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-xl 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     text-white text-sm font-medium
                     hover:opacity-90 transition"
        >
          Let’s Talk
        </a>

      </div>
    </nav>
  );
}