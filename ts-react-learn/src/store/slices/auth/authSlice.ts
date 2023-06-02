import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../common/types/auth/auth";
import {getPublicUser, loginUser, registerUser} from "../../thunks/auth/authThunk";

const initialState: IAuthState = {
    user: {
        id: null,
        username: '',
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        image: '',
    },
    isLogged: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, state => {
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.rejected, state => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, state => {
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
        })
        builder.addCase(registerUser.rejected, state => {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(getPublicUser.fulfilled, (state, action) => {
            state.user.id = action.payload.id
            state.user.username = action.payload.username
            state.user.firstName = action.payload.firstName
            state.user.lastName = action.payload.lastName
            state.user.email = action.payload.email
            state.user.gender = action.payload.gender
            state.user.image = action.payload.image
        })
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer