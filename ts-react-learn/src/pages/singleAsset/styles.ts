import {Grid, styled, Typography} from "@mui/material";
import {tokens} from "../../theme/theme";

export const PriceColored = styled(Typography)(
    () => ({
        "&.positive": {
            color: '#A9FFA7',
        },
        '&.negative': {
            color: '#FFA7A7',
        },
    })
)

export const CardItem = styled(Grid)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25px',
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary.DEFAULT}`,
        paddingTop: '20px 16px',
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark' ? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
        width: '100%',
        maxWidth: 500,
        minHeight: 85,
        maxHeight: 185,

    };
});

export const CardBox = styled(Grid)
(() => {
    return {
        display: 'flex',
        justifyContent: 'center',
    };
});