import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import {axiosInstance} from "../../utils/axios";

export const ROOT_URL = 'http://127.0.0.1:80/api/v0/auth/login/';
const initialState = {
    user: {
        user_id: '',
        user_name: '',
        token: ''
    },
    isLoading: false,
    isLogged: false | Cookies.get('isLogged'),
}


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data, {rejectWithValue}) => {
        try {
            const user = await axiosInstance.post('api/v0/auth/login/', data);
            console.log(user.data)
            sessionStorage.setItem('userId', user.data.user_id);
            sessionStorage.setItem('userName', user.data.user_name);
            sessionStorage.setItem('token', user.data.token);
            return user.data
        } catch (e) {
            if (e.response.status === 401) {
                throw new Error('Неверный логин или пароль')
            }
            if (e.response && e.response.data.detail) {
                return rejectWithValue(e.response.data.detail)
            }

            else {
                return rejectWithValue(e.message)
            }
        }
    }
)

export const logOutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('token');
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, state => {
            state.isLoading = true;
            state.isLogged = false;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
            state.isLogged = true;
            state.isLoading = false;
        })
        builder.addCase(loginUser.rejected, state => {
            state.isLoading = false;
            state.isLogged = false;
        })
        builder.addCase(logOutUser.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(logOutUser.fulfilled, (state, action) => {
            state.user = {};
            state.isLogged = false;
            state.isLoading = false;
        })
    }
})

export const {actions, reducer} = authSlice;
export default reducer;
export const {
    userLogin
} = actions