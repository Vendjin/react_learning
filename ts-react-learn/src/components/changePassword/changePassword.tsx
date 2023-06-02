import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {FormBlock, FormContent} from "./style";
import {Box, Grid, TextField} from "@mui/material";
import {AppButtonLoading} from "../appButton/appButton";
import {updateUserInfo} from "../../store/thunks/auth/authThunk";

const ChangePassword = () => {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    useEffect(() => {
        if (user) {
            setUsername(user.username)
            setPassword(user.password)
        }
    }, [user])

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const data = {
            id: user.id,
            username,

        }
        dispatch(updateUserInfo(data))
    }

    return (
        <FormBlock>
            <Grid component={'form'} noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                <FormContent>
                    <TextField value={username} onChange={(e)=> setUsername(e.target.value)} type='text' label='login' variant={"outlined"}/>
                    <TextField value={password} onChange={(e)=> setPassword(e.target.value)} type='password' label='Старый пароль' variant={"outlined"}/>
                    <TextField value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} type='password' label='Новый пароль' variant={"outlined"}/>
                </FormContent>

                <Box sx={{marginTop: 3}}>
                    <AppButtonLoading type="submit"
                                      variant="contained"
                                      fullWidth={true}
                                      sx={{marginRight: 0, marginLeft: 0}}
                    >
                        Сохранить
                    </AppButtonLoading>
                </Box>
            </Grid>
        </FormBlock>
    );
};

export default ChangePassword;