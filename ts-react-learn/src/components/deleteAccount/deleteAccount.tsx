import { Box, Grid, TextField, Typography } from '@mui/material';
import React, {FC, useState} from 'react';
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { FormBlock } from "./style";
import { FormContent } from "../changePassword/style";
import { AppButtonLoading } from "../appButton/appButton";
import { deleteUser } from '../../store/thunks/auth/authThunk';
import {useNavigate} from "react-router-dom";

const DeleteAccount: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)
    const [deleteUserInput, setDeleteUserInput] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (deleteUserInput === 'УДАЛИТЬ') {
            const data = {
                id: user.id,
            }
            dispatch(deleteUser(data))
            navigate('/login')
        }

    }
    return (
        <>
            <Typography textAlign={'center'} margin={'0 auto'} width={'50%'}>
                Уважаемый пользователь, удаляя свой аккаунт, вы удалите все персональные данные.
                После удаления вся сохраннеая вами информация будет недоступна.
                Введите <span style={{color: 'red'}}>УДАЛИТЬ</span> для удаления акаунта.
            </Typography>
            <Box mb={5}></Box>
            <FormBlock>
                <Grid component={'form'} noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                    <FormContent>
                        <TextField value={deleteUserInput} onChange={event => setDeleteUserInput(event.target.value)} type='text' label='delete account' variant={"outlined"} />
                    </FormContent>

                    <Box sx={{ marginTop: 3 }}>
                        <AppButtonLoading type="submit"
                            variant="contained"
                            fullWidth={true}
                            sx={{ marginRight: 0, marginLeft: 0 }}
                        >
                            Удалить
                        </AppButtonLoading>
                    </Box>
                </Grid>
            </FormBlock>
        </>

    )

};

export default DeleteAccount;