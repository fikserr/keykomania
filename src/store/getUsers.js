import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client, Databases } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, COLLECTION_ID_USERS, DATABASE_ID } from "../config/appwriteConfig";

const client = new Client();
const databases = new Databases(client);


client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
export const getUsersLogin = createAsyncThunk(
  "getUser/getUsersLogin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_USERS
      );
      return response.documents;
      
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice yaratish
const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    documents: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = action.payload;
      })
      .addCase(getUsersLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getUserSlice.reducer;
