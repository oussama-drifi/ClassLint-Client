import { configureStore } from '@reduxjs/toolkit'
import { AddSessionReducer } from './slices/addSessionSlice'
import { SessionsReducer } from './slices/sessionsSlice'
import { statisticsReducer } from './slices/statisticsSlice'

export const store = configureStore({
    reducer: {
        addSession: AddSessionReducer,
        sessions: SessionsReducer,
        statistics: statisticsReducer
    }
})