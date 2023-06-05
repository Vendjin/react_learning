import {FC, FormEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {FormBlock, FormContent} from "./style";
import {Box, Grid, TextField} from "@mui/material";
import {AppButtonLoading} from "../appButton/appButton";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth/authThunk";

const PersonalInfoSettings: FC = () :JSX.Element => {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')

    useEffect(() => {
        if (user) {
            setUsername(user.username)
            setEmail(user.email)
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setGender(user.gender)
        }
    }, [user])

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const data = {
            id: user.id,
            username,
            email,
            firstName,
            lastName,
            gender
        }
        dispatch(updateUserInfo(data))
        dispatch(getPublicUser(data.id))
    }

    return (
        <FormBlock>
            <Grid component={'form'} noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                <FormContent>
                    <TextField value={username} onChange={(e)=> setUsername(e.target.value)} type='text' label='login' variant={"outlined"}/>
                    <TextField value={email} onChange={e => setEmail(e.target.value)} type='email' label='email' variant={"outlined"}/>
                    <TextField value={firstName} onChange={e => setFirstName(e.target.value)} type='text' label='firstName' variant={"outlined"}/>
                    <TextField value={lastName} onChange={e => setLastName(e.target.value)} type='text' label='lastName' variant={"outlined"}/>
                    <TextField value={gender} onChange={e => setGender(e.target.value)} type='text' label='gender' variant={"outlined"}/>
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