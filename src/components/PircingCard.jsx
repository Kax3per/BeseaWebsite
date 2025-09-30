import { motion } from "framer-motion";
import { Layers, CheckCircle, Settings } from "lucide-react";

export default function PiercingCard() {
  const cardOptions = [
    {
      title: "Basic Plan",
      description: "Idealny dla pojedynczych użytkowników.",
      features: ["Podstawowe funkcje", "Prosty interfejs", "Wsparcie online"],
      button: "Wybierz Basic",
    },
    {
      title: "Pro Plan",
      description: "Dla zaawansowanych użytkowników i małych zespołów.",
      features: ["Wszystko z Basic", "Rozszerzone funkcje", "Wsparcie premium"],
      button: "Wybierz Pro",
    },
    {
      title: "Enterprise",
      description: "Kompleksowe rozwiązanie dla dużych firm.",
      features: ["Wszystko z Pro", "Dedykowany support", "Integracje API"],
      button: "Wybierz Enterprise",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden p-10 ">
      {/* Zielone kółko w tle */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px]  rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* Piercing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {cardOptions.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="relative w-80 p-10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 hover:scale-105 transition-transform"
          >
            {/* Ikona */}
            <div className="backdrop-blur-lg rounded-full p-4 shadow-lg ">
              {index === 0 && <CheckCircle className="w-8 h-8 text-green-500" />}
              {index === 1 && <Layers className="w-8 h-8 text-green-500" />}
              {index === 2 && <Settings className="w-8 h-8 text-green-500" />}
            </div>

            {/* Nagłówek */}
            <h2 className="text-2xl font-bold ">{card.title}</h2>

            {/* Opis */}
            <p className="text-center ">{card.description}</p>

            {/* Lista funkcji */}
            <ul className="space-y-2 ">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Przycisk */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-full font-semibold shadow-lg transition"
            >
              {card.button}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
