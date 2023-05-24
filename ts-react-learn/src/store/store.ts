import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import assetSlice from "./slices/assets/assetSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;