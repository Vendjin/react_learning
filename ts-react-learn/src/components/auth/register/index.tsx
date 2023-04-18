import {Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import {IPropsRegister} from "../../../common/types/auth";

const Register: React.FC<IPropsRegister> = (props:IPropsRegister):JSX.Element => {
    const {setUsername, setPassword, setRepeatPassword, setName, setEmail} = props;

    return (
        <>
            <Typography variant="h2"
                        padding={3}
                        fontFamily='Poppins'
                        fontWeight='normal'
                        textAlign='center'
            >
                Регистрация
            </Typography>

            <TextField label="Имя"
                       variant="outlined"
                       placeholder='Введите ваше имя'
                       fullWidth={true}
                       margin='normal'
                       onChange={event => setName(
                           event.target.value
                       )}
            />

            <TextField label="Email"
                       variant="outlined"
                       placeholder='Введите ваш email'
                       fullWidth={true}
                       margin='normal'
                       onChange={event => setEmail(
                           event.target.value
                       )}
            />

            <TextField label="Login"
                       variant="outlined"
                       placeholder='Придумайте ваш login'
                       fullWidth={true}
                       margin='normal'
                       onChange={event => setUsername(
                           event.target.value
                       )}
            />

            <TextField label="Password"
                       type='password'
                       variant="outlined"
                       placeholder='Придумайте ваш password'
                       fullWidth={true}
                       margin='normal'
                       onChange={event => setPassword(
                           event.target.value
                       )}
            />

            <TextField label="Password again"
                       type='password'
                       variant="outlined"
                       placeholder='Повторите ваш password'
                       fullWidth={true}
                       margin='normal'
                       onChange={event => setRepeatPassword(
                           event.target.value
                       )}
            />

            <Button variant="contained"
                    fullWidth={true}
                    sx={{
                        fontFamily: 'Poppins',
                        margin: 2,
                        height: ''
                    }}
                    type='submit'
            >
                Contained
            </Button>

            <Typography variant='body1'
                        sx={{
                            fontFamily: 'Poppins',
                        }}
            >
                У вас уже есть аккаунт?
                <Link className='includingText'
                      to={'/login'}>
                    Авторизация
                </Link>
            </Typography>
        </>
    )
}

export default Register;