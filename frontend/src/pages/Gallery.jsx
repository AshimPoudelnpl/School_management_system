import React, { useEffect, useMemo, useState } from "react";
import { schoolBuilding } from "../assets";
import admissionImage from "../assets/news_events/Addmission open.jpeg";
import campusFieldImage from "../assets/news_events/download.jpeg";
import studentMomentImage from "../assets/news_events/download (1).jpeg";
import assemblyImage from "../assets/news_events/images.jpeg";
import marchPassImage from "../assets/news_events/march pass.jpeg";
import tripImage from "../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";
import workshopImage from "../assets/news_events/workshop.jpeg";

const ITEMS_PER_PAGE = 8;

const galleryAlbums = [
  {
    id: 1,
    title: "Western Campus Overview",
    category: "Campus",
    description:
      "A closer look at the school building, open grounds, and the welcoming learning environment at Western School.",
    coverImage: schoolBuilding,
    photos: [schoolBuilding, campusFieldImage, studentMomentImage],
  },
  {
    id: 2,
    title: "Learning Spaces",
    category: "Campus",
    description:
      "Classrooms and school surroundings designed to support daily learning, movement, and student participation.",
    coverImage: campusFieldImage,
    photos: [campusFieldImage, schoolBuilding, studentMomentImage],
  },
  {
    id: 3,
    title: "Admission Highlights",
    category: "Events",
    description:
      "Important school notices and admission moments that welcome new students and families into the community.",
    coverImage: admissionImage,
    photos: [admissionImage, schoolBuilding, assemblyImage],
  },
  {
    id: 4,
    title: "Workshop And Practical Sessions",
    category: "Learning",
    description:
      "Hands-on sessions that encourage curiosity, teamwork, and deeper understanding beyond routine classroom study.",
    coverImage: workshopImage,
    photos: [workshopImage, studentMomentImage, assemblyImage],
  },
  {
    id: 5,
    title: "March Pass And Discipline",
    category: "Events",
    description:
      "Moments that reflect student confidence, discipline, and participation during school activities and public events.",
    coverImage: marchPassImage,
    photos: [marchPassImage, assemblyImage, tripImage],
  },
  {
    id: 6,
    title: "Student Gatherings",
    category: "Activities",
    description:
      "Campus gatherings where students come together for shared experiences, programs, and school celebrations.",
    coverImage: assemblyImage,
    photos: [assemblyImage, studentMomentImage, marchPassImage],
  },
  {
    id: 7,
    title: "Educational Tour Moments",
    category: "Activities",
    description:
      "Snapshots from educational visits and group learning experiences that make school life more memorable.",
    coverImage: tripImage,
    photos: [tripImage, workshopImage, schoolBuilding],
  },
  {
    id: 8,
    title: "Student Life At Western",
    category: "Learning",
    description:
      "Everyday moments that show how students learn, connect, and grow through school routines and activities.",
    coverImage: studentMomentImage,
    photos: [studentMomentImage, tripImage, campusFieldImage],
  },
  {
    id: 9,
    title: "Celebration And Recognition",
    category: "Events",
    description:
      "Special occasions that highlight student participation, school spirit, and the joy of learning together.",
    coverImage: assemblyImage,
    photos: [assemblyImage, marchPassImage, admissionImage],
  },
];

