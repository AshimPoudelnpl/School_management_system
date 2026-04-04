import React from "react";

const CAMPUS_VIDEO_PATH = "/videos/campus-tour.mp4";

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
          <source src={CAMPUS_VIDEO_PATH} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
