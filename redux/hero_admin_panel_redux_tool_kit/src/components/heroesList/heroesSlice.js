import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from '@reduxjs/toolkit';
import {useHttp} from "../../hooks/http.hook";

const heroesAdapter = createEntityAdapter();

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

const initialState = heroesAdapter.getInitialState({
    // а heroes будут лежать в entities, это стандартный объект getInitialState
    heroesLoadingStatus: 'idle',
});

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
            state.heroesLoadingStatus = 'loading'
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
// тк адаптер возвращает объект-объектов, а мы используем обычно список объектов,
// то используем getSelectors для стейта heroes, вытащим selectAll который возвращает список объектов
// на который и применится map
const {selectAll: selectAllHeroes} = heroesAdapter.getSelectors(state => state.heroes);

/*несколько стейтов с помощью createSelector
    1 строка получаем значение из стейта filters и оно сохраняется в filter
    2 строка получаем значение из стейта heroes и оно сохраняется в heroes*/
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
    // heroesFetching,
    // heroesFetched,
    // heroesFetchingError,
    heroAdd,
    heroDelete,
} = actions;