const galleryCategories = [
  "All Categories",
  ...new Set(galleryAlbums.map((gallery) => gallery.category)),
];

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M6 6l12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M15 19 8 12l7-7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="m9 5 7 7-7 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(null);

  const filteredGalleries = useMemo(() => {
    if (selectedCategory === "All Categories") {
      return galleryAlbums;
    }

    return galleryAlbums.filter(
      (gallery) => gallery.category === selectedCategory,
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredGalleries.length / ITEMS_PER_PAGE);

  const paginatedGalleries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGalleries.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredGalleries]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const openPhotoViewer = (gallery, imageIndex = 0) => {
    setCurrentGallery(gallery);
    setCurrentPhotoIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closePhotoViewer = () => {
    setIsModalOpen(false);
    setCurrentGallery(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (!currentGallery) {
      return;
    }

    setCurrentPhotoIndex(
      (prev) => (prev + 1) % currentGallery.photos.length,
    );
  };

  const prevPhoto = () => {
    if (!currentGallery) {
      return;
    }

    setCurrentPhotoIndex(
      (prev) => (prev - 1 + currentGallery.photos.length) % currentGallery.photos.length,
    );
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setCurrentGallery(null);
        setCurrentPhotoIndex(0);
      }

      if (event.key === "ArrowRight" && currentGallery) {
        setCurrentPhotoIndex(
          (prev) => (prev + 1) % currentGallery.photos.length,
        );
      }

      if (event.key === "ArrowLeft" && currentGallery) {
        setCurrentPhotoIndex(
          (prev) =>
            (prev - 1 + currentGallery.photos.length) %
            currentGallery.photos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, currentGallery]);

  return (
    <>
      

      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
              Browse Albums
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              A visual collection from Western School.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Filter albums by category, open each collection, and view school
              moments in a simple full-screen preview.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-3 text-sm font-semibold transition sm:px-6 ${
                    isActive
                      ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/60"
                      : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 sm:text-base">
              Showing{" "}
              <span className="font-semibold text-secondary-color">
                {filteredGalleries.length}
              </span>{" "}
              {filteredGalleries.length === 1 ? "album" : "albums"}
              {selectedCategory !== "All Categories" && (
                <>
                  {" "}in{" "}
                  <span className="font-semibold text-secondary-color">
                    {selectedCategory}
                  </span>
                </>
              )}
            </p>
          </div>

          {paginatedGalleries.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {paginatedGalleries.map((gallery, index) => (
                <article
                  key={gallery.id}
                  className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => openPhotoViewer(gallery)}
                    className="block w-full text-left"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={gallery.coverImage}
                        alt={gallery.title}
                        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-color shadow">
                        {gallery.category}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                        {gallery.photos.length} Photos
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold leading-snug text-slate-900">
                        {gallery.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {gallery.description}
                      </p>
                      <span className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-primary-color">
                        View Album
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-slate-200 bg-white px-6 py-16 text-center shadow-lg shadow-slate-200/60">
              <h3 className="text-2xl font-bold text-slate-900">
                No albums found
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Try choosing a different category to explore more school
                moments.
              </p>
              <button
                type="button"
                onClick={() => handleCategoryChange("All Categories")}
                className="mt-6 bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
              >
                Show All
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-11 px-4 py-3 text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-secondary-color text-white shadow-lg shadow-sky-200/60"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-secondary-color hover:text-secondary-color"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && currentGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-3 py-6 sm:px-6">
          <button
            type="button"
            onClick={closePhotoViewer}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75 sm:right-6 sm:top-6"
            aria-label="Close gallery preview"
          >
            <CloseIcon />
          </button>

          <div className="absolute left-4 top-4 z-20 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:left-6 sm:top-6 sm:text-sm">
            {currentPhotoIndex + 1} / {currentGallery.photos.length}
          </div>

          <div className="w-full max-w-6xl">
            <div className="relative flex items-center justify-center">
              {currentGallery.photos.length > 1 && (
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 sm:left-6"
                  aria-label="Previous photo"
                >
                  <ChevronLeftIcon />
                </button>
              )}

              <img
                src={currentGallery.photos[currentPhotoIndex]}
                alt={currentGallery.title}
                className="max-h-[78vh] w-full object-contain"
              />

              {currentGallery.photos.length > 1 && (
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 sm:right-6"
                  aria-label="Next photo"
                >
                  <ChevronRightIcon />
                </button>
              )}
            </div>

            <div className="mt-6 border border-white/10 bg-white/8 p-5 text-white backdrop-blur-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background-color">
                    {currentGallery.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {currentGallery.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
                    {currentGallery.description}
                  </p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                  Western School Gallery
                </p>
              </div>

              {currentGallery.photos.length > 1 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {currentGallery.photos.map((photo, index) => (
                    <button
                      key={`${currentGallery.id}-${index + 1}`}
                      type="button"
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`overflow-hidden border transition ${
                        currentPhotoIndex === index
                          ? "border-background-color"
                          : "border-white/20 hover:border-white/50"
                      }`}
                      aria-label={`Open photo ${index + 1}`}
                    >
                      <img
                        src={photo}
                        alt={`${currentGallery.title} ${index + 1}`}
                        className="h-16 w-20 object-cover sm:h-20 sm:w-24"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
