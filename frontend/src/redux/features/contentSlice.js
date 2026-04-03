import { indexSlice } from "./indexSlice";
export const contentApi = indexSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => ({
        url: "/api/content/gallery",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getGalleryCategories: builder.query({
      query: () => ({
        url: "/api/category/gallery",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getNotice: builder.query({
      query: () => ({
        url: "/api/content/notice",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getNoticeCategories: builder.query({
      query: () => ({
        url: "/api/category/notice",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getVacancy: builder.query({
      query: () => ({
        url: "/api/content/vacancy",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getVacancyCategories: builder.query({
      query: () => ({
        url: "/api/category/vacancy",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/api/content/blog",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
    getBlogCategories: builder.query({
      query: () => ({
        url: "/api/category/blog",
        method: "GET",
      }),
      providesTags: ["content"],
    }),
  }),
});
export const {
  useGetNoticeQuery,
  useGetNoticeCategoriesQuery,
  useGetGalleryQuery,
  useGetGalleryCategoriesQuery,
  useGetBlogQuery,
  useGetBlogCategoriesQuery,
  useGetVacancyQuery,
  useGetVacancyCategoriesQuery,
} = contentApi;