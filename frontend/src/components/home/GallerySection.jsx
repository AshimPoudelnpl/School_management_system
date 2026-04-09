import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetGalleryCategoriesQuery, useGetGalleryQuery } from "../../redux/features/contentSlice";
import GalleryModal from "../gallery/GalleryModal";
import { buildGalleryAlbum } from "../gallery/galleryUtils";
import Skeleton from "../../shared/Skeleton";

const GallerySection = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const { data: categoriesData } = useGetGalleryCategoriesQuery();
  const [modalState, setModalState] = useState({ gallery: null, photoIndex: 0 });

  const items = data?.data ?? [];
  const categories = categoriesData?.data ?? [];
  const featuredItems = items.slice(0, 6);

  const openModal = (gallery, photoIndex = 0) => {
    setModalState({
      gallery: buildGalleryAlbum(gallery, categories),
      photoIndex,
    });
  };

  const closeModal = () => setModalState({ gallery: null, photoIndex: 0 });

  const nextPhoto = () =>
    setModalState((prev) =>
      prev.gallery
        ? {
            ...prev,
            photoIndex: (prev.photoIndex + 1) % prev.gallery.photos.length,
          }
        : prev,
    );

  const prevPhoto = () =>
    setModalState((prev) =>
      prev.gallery
        ? {
            ...prev,
            photoIndex: (prev.photoIndex - 1 + prev.gallery.photos.length) % prev.gallery.photos.length,
          }
        : prev,
    );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cool px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-secondary-color/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary-color/10 blur-3xl" />

        <div className="relative mx-auto max-w-screen-xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/75 p-6 shadow-[0_28px_90px_rgba(0,111,214,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,rgba(0,111,214,0.12),rgba(203,132,74,0.12))]" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
                  Campus Gallery
                </span>
                <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                  Tap any album to open the{" "}
                  <span className="text-secondary-color">photo preview instantly</span>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Home gallery cards now open the images directly, so visitors can browse event memories without
                  leaving the page.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-600">
                  {featuredItems.length} featured album{featuredItems.length === 1 ? "" : "s"}
                </div>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200/60 transition-all hover:-translate-y-0.5 hover:shadow-sky-300/60"
                >
                  Visit Full Gallery
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {isLoading ? (
              <Skeleton variant="grid" count={6} className="mt-10" />
            ) : featuredItems.length === 0 ? (
              <div className="mt-14 rounded-[28px] border border-dashed border-slate-300 bg-white/80 px-6 py-16 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary-color/10">
                  <svg className="h-10 w-10 text-secondary-color/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-slate-500">No gallery images available yet.</p>
              </div>
            ) : (
              <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {featuredItems.map((gallery, index) => {
                  const album = buildGalleryAlbum(gallery, categories);
                  const isFeatured = index === 0;

                  return (
                    <article
                      key={gallery.id}
                      className={`${isFeatured ? "sm:col-span-2 xl:col-span-2 xl:row-span-2" : ""}`}
                    >
                      <button
                        type="button"
                        onClick={() => openModal(gallery)}
                        className="group relative block h-full w-full overflow-hidden rounded-[28px] border border-white/50 text-left shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1"
                      >
                        <img
                          src={album.coverPhoto}
                          alt={album.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78))]" />

                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-color">
                            {album.category}
                          </span>
                          <span className="rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                            {album.photoCount} photo{album.photoCount === 1 ? "" : "s"}
                          </span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                            {album.createdLabel}
                          </p>
                          <h3
                            className={`mt-3 font-black leading-tight text-white ${
                              isFeatured ? "max-w-xl text-2xl sm:text-[2rem]" : "text-xl"
                            }`}
                          >
                            {album.title}
                          </h3>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ffd9bd]">
                            Open album preview
                            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {modalState.gallery && (
        <GalleryModal
          gallery={modalState.gallery}
          photoIndex={modalState.photoIndex}
          onClose={closeModal}
          onNext={nextPhoto}
          onPrev={prevPhoto}
          onThumbClick={(index) => setModalState((prev) => ({ ...prev, photoIndex: index }))}
        />
      )}
    </>
  );
};

export default GallerySection;
