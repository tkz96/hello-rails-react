import { configureStore } from '@reduxjs/toolkit'
import greetingSlice from "./greetingSlice";

export const store = configureStore({
    reducer: {
        greeting,
    },
})