import React from "react";
import { useGetReviewsQuery } from "../../redux/features/siteSlice";
import Skeleton from "../../shared/Skeleton";

const StarIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewsSection = () => {
  const { data: reviewsData, isLoading, error } = useGetReviewsQuery();
  const allReviews = reviewsData?.data || [];
  const displayReviews = allReviews.slice(0, 6);

  if (isLoading) {
    return (
      <section className="bg-gradient-soft px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <Skeleton variant="card" count={3} />
        </div>
      </section>
    );
  }

  if (error) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-soft px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-color/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label bg-primary-color/10 text-primary-color ring-1 ring-primary-color/30">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-color" />
            Testimonials
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            What Our{" "}
            <span className="text-primary-color">Community Says</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Hear from parents, students, and alumni about their experiences with Western School.
          </p>
        </div>

        {displayReviews.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayReviews.map((review) => (
              <article
                key={review.id}
                className="card-hover glass-card relative overflow-hidden rounded-2xl p-6 shadow-lg shadow-slate-200/60"
              >
                {/* Quote decoration */}
                <div className="absolute right-5 top-5 text-primary-color/20">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 text-primary-color">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>

                {/* Review text */}
                <blockquote className="mt-4 text-sm leading-6 text-slate-700">
                  &ldquo;{review.review_text || "Great experience with Western School!"}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="relative shrink-0">
                    {review.image ? (
                      <img
                        src={`${import.meta.env.VITE_IMG_URL}${review.image}`}
                        alt={review.name}
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-primary-color/30"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className={`${review.image ? "hidden" : "flex"} h-11 w-11 items-center justify-center rounded-full bg-primary-color text-white font-bold ring-2 ring-primary-color/30`}
                    >
                      {review.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-slate-900 text-sm">{review.name || "Anonymous"}</p>
                    <p className="truncate text-xs text-slate-500">{review.position || "Community Member"}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-color/10">
              <svg className="h-10 w-10 text-primary-color/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">No Reviews Yet</h3>
            <p className="mt-2 text-sm text-slate-500">Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
