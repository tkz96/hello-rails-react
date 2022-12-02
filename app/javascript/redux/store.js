import { configureStore } from '@reduxjs/toolkit'
import greetingsSlice from "./greetingSlice";

export const store = configureStore({
    reducer: {
        greetings: greetingsSlice,
    },
})