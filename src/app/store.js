import { configureStore } from '@reduxjs/toolkit'
import { AddSessionReducer } from '../addSessionSlice'
import { SessionsReducer } from '../sessionsSlice'

export const store = configureStore({
    reducer: {
        addSession: AddSessionReducer,
        sessions: SessionsReducer
    }
})