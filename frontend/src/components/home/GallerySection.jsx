import React from "react";
import { Link } from "react-router-dom";
import { useGetGalleryQuery } from "../../redux/features/contentSlice";
import Skeleton from "../../shared/Skeleton";

const GallerySection = () => {
  const { data, isLoading } = useGetGalleryQuery();

  const items = data?.data ?? [];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
              Western's Gallery
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              Image moments from campus life, events, and student experiences.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Explore snapshots of our campus, student participation, and the
              vibrant learning environment at Western School.
            </p>
          </div>
          <Link
            to="/gallery"
            className="mt-4 block text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary-color transition hover:text-secondary-color md:absolute md:bottom-0 md:right-0 md:mt-0"
          >
            Explore Gallery
          </Link>
        </div>

        {isLoading ? (
          <Skeleton variant="grid" count={6} className="mt-10" />
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No gallery images available yet.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {items.slice(0, 6).map((gallery) => {
              const firstImage = gallery.image_url.split(',')[0];
              const imageCount = gallery.image_url.split(',').length;
              
              return (
                <article
                  key={gallery.id}
                  className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}${firstImage}`}
                      alt={gallery.caption}
                      className="h-72 w-full object-cover"
                    />
                    {imageCount > 1 && (
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        +{imageCount - 1} more
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                      {gallery.caption}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400">
                      {new Date(gallery.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
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
