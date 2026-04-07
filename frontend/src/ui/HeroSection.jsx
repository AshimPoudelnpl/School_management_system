import React, { useEffect, useRef, useState } from "react";
import campusVideo from "../assets/wss.mp4";

const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M5 10.5H8.5L13 6V18L8.5 13.5H5V10.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 9C16.9 9.7 17.5 10.8 17.5 12C17.5 13.2 16.9 14.3 16 15"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M18.5 6.5C20.1 7.9 21 9.9 21 12C21 14.1 20.1 16.1 18.5 17.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const VolumeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M5 10.5H8.5L13 6V18L8.5 13.5H5V10.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 9.5L20.5 13.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M20.5 9.5L16.5 13.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const HeroSection = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current?.readyState >= 2) {
      setIsVideoReady(true);
    }
  }, []);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  const handleToggleAudio = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextMuted = !isMuted;

    video.muted = nextMuted;

    if (!nextMuted) {
      video.volume = 1;

      try {
        await video.play();
      } catch (error) {
        video.muted = true;
        setIsMuted(true);
        return;
      }
    }

    setIsMuted(nextMuted);
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
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onError={handleVideoReady}
        >
          <source src={campusVideo} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <button
          type="button"
          onClick={handleToggleAudio}
          className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/55 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30 backdrop-blur transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/70"
          aria-label={isMuted ? "Turn video sound on" : "Mute video sound"}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
