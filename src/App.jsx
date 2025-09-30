import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesSection from "./components/FeaturesSectiom";
import PiercingCard from "./components/PircingCard";
import OurTeam from "./components/OurTeam";
import ContactForm from "./components/ContactForm";
import MinimalFooter from "./components/Footer";
import './index.css'

export default function App() {
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFeaturesVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen dark">
      <Navbar isFeaturesVisible={isFeaturesVisible} />
      <Hero />
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <Features />
      <PiercingCard/>
      <OurTeam/>
      <ContactForm/>
      <MinimalFooter/>
    </div>
  );
}
