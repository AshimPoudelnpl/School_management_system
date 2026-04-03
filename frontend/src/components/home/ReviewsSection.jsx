import React from "react";
import { useGetReviewsQuery } from "../../redux/features/siteSlice";

const ReviewsSection = () => {
  const { data: reviewsData, isLoading, error } = useGetReviewsQuery();
  const allReviews = reviewsData?.data || [];
  const reviews = allReviews; // Show all reviews regardless of status

  if (isLoading) {
    return (
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-color border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return null;
  }

  const displayReviews = reviews.slice(0, 6);

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            What People Say About Us
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Hear from our community about their experiences with Western School.
          </p>
        </div>

        {displayReviews.length > 0 ? (
          <>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {displayReviews.map((review) => (
                <article
                  key={review.id}
                  className="relative overflow-hidden border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-4 top-4 text-primary-color/20">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative">
                      {review.image ? (
                        <img
                          src={`${import.meta.env.VITE_IMG_URL}${review.image}`}
                          alt={review.name}
                          className="h-14 w-14 rounded-full object-cover ring-2 ring-primary-color/20"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`${review.image ? 'hidden' : 'flex'} h-14 w-14 items-center justify-center rounded-full bg-primary-color/10 text-primary-color ring-2 ring-primary-color/20`}
                      >
                        <span className="text-lg font-bold">
                          {review.name?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-slate-900">{review.name || 'Anonymous'}</h3>
                      <p className="truncate text-sm text-slate-600">{review.position || 'Community Member'}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-sm leading-6 text-slate-700">
                    "{review.review_text || 'Great experience with Western School!'}"
                  </blockquote>
                  
                  <div className="mt-4 text-xs text-slate-400">
                    {new Date(review.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </article>
              ))}
            </div>

            {reviews.length > 6 && (
              <div className="mt-10 text-center">
                <p className="text-sm text-slate-600">
                  Showing 6 of {reviews.length} reviews
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary-color/10 p-4">
                  <svg className="h-8 w-8 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No Reviews Yet</h3>
              <p className="text-sm text-slate-600">
                Be the first to share your experience with Western School!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;