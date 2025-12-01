import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "books",
  initialState: {
    books: {
      page: 1,
      perPage: 10,
      results: [],
      totalPages: 0,
    },
    filter: {
      author: "",
      title: "",
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    setPage(state, action) {
      state.books.page = action.payload;
      console.log(action.payload);
    },
    setPerPage(state, action) {
      state.books.perPage = action.payload;
    },
    setAuthorFilter(state, action) {
      state.filter.author = action.payload;
    },
    setTitleFilter(state, action) {
      state.filter.title = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase("books/fetchBooks/pending", (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase("books/fetchBooks/fulfilled", (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase("books/fetchBooks/rejected", (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
export const { setPage, setPerPage, setAuthorFilter, setTitleFilter } = slice.actions;