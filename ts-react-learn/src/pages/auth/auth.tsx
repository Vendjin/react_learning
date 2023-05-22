import React from 'react';
import {Box} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import instance from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginSchema, RegisterSchema} from "../../utils/yup/yup";
import Login from './login/login';
import Register from './register/register';
import {AuthForm, RootAuthDiv} from "./styles";

const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
        mode: "onSubmit"
    });

    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                const userData = {
                    username: data.username,
                    password: data.password
                };

                const user = await instance.post('auth/login', userData);
                console.log(user.data)
                await dispatch(login(user.data))
                navigate('/');

            } catch (error) {
                return error
            }
        } else {
            if (data.password === data.confirmPassword) {
                console.log(data)
                try {
                    const userData = {
                        name: data.name,
                        email: data.email,
                        username: data.username,
                        password: data.password,
                        confirmPassword: data.confirmPassword,
                    }
                    const newUser = JSON.stringify(userData);
                    console.log(newUser);
                    await dispatch(login(newUser))
                    navigate('/')
                } catch (error) {
                    return error
                }
            } else {
                throw new Error(AppErrors.PasswordDoNotMatch)
            }
        }
    }

    return (
        <RootAuthDiv>
            <AuthForm onSubmit={handleSubmit(handleSubmitForm)}>
                <Box display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     flexDirection={'column'}
                     maxWidth={640}
                     margin={'auto'}
                     padding={5}
                     borderRadius={5}
                     boxShadow={'5px 5px 10px'}
                >
                    {
                        location.pathname === '/login'
                            ? <Login register={register}
                                     errors={errors}
                            />
                            : location.pathname === '/register'
                                ? <Register register={register}
                                            errors={errors}/>
                                : null
                    }
                </Box>
            </AuthForm>
        </RootAuthDiv>
    );
};

export default AuthRootComponent;