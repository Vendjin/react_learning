import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import {useHttp} from "../../hooks/http.hook";

const filtersAdapter = createEntityAdapter();
/*const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
};*/

const initialState = filtersAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
})

export const fetchFilters = createAsyncThunk(
    'filters/fetch',
    async () => {
        const {request} = useHttp();
        return await request('http://localhost:3001/filters');
    }
);

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        // тк добавлены extraReducers, которые выполняют этот же код, то их можно удалить
        /*filtersFetching: state => {
            state.filtersLoadingStatus = 'loading';
        },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload;
        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = 'error';
        },*/
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchFilters.pending, state => {
            state.filtersLoadingStatus = 'loading';
        })
        .addCase(fetchFilters.fulfilled, (state, action) => {
            state.filtersLoadingStatus = 'idle';
            // state.filters = action.payload;
            filtersAdapter.setAll(state, action.payload);

        })
        .addCase(fetchFilters.rejected, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = filtersSlice;
export default reducer;
export const {selectAll: selectAllFilters} = filtersAdapter.getSelectors(state => state.filters);

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged,
} = actions;