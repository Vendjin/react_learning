import {createAsyncThunk} from "@reduxjs/toolkit";
import {watchListApi} from "../../../utils/axios";

export const getWatchList = createAsyncThunk(
    'watchList/get',
    async (_, {rejectWithValue}) => {
        try {
            const asset = await watchListApi.get('watchList',)
            return asset.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)