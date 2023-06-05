import {FC, useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { FormBlock, FormContent } from "./style";
import { Box, Grid, TextField } from "@mui/material";
import { AppButtonLoading } from "../appButton/appButton";
import { updateUserInfo } from "../../store/thunks/auth/authThunk";

const ChangePassword: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    useEffect(() => {
        if (user) {
            setUsername(user.username)
            setOldPassword(user.password)
        }
    }, [user])

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (oldPassword === newPassword) {
            const data = {
                id: user.id,
                username,
                password: newPassword
            }
            dispatch(updateUserInfo(data))
        }
    }

    return (
        <FormBlock>
            <Grid component={'form'} noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                <FormContent>
                    <TextField value={username} onChange={event => setUsername(event.target.value)} type='text' label='login' variant={"outlined"} />
                    <TextField value={oldPassword} onChange={event => setOldPassword(event.target.value)} type='password' label='Старый пароль' variant={"outlined"} />
                    <TextField value={newPassword} onChange={event => setNewPassword(event.target.value)} type='password' label='Новый пароль' variant={"outlined"} />
                </FormContent>

                <Box sx={{ marginTop: 3 }}>
                    <AppButtonLoading type="submit"
                        variant="contained"
                        fullWidth={true}
                        sx={{ marginRight: 0, marginLeft: 0 }}
                    >
                        Сохранить
                    </AppButtonLoading>
                </Box>
            </Grid>
        </FormBlock>
    );
};

export default ChangePassword;