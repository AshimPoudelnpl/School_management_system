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

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const currentPhoto = gallery.photos[photoIndex] || gallery.coverPhoto;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 px-3 py-3 sm:px-6 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${gallery.title} gallery preview`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,111,214,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(203,132,74,0.18),transparent_30%)]" />

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-black/65 sm:right-6 sm:top-6"
        aria-label="Close gallery preview"
      >
        <CloseIcon />
      </button>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-md">
        <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))] p-4 sm:p-6 lg:p-10">
            <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2 sm:left-6 sm:top-6">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                {gallery.category}
              </span>
              <span className="rounded-full border border-[#cb844a]/30 bg-[#cb844a]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffe0c5]">
                {photoIndex + 1} / {gallery.photos.length}
              </span>
            </div>

            {gallery.photos.length > 1 && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white transition hover:bg-black/65 sm:left-6"
                aria-label="Previous photo"
              >
                <ChevronLeftIcon />
              </button>
            )}

            <img
              src={currentPhoto}
              alt={gallery.title}
              className="relative z-[1] max-h-full w-full rounded-[24px] object-contain shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
            />

            {gallery.photos.length > 1 && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white transition hover:bg-black/65 sm:right-6"
                aria-label="Next photo"
              >
                <ChevronRightIcon />
              </button>
            )}
          </div>

          <aside className="flex min-h-0 flex-col border-t border-white/10 bg-slate-950/60 lg:border-l lg:border-t-0">
            <div className="border-b border-white/10 px-5 py-5 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8bc0ff]">
                Western School Gallery
              </p>
              <h3 className="mt-3 text-2xl font-black text-white sm:text-[2rem]">{gallery.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {gallery.caption || gallery.title}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Album
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{gallery.category}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Captured
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{gallery.createdLabel}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <div className="rounded-[24px] border border-[#006fd6]/25 bg-[#006fd6]/10 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9ed0ff]">
                  Viewing
                </p>
                <p className="mt-2 text-base font-bold text-white">
                  Photo {photoIndex + 1} of {gallery.photos.length}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Use the arrows or your keyboard to move through this album.
                </p>
              </div>

              {gallery.photos.length > 1 && (
                <>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Filmstrip
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                    {gallery.photos.map((photo, index) => (
                      <button
                        key={`${gallery.id}-${index + 1}`}
                        type="button"
                        onClick={() => onThumbClick(index)}
                        className={`group overflow-hidden rounded-2xl border text-left transition ${
                          photoIndex === index
                            ? "border-[#cb844a] shadow-[0_0_0_1px_rgba(203,132,74,0.5)]"
                            : "border-white/10 hover:border-white/35"
                        }`}
                        aria-label={`Open photo ${index + 1}`}
                      >
                        <img
                          src={photo}
                          alt={`${gallery.title} ${index + 1}`}
                          className="h-24 w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="flex items-center justify-between bg-black/35 px-3 py-2">
                          <span className="text-xs font-semibold text-white">Photo {index + 1}</span>
                          {photoIndex === index && (
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffd8ba]">
                              Active
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
