import {createSlice} from '@reduxjs/toolkit';

const apiKey = '<API_KEY>';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: '',
        data: null,
        error: null,
        loading: false,
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },

        setData: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },

    },
});

export const {
    setCity,
    setData,
} = weatherSlice.actions;

