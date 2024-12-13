import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client, Databases } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, COLLECTION_ID_USERS, DATABASE_ID } from "../config/appwriteConfig";

const client = new Client();
const databases = new Databases(client);


client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
export const getDataDynamic = createAsyncThunk(
  "getDynamic/getDynamicUsers",
  async (path, { rejectWithValue }) => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        path
      );
      return response.documents;
      
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice yaratish
const getDataUser = createSlice({
  name: "getDynamic",
  initialState: {
    documents: [],
    loading: false,
    error: null,
  },
  reducers: {
    ZaroProduct: (state) => {
        state.documents = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataDynamic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataDynamic.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = action.payload;
      })
      .addCase(getDataDynamic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {ZaroProduct} = getDataUser.actions;
export default getDataUser.reducer;
