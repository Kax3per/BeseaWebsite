import { TypeAnimation } from 'react-type-animation';
import Buttons from "./Buttons";


export default function Hero() {
  return (
    <main className="relative flex flex-col items-center text-center px-4 mt-30 sm:mt-20">
      {/* Obrazek w tle */}
      
      <section className="flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] pb-8 sm:pb-12">
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold leading-tight tracking-tight relative z-10
        ">
          Lorem ipsum
          <br />
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative z-10">
            <TypeAnimation
              sequence={[
                'is simply dummy text of the printing', 1500,
                'and typesetting industry', 1500,
                'has been the industry’s standard dummy', 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block break-words"
            />
          </span>

          <span className="block font-extrabold relative z-10">
            since the 1500s.
          </span>
        </h1>

        <div className="mt-6 sm:mt-8 scale-105 sm:scale-110 relative z-10">
          <Buttons />
        </div>
      </section>
    </main>
  );
}
