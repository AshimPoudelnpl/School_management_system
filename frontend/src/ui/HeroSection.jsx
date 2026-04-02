import React from "react";
import campusVideo from "../assets/Rai School FINAL- 45mb for Website.mp4";

const HeroSection = () => {
  return (
    <section className="bg-black">
      <div className="w-full bg-black">
        <video
          className="block h-auto w-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={campusVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
