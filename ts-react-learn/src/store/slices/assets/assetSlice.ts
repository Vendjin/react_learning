import {createSlice} from "@reduxjs/toolkit";
import {getFavoriteAssets, getTopPriceData} from "../../thunks/assets/assetsThunk";

const initialState: any = {
    assets: [],
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
        builder.addCase(getTopPriceData.fulfilled, (state, action) => {
            state.assets = action.payload
        })
    }
})

export default assetSlice.reducer