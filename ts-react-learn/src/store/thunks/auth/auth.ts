import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginData, IRegisterData} from "../../../common/types/auth/auth";
import instance from "../../../utils/axios";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data:ILoginData, {rejectWithValue}) => {
        try {
            const user = await instance.post('auth/login', data);
            console.log(user.data, 'Response DATA in Login')
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('firstName', user.data.firstName)
            return user.data
        } catch (error: any) {
            // если вернется кастомная ошибка из API
            if (error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response.data.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: IRegisterData, {rejectWithValue})=> {
        try {
            const user = await instance.post('users/add')
            console.log(user.data, 'Response data il Register')
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('firstName', user.data.firstName)
            return user.data
        } catch (error: any) {
            // если вернется кастомная ошибка из API
            if (error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response.data.message)
            }
        }
    }
)