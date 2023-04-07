import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "../pages/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;