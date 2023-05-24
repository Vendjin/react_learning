import React from 'react';
import {Box} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../utils/hook";
import {AppErrors} from "../../common/errors";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginSchema, RegisterSchema} from "../../utils/yup/yup";
import Login from '../../components/login/login';
import Register from '../../components/register/register';
import {AuthForm, RootAuthDiv} from "./styles";
import {loginUser, registerUser} from "../../store/thunks/auth/authThunk";

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
                console.log(data, 'Data for request to Login')
                await dispatch(loginUser(data))
                navigate('/');

            } catch (error) {
                return error
            }
        } else {
            if (data.password === data.confirmPassword) {
                console.log(data, 'Data for request to Register')
                try {
                    await dispatch(registerUser(data))
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