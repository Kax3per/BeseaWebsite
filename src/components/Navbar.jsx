import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logoBesea from "../assets/logoBesea.png";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  // reaguj na zmianę theme
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
<header className="fixed top-6 left-1/2  -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="mx-auto w-[90%] max-w-6xl flex items-center justify-between 
                  backdrop-blur-xl border border-green-400/30 rounded-4xl 
                  px-6 py-4 shadow-lg shadow-green-500/20 transition-colors">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoBesea} alt="Besea Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg">
          <a href="#" className="hover:text-green-400 transition">Docs</a>
          <a href="#" className="hover:text-green-400 transition">Components</a>
          <a href="#" className="hover:text-green-400 transition">Blog</a>
          <a href="#" className="hover:text-green-400 transition">Showcase</a>
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-green-500 text-white px-5 py-2 rounded-full text-base font-medium hover:bg-green-600 transition shadow-md shadow-green-500/30">
            Sign in
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden mt-3 rounded-2xl border border-green-400/30 backdrop-blur-xl p-6 space-y-6 shadow-lg shadow-green-500/20 animate-fade-in">
          <a href="#" className="block text-lg font-medium hover:text-green-400 transition">Docs</a>
          <a href="#" className="block text-lg font-medium hover:text-green-400 transition">Components</a>
          <a href="#" className="block text-lg font-medium hover:text-green-400 transition">Blog</a>
          <a href="#" className="block text-lg font-medium hover:text-green-400 transition">Showcase</a>
          <button className="w-full bg-green-500 text-white px-5 py-2 rounded-full text-base font-medium hover:bg-green-600 transition shadow-md shadow-green-500/30">
            Sign in
          </button>
        </div>
      )}
    </header>
  );
}
