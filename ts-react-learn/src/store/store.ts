import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/auth/auth";

const store = configureStore({
    reducer: {
        auth: authSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;