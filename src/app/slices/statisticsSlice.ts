import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStatistics = createAsyncThunk(
    "statistics/fetchStatistics",
    async (_, thunkAPI) => {
        try {
            console.log("fetching data")
            const res = await fetch(`http://127.0.0.1:5000/api/progress`);
            if (!res.ok) {
                throw new Error("Failed to fetch statistics");
            }
            const data = await res.json();
            await new Promise(res => setTimeout(res, 600)); // simulate the dellay
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    statistics: [],
    isLoading: true,
    error: null,
};


const statisticsSlice = createSlice({
    name: "statistics",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchStatistics.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchStatistics.fulfilled, (state, action) => {
            state.isLoading = false;
            state.statistics = action.payload;
        })
        .addCase(fetchStatistics.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Something wrong";
        })
    }
})

export const statisticsReducer = statisticsSlice.reducer;