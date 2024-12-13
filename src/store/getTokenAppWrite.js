import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client, Databases } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, DATABASE_ID, STREAM_TOKEN_CALLID } from "../config/appwriteConfig";


const client = new Client();
const databases = new Databases(client);

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);


export const getTokenCallID = createAsyncThunk(
  "getUser/getUsersLogin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        STREAM_TOKEN_CALLID
      );
      return response.documents; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);


const getTokenCallIdAppWrite = createSlice({
  name: "getUser",
  initialState: {
    dataApp: [],  
    loading: false, 
    error: null,    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTokenCallID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTokenCallID.fulfilled, (state, action) => {
        state.loading = false;
        state.dataApp = action.payload;
      })
      .addCase(getTokenCallID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default getTokenCallIdAppWrite.reducer;
