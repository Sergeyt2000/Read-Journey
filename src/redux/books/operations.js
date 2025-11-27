import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ page =1, perPage = 10 }, thunkAPI) => {
    try {
      const response = await axios.get("/books/recommend", {
        params: { page, perPage },
      });
      console.log("response", response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);