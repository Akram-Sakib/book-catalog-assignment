import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../../app/store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState)?.auth?.accessToken;
    //   if (token) {
    //     headers.set("Authorization", `${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
