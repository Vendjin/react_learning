import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {FormBlock, FormContent} from "./style";
import {Box, Grid, TextField} from "@mui/material";
import {AppButtonLoading} from "../appButton/appButton";
import {getPublicUser} from "../../store/thunks/auth/authThunk";

const PersonalInfoSettings = () => {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.auth);
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: ''
    })

    useEffect(() => {
        console.log(user)
        // setUserInfo({
        //     // username: user.username
        // })
    }, [user])

    return (
        <FormBlock>
            <Grid component={'form'} noValidate autoComplete={'off'}>
                <FormContent>
                    <TextField value={userInfo.username} type='text' label='login' variant={"outlined"}/>
                    <TextField value={userInfo.email} type='email' label='email' variant={"outlined"}/>
                    <TextField value={userInfo.firstName} type='text' label='firstName' variant={"outlined"}/>
                    <TextField value={userInfo.lastName} type='text' label='lastName' variant={"outlined"}/>
                    <TextField value={userInfo.gender} type='text' label='gender' variant={"outlined"}/>
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

export default PersonalInfoSettings;