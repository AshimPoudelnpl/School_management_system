import React from "react";
import { Link } from "react-router-dom";
import { useGetEventQuery } from "../../redux/features/academicSlice";
import Skeleton from "../../shared/Skeleton";

const NewsEventsSection = () => {
  const { data, isLoading } = useGetEventQuery();

  const items = data?.data ?? [];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary-color">
              News And Events
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              Recent highlights from Western School.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Stay updated with admissions, student programs, and important
              school activities happening across Western School.
            </p>
          </div>
          <Link
            to="/notice"
            className="mt-4 block text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary-color transition hover:text-secondary-color md:absolute md:bottom-0 md:right-0 md:mt-0"
          >
            View All
          </Link>
        </div>

        {isLoading ? (
          <Skeleton variant="grid" count={3} className="mt-10" />
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No news or events available yet.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {items.slice(0, 3).map((event) => (
              <article
                key={event.id}
                className="overflow-hidden border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
              >
                {event.pdf_url && (
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${event.pdf_url}`}
                    alt={event.title}
                    className="h-60 w-full object-cover"
                  />
                )}
                <div className="p-7 text-center">
                  <span className="inline-flex rounded-full bg-secondary-color/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-color">
                    {event.category}
                  </span>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 line-clamp-3">
                    {event.description}
                  </p>
                  <p className="mt-3 text-xs text-slate-400">
                    {new Date(event.event_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;
