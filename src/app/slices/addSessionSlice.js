import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSessions = createAsyncThunk(
    "sessions/fetch",
    async (week_id, thunkAPI) => {
        try {
            const res = await fetch(`http://127.0.0.1:5000//api/emploi/${week_id}`);
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await res.json();
            await new Promise(res => setTimeout(res, 600)); // simulate the dellay
            return {
                date: "2026-02-02",
                data
            }; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    isModalOpen: false,
    placeHolder: {
        group: {
            id: 0,
            name: ''
        },
        module: {
            id: 0,
            name: '',
        },
        numSeance: 0,
        date: '',
        formateur: "",
    },
    sessionDetails: {
        type: "",
        extraGroups: [],
        room: "",
    }
}

const addSessionSlice = createSlice({
    name: "addSession",
    initialState,
    reducers: {
        updateSessionDetails: (state, action) => {
            state.placeHolder = {...state.placeHolder, ...action.payload}
        },
        openModal: (state, action) => {
            state.isModalOpen = true;
            state.placeHolder = {...state.placeHolder, ...action.payload};
            console.log(action.payload)
        },
        closeModal: (state, action) => {
            state.isModalOpen = false
        }

    }
})

export const { openModal, closeModal, updateSessionDetails } = addSessionSlice.actions

export const AddSessionReducer = addSessionSlice.reducer