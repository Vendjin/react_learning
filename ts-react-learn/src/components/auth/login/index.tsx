import React from "react";
import {TextField, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {IPropsLogin} from "../../../common/types/auth";

const Login: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setUsername, setPassword} = props
    return (
        <>
            <Typography variant="h2"
                        padding={3}
                        fontFamily='Poppins'
                        fontWeight='normal'
                        textAlign='center'
            >
                Авторизация
            </Typography>
            <TextField label="login"
                       variant="outlined"
                       placeholder='Введите ваш login'
                       fullWidth={true}
                       margin='normal'

                       onChange={event => setUsername(
                           event.target.value
                       )}
            />

            <TextField label="password"
                       type='password'
                       variant="outlined"
                       placeholder='Введите ваш password'
                       fullWidth={true}
                       margin='normal'

                       onChange={event => setPassword(
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
                У вас нет аккаунта?
                <Link className='includingText'
                      to={'/register'}>
                    Регистрация
                </Link>
            </Typography>
        </>
    )
}

export default Login;