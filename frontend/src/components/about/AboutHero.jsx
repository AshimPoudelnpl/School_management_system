import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import campusTourImage from "../../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-20">
        <img src={campusTourImage} alt="Western School students" className="h-full w-full object-cover" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-10">
        <img src={logo} alt="Western School" className="mx-auto mb-6 w-24 rounded-full bg-white/10 p-3 sm:w-28" />
        <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">About Western School</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
          Dedicated to meaningful education, student growth, and a supportive school culture that prepares children for learning and life.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={() => navigate("/academics")} className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondary-color transition hover:bg-blue-50">
            Explore Academics
          </button>
          <button onClick={() => navigate("/contact")} className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-secondary-color">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
