import { useState, useEffect } from "react";
import { Gift, Layout, Diamond, X } from "lucide-react";

import dashboard1 from "../assets/dashboardBesea.jpeg";
import dashboard2 from "../assets/dashboardBesea.jpeg";
import dashboard3 from "../assets/dashboardBesea.jpeg";

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null); // null = brak podglądu

  const images = [dashboard1, dashboard2, dashboard3];
  const features = [
    {
      icon: Layout,
      title: "Intuicyjny panel",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Gift,
      title: "Wbudowane narzędzia",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Diamond,
      title: "Nowoczesny design",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  // blokada scrolla podczas lightboxa
  useEffect(() => {
    if (lightbox) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [lightbox]);

  return (
    <section className="w-full mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Nagłówek */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Ikony z opisem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className="flex flex-col items-center text-center space-y-3 group"
              >
                <div
                  className={`p-5 rounded-full transition ${
                    active === idx
                      ? "text-green-500 scale-110"
                      : "text-gray-400 group-hover:text-green-400"
                  }`}
                >
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.text}</p>
              </button>
            );
          })}
        </div>

        {/* Zdjęcia w stosie */}
        <div className="relative flex justify-center h-[300px] sm:h-[400px] md:h-[550px] mb-20 overflow-visible">
          {images.map((img, idx) => {
            const offset = (idx - active + images.length) % images.length;
            let translate =
              "translate-x-0 scale-100 opacity-100 z-30";

            if (offset === 1) {
              translate =
                "hidden sm:block translate-x-24 md:translate-x-36 scale-90 opacity-80 z-20";
            } else if (offset === 2) {
              translate =
                "hidden sm:block translate-x-48 md:translate-x-72 scale-80 opacity-60 z-10";
            }

            return (
              <img
                key={idx}
                src={img}
                alt={`Feature ${idx + 1}`}
                onClick={() => setLightbox(img)}
                className={`
                  absolute rounded-2xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer
                  ${translate}
                `}
                style={{
                  width: "110%",
                  maxWidth: "1200px",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox (fullscreen podgląd) */}
      {lightbox && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          {/* Zamknij */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 left-6 p-2 rounded-full hover:bg-white/20 transition"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Zdjęcie */}
          <img
            src={lightbox}
            alt="Fullscreen Preview"
            className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}






















