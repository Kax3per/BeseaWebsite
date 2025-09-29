import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import logoBesea from "../assets/logoBesea.png";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");


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
    <header className="fixed mb-20 top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="flex items-center justify-between  backdrop-blur-3xl border border-green-400/30 rounded-full px-8 py-4 shadow-lg shadow-green-500/20 transition-colors">
        
   
        <div className="flex items-center space-x-2">
          <img 
            src={logoBesea} 
            alt="Besea Logo" 
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex space-x-8 font-semibold text-lg">
          <a href="#" className="transition">Docs</a>
          <a href="#" className=" transition">Components</a>
          <a href="#" className=" transition">Blog</a>
          <a href="#" className="  transition">Showcase</a>
        </nav>

    
        <div className="flex items-center space-x-4">
  
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 " />   
            ) : (
              <Moon className="w-6 h-6 " />  
            )}
          </button>


          <button className="hidden  md:block bg-green-500 text-white dark:text-white light:text-black px-4 py-2 rounded-full text-base font-medium hover:bg-green-600 transition shadow-md shadow-green-500/30">
            Sign in
          </button>

          <button className="md:hidden p-2 rounded-full hover:bg-white/10 transition">
            <Menu className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </header>
  );
}
