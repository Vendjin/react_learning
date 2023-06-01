import {Grid, styled} from "@mui/material";
import {tokens} from "../../theme/theme";

export const NewsBlock = styled(Grid)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        marginTop: 32,
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary.DEFAULT}`,
        padding: '20px 16px',
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark' ? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
        '& .MuiTableCell-head': {
            color: colors.secondary.DEFAULT,
        },
        '& a': {
            textDecoration: 'none',
            color: `${
                theme.palette.mode === 'light'
                    ? colors.black.DEFAULT
                    : colors.white.DEFAULT
            }`,
        },
    };
});

export const NewsContent = styled(Grid)
(() => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };
});