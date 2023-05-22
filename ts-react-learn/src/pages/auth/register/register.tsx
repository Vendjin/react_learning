import {Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import {IPropsRegister} from "../../../common/types/auth";
import {AppButton} from "../../../components/appButton/appButton";

const Register: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    // const {setUsername, setPassword, setRepeatPassword, setName, setEmail} = props;
    const {register, errors} = props
    return (
        <>
            <Typography variant="h2"
                        padding={3}
                        fontSize={32}
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
                       error={!!errors.name}
                       {...register('name')}
                       helperText={errors.name ? `${errors.name.message}` : ''}
                /*onChange={event => setName(
                    event.target.value
                )}*/
            />

            <TextField label="Email"
                       variant="outlined"
                       placeholder='Введите ваш email'
                       fullWidth={true}
                       margin='normal'
                       error={!!errors.email}
                       {...register('email')}
                       helperText={errors.email ? `${errors.email.message}` : ''}
                /*onChange={event => setEmail(
                    event.target.value
                )}*/
            />

            <TextField label="Login"
                       variant="outlined"
                       placeholder='Придумайте ваш login'
                       fullWidth={true}
                       margin='normal'
                       error={!!errors.username}
                       {...register('username')}
                       helperText={errors.username ? `${errors.username.message}` : ''}
                /*onChange={event => setUsername(
                    event.target.value
                )}*/
            />

            <TextField label="Password"
                       type='password'
                       variant="outlined"
                       placeholder='Придумайте ваш password'
                       fullWidth={true}
                       margin='normal'
                       error={!!errors.password}
                       {...register('password')}
                       helperText={errors.password ? `${errors.password.message}` : ''}
                /*onChange={event => setPassword(
                    event.target.value
                )}*/
            />

            <TextField label="Password again"
                       type='password'
                       variant="outlined"
                       placeholder='Повторите ваш password'
                       fullWidth={true}
                       margin='normal'
                       error={!!errors.confirmPassword}
                       {...register('confirmPassword')}
                       helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                /*onChange={event => setRepeatPassword(
                    event.target.value
                )}*/
            />

            <AppButton variant="contained"
                       fullWidth={true}
                       type='submit'
            >
                Contained
            </AppButton>

            <Typography variant='body1'
                        sx={{
                            marginTop: 1
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