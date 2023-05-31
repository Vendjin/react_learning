import {createSlice} from "@reduxjs/toolkit";
import {getWatchList} from "../../thunks/watchList/wathcListThunk";

const initialState: any = {
  watchList: [],
}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchList.fulfilled, (state, action) => {
            console.log(action.payload)
            state.watchList = action.payload
        })
    }
})

export default watchListSlice.reducer

