import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    placeHolder: {
        groupId: 1,
        numSeance: 1,
        date: ''
    }
}

const addSessionSlice = createSlice({
    name: "addSession",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isModalOpen = true;
            state.placeHolder = action.payload
            console.log(action.payload)
        },
        closeModal: (state, action) => {
            state.isModalOpen = false
        }

    }
})

export const { openModal, closeModal } = addSessionSlice.actions

export const AddSessionReducer = addSessionSlice.reducer