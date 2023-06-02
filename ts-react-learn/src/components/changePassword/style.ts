import {Box, Grid, styled} from "@mui/material";
import {tokens} from "../../theme/theme";

export const FormBlock = styled(Grid)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        margin: '0 auto',
        width: '50%',
        alignContent: 'center',
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary.DEFAULT}`,
        padding: '20px 16px',
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark' ? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
        '& .MuiTableCell-head': {
            color: colors.secondary.DEFAULT,
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: colors.blue,
            },
        },
        '& label.Mui-focused': {
            color: `${
                theme.palette.mode === 'dark'
                    ? colors.white.DEFAULT
                    : colors.black.DEFAULT
            }`,
        },
    };
});

export const FormContent = styled(Box)
(() => {
    return {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    }
})