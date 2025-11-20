import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

export const register = createAsyncThunk(
  "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            // console.log('response:', response);            
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
  "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/signin", credentials);
            console.log("response:", response);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
  "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);