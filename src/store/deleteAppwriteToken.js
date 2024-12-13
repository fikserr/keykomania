import { Client, Databases } from 'appwrite';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, DATABASE_ID, STREAM_TOKEN_CALLID } from '../config/appwriteConfig';

// Appwrite'ни таништириш
const client = new Client();
client
    .setEndpoint(APPWRITE_ENDPOINT) // Appwrite сервер манзили
    .setProject(APPWRITE_PROJECT);  // Лойиҳа ID

const databases = new Databases(client);

// АсинхронThunk: Битта ҳужжатни ID бўйича ўчириш
export const deleteDocumentById = createAsyncThunk(
    'documents/deleteDocumentById',
    async (documentId, thunkAPI) => {
        console.log(documentId);
        
        try {
            // Ҳужжатни ўчириш
            await databases.deleteDocument(DATABASE_ID, STREAM_TOKEN_CALLID, documentId);

            return documentId; // Муваффақиятли ўчирилган ҳужжат ID қайтарилади
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Redux Toolkit слайси
const documentSliceId = createSlice({
    name: 'documents',
    initialState: {
        items: [],       // Ҳужжатлар рўйхати
        loading: false,  // Юкланиш ҳолати
        error: null,     // Хатолар
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteDocumentById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteDocumentById.fulfilled, (state, action) => {
                state.loading = false;
                // Ўчирилган ҳужжат ID бўйича уни рўйхатдан олиб ташлаш
                state.items = state.items.filter(doc => doc.$id !== action.payload);
            })
            .addCase(deleteDocumentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default documentSliceId.reducer;
