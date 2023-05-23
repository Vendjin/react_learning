import React from "react";
import {TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {IPropsLogin} from "../../common/types/auth/auth";
import {AppButtonLoading} from "../appButton/appButton";
import {useAppSelector} from "../../utils/hook";

const Login: React.FC<IPropsLogin> = ({register, errors}: IPropsLogin): JSX.Element => {
    const loading = useAppSelector(state => state.auth.isLoading);

    return (
        <>
            <Typography variant="h2"
                        padding={3}
                        fontSize={32}
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
                       error={!!errors.username}
                       helperText={errors.username ? `${errors.username.message}` : ''}
                       {...register('username')}
                /*//без использования yup
                {...register('username', {
                    required: 'Это обязательное поле',
                    // pattern: 'регулярка паттерна'
                })}*/
            />

            <TextField label="password"
                       type='password'
                       variant="outlined"
                       placeholder='Введите ваш password'
                       fullWidth={true}
                       margin='normal'
                       error={!!errors.password}
                       helperText={errors.password ? `${errors.password.message}` : ''}
                       {...register('password')}
                /*//без использования yup
               {...register('password', {
                   required: 'Это обязательное поле',
                   minLength: 6

               })}*/
            />

            <AppButtonLoading variant="contained"
                              fullWidth={true}
                              type='submit'
                              loading={loading}
            >
                Contained
            </AppButtonLoading>

            <Typography variant='body1'
                        sx={{
                            marginTop: 1
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