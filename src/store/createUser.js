import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Client, Databases } from "appwrite";
import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT,
  COLLECTION_ID_USERS,
  DATABASE_ID,
  STREAM_API_KEY,
} from "../config/appwriteConfig";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";

// Appwrite mijozini sozlash
const client = new Client();
const databases = new Databases(client);

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);

// Foydalanuvchini yaratish uchun thunk
export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ userData,tokenApiUser}, { rejectWithValue }) => {
    const chatClient = new StreamChat(STREAM_API_KEY);

    const data = {
      FirstName: userData.FirstName,
      LastName: userData.LastName,
      PhoneNumber: userData.PhoneNumber,
      Password: userData.Password,
    };
    console.log(tokenApiUser,userData.Password);
    
    try {
      // StreamChat foydalanuvchisini sozlash
      console.log(userData.FirstName);
      
      const newUser = {
        id: userData.Password,
        name: userData.FirstName,
        image: "https://link.to/avatar.png", 
      };

      await chatClient.connectUser(newUser, tokenApiUser);

      // Appwrite'da hujjat yaratish
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID_USERS,
        `${uuidv4()}`,
        data
      );

      return { response, tokenApiUser }; // Muvaffaqiyatli natijani qaytaradi
    } catch (error) {
      console.error("Xatolik yuz berdi:", error.message);
      return rejectWithValue({
        message: error.message,
        custom: "Foydalanuvchi yaratishda xatolik yuz berdi",
      });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.response;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
