import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});
export const indexSlice = createApi({
  baseQuery,
  tagTypes: ["content", "category", "team", "academic"],
  endpoints: () => ({}),
});
