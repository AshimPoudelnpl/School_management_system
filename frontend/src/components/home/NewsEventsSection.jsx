import React from "react";
import { Link } from "react-router-dom";
import { useGetEventQuery } from "../../redux/features/academicSlice";
import Skeleton from "../../shared/Skeleton";

const NewsEventsSection = () => {
  const { data, isLoading } = useGetEventQuery();
  const items = data?.data ?? [];

  return (
    <section className="relative overflow-hidden bg-gradient-soft px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-secondary-color/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary-color/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-center sm:text-left">
            <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
              News &amp; Events
            </span>
            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Recent highlights from{" "}
              <span className="text-secondary-color">Western School</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Stay updated with admissions, student programs, and important
              school activities happening across Western School.
            </p>
          </div>
          <Link
            to="/notice"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-secondary-color/30 bg-white px-5 py-2.5 text-sm font-bold text-secondary-color shadow-sm transition-all hover:bg-secondary-color hover:text-white hover:shadow-secondary-color/30"
          >
            View All
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Content */}
        {isLoading ? (
          <Skeleton variant="grid" count={3} className="mt-10" />
        ) : items.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary-color/10">
              <svg className="h-10 w-10 text-secondary-color/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="mt-4 text-slate-500">No news or events available yet.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 3).map((event) => (
              <article
                key={event.id}
                className="card-hover glass-card group overflow-hidden rounded-2xl shadow-lg shadow-slate-200/60"
              >
                {event.pdf_url && (
                  <div className="overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}${event.pdf_url}`}
                      alt={event.title}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-secondary-color/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-color">
                    {event.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                    {event.description}
                  </p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(event.event_date).toLocaleDateString("en-US", {
                      year: "numeric", month: "long", day: "numeric",
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
