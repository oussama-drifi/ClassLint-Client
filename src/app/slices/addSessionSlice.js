import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shallowEqual } from "react-redux";


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
        groupId: 0,
        numSeance: 0,
        date: '',
        groupName: ''
    },
    sessionDetails: {
        groupId: 0,
        numSeance: 0,
        groupName: "",
        date: '',
        type: "",
        extraGroups: [],
        module: "",
        formateur: "",
        room: "",
    }
}

const addSessionSlice = createSlice({
    name: "addSession",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isModalOpen = true;
            state.placeHolder = action.payload;
            console.log(action.payload)
        },
        closeModal: (state, action) => {
            state.isModalOpen = false
        }

    }
})

export const { openModal, closeModal } = addSessionSlice.actions

export const AddSessionReducer = addSessionSlice.reducer