import {Button, styled} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

export const AppButton = styled(Button)(
    () => {
        return ({
            margin: 2,
            marginRight: '16px',
            marginLeft: '16px',
            borderRadius: 4,
            backgroundColor: '#1900D5',
            '&:hover': {
                backgroundColor: '#1900D5 !important',
            }
        })
    });

export const AppButtonLoading = styled(LoadingButton)(
    () => {
        return ({
            margin: 2,
            marginRight: '16px',
            marginLeft: '16px',
            borderRadius: 4,
            backgroundColor: '#1900D5',
            '&:hover': {
                backgroundColor: '#1900D5 !important',
            }
        })
    });