import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useHttp} from "../../hooks/http.hook";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

export const fetchHeroes = createAsyncThunk(
    // прописать name среза к которому делается AsyncThunk,
    // потом / и название действия которое делается
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
        // тк добавлены extraReducers, которые выполняют этот же код, то их можно удалить
        /*heroesFetching: state => {
            /!*этот код нарушает принцип иммутабильности, но используя createSlice
            подтягивается библиотека ImmerJs которая сделает этот код иммутабильным
            по сути пишем простой код, который превратится в сложный*!/
            state.heroesLoadingStatus = 'loading';
        },
        heroesFetched: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'error';
        },*/
        heroAdd: (state, action) => {
            state.heroes.push(action.payload);
        },
        heroDelete: (state, action) => {
            state.heroes = state.heroes.filter(hero => hero.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
        // pending - что-то асинхронно формируется/отправляется
        .addCase(fetchHeroes.pending, state => {
            state.heroesLoadingStatus = 'loading'
        })
        // fulfilled - промис/запрос выполнился успешно
        .addCase(fetchHeroes.fulfilled, (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        })
        .addCase(fetchHeroes.rejected, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroAdd,
    heroDelete,
} = actions;