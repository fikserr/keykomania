import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Client, Databases } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, DATABASE_ID, STREAM_TOKEN_CALLID } from "../config/appwriteConfig";

const client = new Client();
const databases = new Databases(client);
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);


export const createTokenCallId = createAsyncThunk(
  "tokenCallId/createTokenCallId",
  async (userToken, { rejectWithValue }) => {
    
    const data = {
      stream_token: userToken.token,
      stream_call_id: userToken.callID,
    };

    try {

      const response = await databases.createDocument(
        DATABASE_ID,      
        STREAM_TOKEN_CALLID, 
        `${uuidv4()}`, 
        data            
      );

      return response;
    } catch (error) {

      console.error('Error creating document:', error);  // Konsolga xatolikni chiqarish
      return rejectWithValue(error?.message || error?.response?.data?.message || 'Unknown error');
    }
  }
);

const appWriteToken = createSlice({
  name: "tokenCallId",
  initialState: {
    tokenAppWrite: null,
    callIdAppWrite: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTokenCallId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTokenCallId.fulfilled, (state, action) => {
        state.loading = false;
        state.tokenAppWrite = action.payload.stream_token;
        state.callIdAppWrite = action.payload.stream_call_id;
      })
      .addCase(createTokenCallId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appWriteToken.reducer;
