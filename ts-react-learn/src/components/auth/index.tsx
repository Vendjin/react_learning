import React, {useState} from 'react';
import './style.scss';
import {Box} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import Login from "./login";
import Register from "./register";
import instance from "../../utils/axios";
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {AppErrors} from "../../common/errors";


const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (location.pathname === '/login') {
            try {
                const userData = {
                    username,
                    password
                };

                const user = await instance.post('auth/login', userData);
                await dispatch(login(user.data))
                console.log(user)
                navigate('/');

            } catch (error) {
                return error
            }
        } else {
            if (password === repeatPassword) {
                try {
                    const userData = {
                        name,
                        email,
                        username,
                        password,
                        repeatPassword
                    }
                    const user = JSON.stringify(userData);

                    console.log(user)
                } catch (error) {
                    return error
                }
            } else {
                throw new Error(AppErrors.PasswordDoNotMatch)
            }
        }
    }

    return (
        <div className='root'>
            <form className='form' onSubmit={handleSubmit}>
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
                            ? <Login setUsername={setUsername}
                                     setPassword={setPassword}/>
                            : location.pathname === '/register'
                                ? <Register setUsername={setUsername}
                                            setPassword={setPassword}
                                            setRepeatPassword={setRepeatPassword}
                                            setName={setName}
                                            setEmail={setEmail}/>
                                : null
                    }
                </Box>
            </form>
        </div>
    );
    // return (
    //
    // );
};

export default AuthRootComponent;