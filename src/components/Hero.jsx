import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center text-center h-screen w-screen overflow-x-hidden">

      <div
        className="pointer-events-none absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-[120px]"
        style={{
          top: `${cursor.y}px`,
          left: `${cursor.x}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

  
      <section className="flex flex-col items-center justify-center relative z-10 px-4">
        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold leading-tight tracking-tight relative z-10
        "
        >
          Lorem ipsum
          <br />
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative z-10">
            <TypeAnimation
              sequence={[
                "is simply dummy text of the printing",
                1500,
                "and typesetting industry",
                1500,
                "has been the industry’s standard dummy",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block break-words"
            />
          </span>

          <span className="block font-extrabold relative z-10 ">
            since the 1500s.
          </span>
        </h1>

        <div className="mt-10 flex space-x-6 relative z-10">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-white shadow-lg shadow-green-500/30 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/30 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
