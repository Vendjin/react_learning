import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from '@reduxjs/toolkit';
import {useHttp} from "../../hooks/http.hook";

const heroesAdapter = createEntityAdapter();

const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle',
    error: null
});

export const fetchHeroes = createAsyncThunk(
    'heroes/fetch',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes");
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: initialState,
    reducers: {
        heroAdd: (state, action) => {
            // state.heroes.push(action.payload);
            heroesAdapter.addOne(state, action.payload);
        },
        heroDelete: (state, action) => {
            // state.heroes = state.heroes.filter(hero => hero.id !== action.payload);
            heroesAdapter.removeOne(state, action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
        // pending - что-то асинхронно формируется/отправляется
        .addCase(fetchHeroes.pending, state => {
            state.heroesLoadingStatus = 'loading';
            state.error = null
        })
        // fulfilled - промис/запрос выполнился успешно
        .addCase(fetchHeroes.fulfilled, (state, action) => {
            state.heroesLoadingStatus = 'idle';
            // state.heroes = action.payload;
            heroesAdapter.setAll(state, action.payload)
        })
        .addCase(fetchHeroes.rejected, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addDefaultCase(() => {
        })
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
const {selectAll: selectAllHeroes} = heroesAdapter.getSelectors(state => state.heroes);
export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    // (state) => state.heroes.heroes,
    selectAllHeroes,
    (filter, heroes) => {
        if (filter === 'all') {
            return heroes;
        } else {
            return heroes.filter(hero => hero.element === filter);
        }
    }
);

export const {
    heroAdd,
    heroDelete,
} = actions;