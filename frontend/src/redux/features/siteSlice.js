import { indexSlice } from "./indexSlice";
export const siteSlice = indexSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSlides: builder.query({
      query: () => ({
        url: "/api/site/home-slider",
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getReviews: builder.query({
      query: () => ({
        url: "/api/site/reviews",
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getFaqs: builder.query({
      query: () => ({
        url: "/api/site/faqs",
        method: "GET",
      }),
      providesTags: ["site"],
    }),
  }),
});
export const { useGetSlidesQuery, useGetReviewsQuery, useGetFaqsQuery } =
  siteSlice;
