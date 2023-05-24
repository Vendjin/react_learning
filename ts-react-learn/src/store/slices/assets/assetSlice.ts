import {createSlice} from "@reduxjs/toolkit";
import {getFavoriteAssets} from "../../thunks/assets/assetsThunk";

const initialState: any = {
    asserts: [],
    favoriteAssets: [],
    isLoaded: false
}


export const assetSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavoriteAssets.pending, state => {
            state.isLoaded = false
        })
        builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
            state.isLoaded = true
            state.favoriteAssets.push(action.payload)
        })
        builder.addCase(getFavoriteAssets.rejected, state => {
            state.isLoaded = false
        })
    }
})

export default assetSlice.reducer