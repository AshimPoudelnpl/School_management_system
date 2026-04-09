import React, { useMemo, useState } from "react";
import { useGetGalleryCategoriesQuery, useGetGalleryQuery } from "../../redux/features/contentSlice";
import Skeleton from "../../shared/Skeleton";
import GalleryModal from "./GalleryModal";
import { buildGalleryAlbum, getGalleryPhotos } from "./galleryUtils";

const ITEMS_PER_PAGE = 8;

const GalleryGrid = () => {
  const { data: galleryData, isLoading: galleryLoading } = useGetGalleryQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetGalleryCategoriesQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [modalState, setModalState] = useState({ gallery: null, photoIndex: 0 });

  const galleries = galleryData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  const galleryCategories = useMemo(
    () => [
      { name: "All Categories", count: galleries.length },
      ...categories.map((category) => ({
        name: category.category_name,
        count: galleries.filter((gallery) => gallery.category_id === category.id).length,
      })),
    ],
    [categories, galleries],
  );

  const filteredGalleries = useMemo(() => {
    if (selectedCategory === "All Categories") return galleries;

    const selectedCategoryData = categories.find((category) => category.category_name === selectedCategory);

    return selectedCategoryData
      ? galleries.filter((gallery) => gallery.category_id === selectedCategoryData.id)
      : galleries;
  }, [selectedCategory, galleries, categories]);

  const totalPages = Math.max(1, Math.ceil(filteredGalleries.length / ITEMS_PER_PAGE));

  const paginatedGalleries = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGalleries.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredGalleries]);

  const totalPhotoCount = useMemo(
    () => galleries.reduce((total, gallery) => total + getGalleryPhotos(gallery.image_url).length, 0),
    [galleries],
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

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

  if (galleryLoading || categoriesLoading) {
    return (
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-screen-xl">
          <Skeleton variant="grid" count={8} className="mt-10" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6fbff_0%,#eef6ff_48%,#fffaf4_100%)] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-secondary-color/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary-color/10 blur-3xl" />

        <div className="relative mx-auto max-w-screen-xl">
          <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(120deg,rgba(0,111,214,0.15),rgba(203,132,74,0.12))]" />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
                  Memories In Frames
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                  A brighter, easier way to browse Western School photo albums.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  Open albums instantly, switch categories quickly, and move through each collection in a cleaner
                  full-screen preview.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-[24px] border border-slate-200/70 bg-white/85 p-4 text-center shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Albums</p>
                  <p className="mt-2 text-2xl font-black text-slate-900">{galleries.length}</p>
                </div>
                <div className="rounded-[24px] border border-slate-200/70 bg-white/85 p-4 text-center shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Photos</p>
                  <p className="mt-2 text-2xl font-black text-slate-900">{totalPhotoCount}</p>
                </div>
                <div className="rounded-[24px] border border-slate-200/70 bg-white/85 p-4 text-center shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Sections</p>
                  <p className="mt-2 text-2xl font-black text-slate-900">{categories.length}</p>
                </div>
              </div>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center gap-3">
              {galleryCategories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategoryChange(category.name)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    selectedCategory === category.name
                      ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/60"
                      : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 text-xs ${selectedCategory === category.name ? "text-white/80" : "text-slate-400"}`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-slate-200/70 bg-white/70 px-5 py-4">
              <p className="text-sm text-slate-600 sm:text-base">
                Showing <span className="font-semibold text-secondary-color">{filteredGalleries.length}</span>{" "}
                {filteredGalleries.length === 1 ? "album" : "albums"}
                {selectedCategory !== "All Categories" && (
                  <>
                    {" "}in <span className="font-semibold text-secondary-color">{selectedCategory}</span>
                  </>
                )}
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Page {Math.min(currentPage, totalPages)} of {totalPages}
              </p>
            </div>

            {paginatedGalleries.length > 0 ? (
              <div className="mt-10 grid auto-rows-[250px] gap-5 md:grid-cols-2 xl:grid-cols-3">
                {paginatedGalleries.map((gallery, index) => {
                  const album = buildGalleryAlbum(gallery, categories);
                  const isFeatured = index === 0;

                  return (
                    <article
                      key={gallery.id}
                      className={`${isFeatured ? "md:col-span-2 xl:col-span-2 xl:row-span-2" : ""}`}
                    >
                      <button
                        type="button"
                        onClick={() => openModal(gallery)}
                        className="group relative block h-full w-full overflow-hidden rounded-[30px] text-left shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition duration-500 hover:-translate-y-1"
                      >
                        <img
                          src={album.coverPhoto}
                          alt={album.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.84))]" />

                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary-color">
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
                              isFeatured ? "max-w-2xl text-3xl sm:text-[2.2rem]" : "text-2xl"
                            }`}
                          >
                            {album.title}
                          </h3>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ffe0c5]">
                            View album
                            <svg
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-10 rounded-[28px] border border-slate-200 bg-white px-6 py-16 text-center shadow-lg shadow-slate-200/60">
                <h3 className="text-2xl font-bold text-slate-900">No albums found</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Try choosing a different category to explore more school moments.
                </p>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("All Categories")}
                  className="mt-6 rounded-full bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
                >
                  Show All
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-11 rounded-full px-4 py-3 text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-secondary-color text-white shadow-lg shadow-sky-200/60"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-secondary-color hover:text-secondary-color"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
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

export default GalleryGrid;
