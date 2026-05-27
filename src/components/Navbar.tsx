import { useState } from "react";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-xl border-b z-50 transition-all duration-500 ${
        darkMode
          ? "bg-slate-900/70 border-slate-800"
          : "bg-white/70 border-slate-200 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Chanbasha
        </h1>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-6 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`border px-3 py-1 rounded-lg hover:border-cyan-400 transition ${
              darkMode
                ? "border-slate-600 text-white"
                : "border-slate-300 text-slate-900"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 py-4 border-t ${
            darkMode
              ? "bg-slate-900 border-slate-800 text-slate-300"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-cyan-400 after:transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
