import React from "react";
import { Link } from "react-router-dom";
import { useGetGalleryQuery } from "../../redux/features/contentSlice";
import Skeleton from "../../shared/Skeleton";

const GallerySection = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const items = data?.data ?? [];

  return (
    <section className="relative overflow-hidden bg-gradient-cool px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-secondary-color/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 rounded-full bg-primary-color/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-center sm:text-left">
            <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
              Campus Gallery
            </span>
            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Moments from{" "}
              <span className="text-secondary-color">campus life & events</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore snapshots of our campus, student participation, and the
              vibrant learning environment at Western School.
            </p>
          </div>
          <Link
            to="/gallery"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-secondary-color/30 bg-white px-5 py-2.5 text-sm font-bold text-secondary-color shadow-sm transition-all hover:bg-secondary-color hover:text-white hover:shadow-secondary-color/30"
          >
            Explore Gallery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        {isLoading ? (
          <Skeleton variant="grid" count={6} className="mt-10" />
        ) : items.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary-color/10">
              <svg className="h-10 w-10 text-secondary-color/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="mt-4 text-slate-500">No gallery images available yet.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.slice(0, 6).map((gallery) => {
              const firstImage = gallery.image_url.split(",")[0];
              const imageCount = gallery.image_url.split(",").length;
              return (
                <article
                  key={gallery.id}
                  className="card-hover group overflow-hidden rounded-2xl glass-card shadow-lg shadow-slate-200/60"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}${firstImage}`}
                      alt={gallery.caption}
                      className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {imageCount > 1 && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                        </svg>
                        +{imageCount - 1} more
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 line-clamp-2">{gallery.caption}</h3>
                    <p className="mt-1.5 text-xs text-slate-400">
                      {new Date(gallery.created_at).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
