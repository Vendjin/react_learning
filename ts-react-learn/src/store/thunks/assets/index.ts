import {createAsyncThunk} from "@reduxjs/toolkit";
import {coinGeckoApi} from "../../../utils/axios";

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: unknown, {rejectWithValue}) => {
        try {
            const assets = await coinGeckoApi.get(
                `/coins/markets?vs_currency=usd&ids=${data}`
            )
            return assets.data
        }catch (error) {

        }
    }
)