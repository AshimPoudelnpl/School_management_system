import React, { useEffect } from "react";

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-5 sm:w-5" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
    <path d="M15 19 8 12l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
    <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GalleryModal = ({ gallery, photoIndex, onClose, onNext, onPrev }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-2 py-4 sm:px-6 sm:py-6">
      <button type="button" onClick={onClose} className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75 sm:right-6 sm:top-6 sm:h-11 sm:w-11" aria-label="Close gallery preview">
        <CloseIcon />
      </button>
      <div className="absolute left-3 top-3 z-20 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.18em]">
        {photoIndex + 1} / {gallery.photos.length}
      </div>
      <div className="w-full max-w-7xl">
        <div className="relative flex min-h-[72vh] items-center justify-center sm:min-h-[80vh]">
          {gallery.photos.length > 1 && (
            <button type="button" onClick={onPrev} className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 sm:left-6 sm:h-12 sm:w-12" aria-label="Previous photo">
              <ChevronLeftIcon />
            </button>
          )}
          <img src={gallery.photos[photoIndex]} alt={gallery.title} className="max-h-[78vh] w-full rounded-xl object-contain sm:max-h-[82vh]" />
          {gallery.photos.length > 1 && (
            <button type="button" onClick={onNext} className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 sm:right-6 sm:h-12 sm:w-12" aria-label="Next photo">
              <ChevronRightIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
