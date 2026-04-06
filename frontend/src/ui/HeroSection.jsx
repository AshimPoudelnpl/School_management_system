import React, { useEffect, useRef, useState } from "react";

const CAMPUS_VIDEO_PATH = "/videos/campus-tour.mp4";

const HeroSection = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current?.readyState >= 2) {
      setIsVideoReady(true);
    }
  }, []);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  return (
    <section className="bg-black">
      <div className="relative w-full overflow-hidden bg-black aspect-video md:aspect-[16/7]">
        {!isVideoReady && (
          <div className="absolute inset-0 z-10 flex flex-col justify-end gap-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-6 py-8 md:px-12 md:py-12">
            <div className="h-4 w-28 animate-pulse rounded-full bg-white/20"></div>
            <div className="h-10 max-w-xl animate-pulse rounded-full bg-white/25"></div>
            <div className="h-10 max-w-3xl animate-pulse rounded-full bg-white/15"></div>
            <div className="h-4 max-w-lg animate-pulse rounded-full bg-white/10"></div>
          </div>
        )}

        <video
          ref={videoRef}
          className={`block h-full w-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onError={handleVideoReady}
        >
          <source src={CAMPUS_VIDEO_PATH} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
