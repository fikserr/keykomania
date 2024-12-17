import { Client, Databases } from 'appwrite';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT, DATABASE_ID, STREAM_TOKEN_CALLID } from '../config/appwriteConfig';

// Appwrite'ни таништириш
const client = new Client();
client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT); 

const databases = new Databases(client);


export const deleteDocumentById = createAsyncThunk(
    'documents/deleteDocumentById',
    async (documentId, thunkAPI) => {
        console.log(documentId);
        
        try {
            // Ҳужжатни ўчириш
            await databases.deleteDocument(DATABASE_ID, STREAM_TOKEN_CALLID, documentId);

            return documentId; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const documentSliceId = createSlice({
    name: 'documents',
    initialState: {
        items: [],      
        loading: false,  
        error: null,     
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
                state.items = state.items.filter(doc => doc.$id !== action.payload);
            })
            .addCase(deleteDocumentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default documentSliceId.reducer;
