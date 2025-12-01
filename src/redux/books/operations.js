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
      console.log("fetchBooks response", response);
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
      console.log("new books response", response);
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
      console.log("OwnBooks response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delOwnBook = createAsyncThunk(
  "books/delOwnBook",
  async ({ id }, thunkAPI) => {
    try {
      console.log("id", id);
      
      const response = await axios.delete(`/books/remove/${id}`);
      return response.data;
    } catch (error) {
      console.error("Помилка видалення:", error.response?.data);
      const errorMessage = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
