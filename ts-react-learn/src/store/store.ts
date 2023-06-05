import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth/authSlice";
import assetSlice from "./slice/assets/assetSlice";
import watchListSlice from "./slice/watchList/watchListSlice";
import newsSlice from "./slice/news/newsSlice";

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