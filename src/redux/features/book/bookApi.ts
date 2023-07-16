import { IResponse } from "../../../types/response";
import { apiSlice } from "../api/apiSlice";
import { IBook } from "./book.interface";

export const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse<IBook[]>, void>({
      query: () => ({
        url: `/books`,
        method: "GET",
      }),
    }),
    addBook: builder.mutation<IResponse<IBook>, Partial<IBook>>({
      query: (body) => ({
        url: `/books/add-book`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = bookApi;
