import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import assetSlice from "./slices/assets/assetSlice";
import watchListSlice from "./slices/watchList/watchListSlice";
import newsSlice from "./slices/news/newsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        assets: assetSlice,
        watchList: watchListSlice,
        news: newsSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production',
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;