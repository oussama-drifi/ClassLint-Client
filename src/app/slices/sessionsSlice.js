import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSessions = createAsyncThunk(
    "sessions/fetchSessions",
    async (week_id, thunkAPI) => {
        try {
            const res = await fetch(`http://127.0.0.1:5000//api/emploi/${week_id}`);
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await res.json();
            return data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const createSession = createAsyncThunk(
//     "sessions/createSession",
//     async (newSession, thunkAPI) => {
//         try {
//         const res = await fetch("", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newSession),
//         });

//         if (!res.ok) {
//             const errorData = await res.json();
//             return thunkAPI.rejectWithValue(errorData.message || "faild");
//         }

//         const data = await res.json();
//         return data;

//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

const initialState = {
    GroupsSessions: [],
    isLoading: true,
    error: null,
};

const SessionsSlice = createSlice({
    name: "sessions",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSessions.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchSessions.fulfilled, (state, action) => {
            state.isLoading = false;
            state.GroupsSessions = action.payload;
        })
        .addCase(fetchSessions.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Something wrong";
        })

        .addCase(createSession.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(createSession.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.data.push(action.payload);
        })
        .addCase(createSession.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
})

export const SessionsReducer = SessionsSlice.reducer