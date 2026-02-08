import { configureStore } from '@reduxjs/toolkit'
import { AddSessionReducer } from './slices/addSessionSlice'
import { SessionsReducer } from './slices/sessionsSlice'

export const store = configureStore({
    reducer: {
        addSession: AddSessionReducer,
        sessions: SessionsReducer
    }
})