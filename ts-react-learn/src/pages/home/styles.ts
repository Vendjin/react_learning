import {Box, Grid, styled} from "@mui/material";
import {tokens} from "../../theme/theme";

export const TopCardItem = styled(Grid)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        backgroundColor: `${theme.palette.mode === 'dark'? colors.primary[600] : colors.primary.DEFAULT}`,
        padding: '20px 16px',
        minHeight: 185,
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark'? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
    };
});

export const ItemDetail = styled(Box)(
    ({theme}) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    }));