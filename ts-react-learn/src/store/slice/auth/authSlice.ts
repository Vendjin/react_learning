import {createSlice} from "@reduxjs/toolkit";
import {getPublicUser, loginUser, registerUser, updateUserInfo} from "../../thunks/auth/authThunk";
import {IAuthState, IPublicUser} from "../../../common/types/auth/auth";

const initialState: IAuthState = {
    user: {} as IPublicUser,
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
            state.user.password = action.payload.password
        })
        builder.addCase(updateUserInfo.fulfilled, (state, action) => {
            state.user.username = action.payload.username
            state.user.firstName = action.payload.firstName
            state.user.lastName = action.payload.lastName
            state.user.email = action.payload.email
            state.user.gender = action.payload.gender
        })
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer