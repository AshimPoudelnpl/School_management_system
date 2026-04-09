import React, { useMemo, useState } from "react";
import { useGetGalleryQuery, useGetGalleryCategoriesQuery } from "../../redux/features/contentSlice";
import GalleryModal from "./GalleryModal";
import Skeleton from "../../shared/Skeleton";

const ITEMS_PER_PAGE = 8;

const GalleryGrid = () => {
  const { data: galleryData, isLoading: galleryLoading } = useGetGalleryQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetGalleryCategoriesQuery();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [modalState, setModalState] = useState({ gallery: null, photoIndex: 0 });

  const galleries = galleryData?.data ?? [];
  const categories = categoriesData?.data ?? [];
  
  // Create category filter options
  const galleryCategories = useMemo(() => {
    const categoryNames = categories.map(cat => cat.category_name);
    return ["All Categories", ...categoryNames];
  }, [categories]);

  // Filter galleries by category
  const filteredGalleries = useMemo(() => {
    if (selectedCategory === "All Categories") return galleries;
    
    const selectedCategoryData = categories.find(cat => cat.category_name === selectedCategory);
    
    return selectedCategoryData 
      ? galleries.filter(gallery => gallery.category_id === selectedCategoryData.id)
      : galleries;
  }, [selectedCategory, galleries, categories]);

  const totalPages = Math.ceil(filteredGalleries.length / ITEMS_PER_PAGE);

  const paginatedGalleries = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGalleries.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredGalleries]);

  const handleCategoryChange = (category) => { 
    setSelectedCategory(category); 
    setCurrentPage(1); 
  };

  const openModal = (gallery, photoIndex = 0) => {
    // Transform gallery data for modal
    const photos = gallery.image_url.split(',').map(url => `${import.meta.env.VITE_IMG_URL}${url.trim()}`);
    const transformedGallery = {
      ...gallery,
      photos,
      title: gallery.caption,
      category: categories.find(cat => cat.id === gallery.category_id)?.category_name || "Gallery"
    };
    setModalState({ gallery: transformedGallery, photoIndex });
  };

  const closeModal = () => setModalState({ gallery: null, photoIndex: 0 });
  
  const nextPhoto = () => setModalState((prev) => ({ 
    ...prev, 
    photoIndex: (prev.photoIndex + 1) % prev.gallery.photos.length 
  }));
  
  const prevPhoto = () => setModalState((prev) => ({ 
    ...prev, 
    photoIndex: (prev.photoIndex - 1 + prev.gallery.photos.length) % prev.gallery.photos.length 
  }));

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
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-color sm:text-sm sm:tracking-[0.28em]">Browse Albums</p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:text-4xl">A visual collection from Western School.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">Filter albums by category, open each collection, and view school moments in a simple full-screen preview.</p>
          </div>

          <div className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
            {galleryCategories.map((category) => (
              <button 
                key={category} 
                type="button" 
                onClick={() => handleCategoryChange(category)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition sm:px-6 sm:py-3 sm:text-sm ${
                  selectedCategory === category 
                    ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/60" 
                    : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 sm:text-base">
              Showing <span className="font-semibold text-secondary-color">{filteredGalleries.length}</span> {filteredGalleries.length === 1 ? "album" : "albums"}
              {selectedCategory !== "All Categories" && <> in <span className="font-semibold text-secondary-color">{selectedCategory}</span></>}
            </p>
          </div>

          {paginatedGalleries.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {paginatedGalleries.map((gallery, index) => {
                const firstImage = gallery.image_url.split(',')[0];
                const imageCount = gallery.image_url.split(',').length;
                const categoryName = categories.find(cat => cat.id === gallery.category_id)?.category_name || "Gallery";

                return (
                  <article 
                    key={gallery.id} 
                    className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl" 
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <button type="button" onClick={() => openModal(gallery)} className="block w-full text-left">
                      <div className="relative overflow-hidden">
                        <img 
                          src={`${import.meta.env.VITE_IMG_URL}${firstImage}`} 
                          alt={gallery.caption} 
                          className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-64" 
                        />
                        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-color shadow sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.2em]">
                          {categoryName}
                        </div>
                        <div className="absolute bottom-3 right-3 rounded-full bg-slate-900/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:bottom-4 sm:right-4 sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]">
                          {imageCount} Photo{imageCount !== 1 ? 's' : ''}
                        </div>
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                          {gallery.caption}
                        </h3>
                        <p className="mt-3 text-xs text-slate-400 sm:mt-4 sm:text-sm">
                          {new Date(gallery.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-primary-color sm:mt-6 sm:text-sm sm:tracking-[0.16em]">View Album</span>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-12 text-center shadow-lg shadow-slate-200/60 sm:px-6 sm:py-16">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">No albums found</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Try choosing a different category to explore more school moments.</p>
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
              <button 
                type="button" 
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} 
                disabled={currentPage === 1} 
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.16em]"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page} 
                  type="button" 
                  onClick={() => setCurrentPage(page)} 
                  className={`min-w-10 rounded-full px-3.5 py-2.5 text-xs font-semibold transition sm:min-w-11 sm:px-4 sm:py-3 sm:text-sm ${
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
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} 
                disabled={currentPage === totalPages} 
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.16em]"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {modalState.gallery && (
        <GalleryModal
          gallery={modalState.gallery}
          photoIndex={modalState.photoIndex}
          onClose={closeModal}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
    </>
  );
};

export default GalleryGrid;
