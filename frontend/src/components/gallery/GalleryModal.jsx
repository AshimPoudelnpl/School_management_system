import React, { useEffect } from "react";

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path d="M15 19 8 12l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GalleryModal = ({ gallery, photoIndex, onClose, onNext, onPrev, onThumbClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-3 py-6 sm:px-6">
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75 sm:right-6 sm:top-6" aria-label="Close gallery preview">
        <CloseIcon />
      </button>
      <div className="absolute left-4 top-4 z-20 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:left-6 sm:top-6 sm:text-sm">
        {photoIndex + 1} / {gallery.photos.length}
      </div>
      <div className="w-full max-w-6xl">
        <div className="relative flex items-center justify-center">
          {gallery.photos.length > 1 && (
            <button type="button" onClick={onPrev} className="absolute left-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 sm:left-6" aria-label="Previous photo">
              <ChevronLeftIcon />
            </button>
          )}
          <img src={gallery.photos[photoIndex]} alt={gallery.title} className="max-h-[78vh] w-full object-contain" />
          {gallery.photos.length > 1 && (
            <button type="button" onClick={onNext} className="absolute right-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 sm:right-6" aria-label="Next photo">
              <ChevronRightIcon />
            </button>
          )}
        </div>
        <div className="mt-6 border border-white/10 bg-white/8 p-5 text-white backdrop-blur-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background-color">{gallery.category}</p>
              <h3 className="mt-3 text-2xl font-bold">{gallery.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">{gallery.caption || gallery.title}</p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Western School Gallery</p>
          </div>
          {gallery.photos.length > 1 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {gallery.photos.map((photo, index) => (
                <button key={`${gallery.id}-${index + 1}`} type="button" onClick={() => onThumbClick(index)} className={`overflow-hidden border transition ${photoIndex === index ? "border-background-color" : "border-white/20 hover:border-white/50"}`} aria-label={`Open photo ${index + 1}`}>
                  <img src={photo} alt={`${gallery.title} ${index + 1}`} className="h-16 w-20 object-cover sm:h-20 sm:w-24" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
