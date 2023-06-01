import {createAsyncThunk} from "@reduxjs/toolkit";
import {cryptoCompare} from "../../../utils/axios/axiosInstanсes";

export const getNews = createAsyncThunk(
    'get-news',
    async (_, {rejectWithValue}) => {
        try {
            const news = await cryptoCompare.get('news/?lang=EN')
            console.log(news.data.Data)
            return news.data.Data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)