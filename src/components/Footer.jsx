import { Github, Linkedin, Twitter } from "lucide-react";

export default function MinimalFooter() {
  return (
    <footer className="w-full borde bg-opacity-80 text-white py-6 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl px-6">
        {/* Logo / Nazwa */}
        <div className="text-lg font-semibold">
          BESEA
        </div>

        {/* Linki społecznościowe */}
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-white/70 hover:text-white transition"
            aria-label="Github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition"
            aria-label="Linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-sm text-white/60">
        © {new Date().getFullYear()} BESEA. All rights reserved.
      </div>
    </footer>
  );
}
