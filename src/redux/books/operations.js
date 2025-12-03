import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ page = 1, perPage = 10, title = "", author = "" }, thunkAPI) => {
    try {
      const response = await axios.get("/books/recommend", {
        params: {
          page,
          perPage,
          title: title.trim() || undefined,
          author: author.trim() || undefined,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addNewBook = createAsyncThunk(
  "books/addNewBooks",
  async ({ title, author, totalPages }, thunkAPI) => {
    try {
      const response = await axios.post("/books/add", {
        title,
        author,
        totalPages,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnBooks = createAsyncThunk(
  "books/fetchOwnBooks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/books/own");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delOwnBook = createAsyncThunk(
  "books/delOwnBook",
  async (bookId, thunkAPI) => {
    try {
      await axios.delete(`/books/remove/${bookId}`);
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const addBookFromRecommended = createAsyncThunk(
  "books/addRecomBook",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReadBook = createAsyncThunk(
  "books/addReadBook",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/books/${id}`);     
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const startReading = createAsyncThunk(
  "books/startReading",
  async ({ id, page }, thunkAPI) => {
    try {
      const response = await axios.post("/books/reading/start", { id, page });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const stopReading = createAsyncThunk(
  "books/stopReading",
  async ({ id, page }, thunkAPI) => {
    try {
      const response = await axios.post("/books/reading/finish", { id, page });
      console.log("response.data", response.data); //
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);