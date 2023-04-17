import React from 'react';
import './style.scss';
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom";
import Login from "./login";
import Register from "./register";

const AuthRootComponent = () => {
    const location = useLocation();


    return (
        <div className='root'>
            <div className='form'>
                <Box display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     flexDirection={'column'}
                     maxWidth={640}
                     margin={'auto'}
                     padding={5}
                     borderRadius={5}
                     boxShadow={'5px 5px 10px'}>
                    {location.pathname === '/login' ? <Login/> :
                        location.pathname === '/register' ? <Register/> :
                            null}
                </Box>
            </div>
        </div>
    );
    // return (
    //
    // );
};

export default AuthRootComponent;