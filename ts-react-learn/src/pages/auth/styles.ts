import {styled} from "@mui/material";

export const RootAuthDiv = styled("div")(
    () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        padding: '20px',
    })
)

export const AuthForm = styled('form')(
    () => ({
        flex: 1,
        '& .includingText': {
            color: '#1900D5',
            marginLeft: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
        }
    })
)