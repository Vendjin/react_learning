import {Box, Grid, styled} from "@mui/material";
import {tokens} from "../../theme/theme";

export const TopCardItem = styled(Grid)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary.DEFAULT}`,
        padding: '20px 16px',
        minHeight: 185,
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark' ? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
    };
});

export const ItemDetail = styled(Box)(
    () => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    }));


export const ItemGraph = styled(Grid)(
    () => ({
        display: 'flex',
        alignItems: 'flex-end',
    }));


export const PriceIndicator = styled(Box)(
    () => ({
        marginTop: 8,
        height: 30,
        width: 76,
        borderRadius: 4,
        padding: '4px 8px',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        "&.positive": {
            background: '#A9FFA7',
            color: '#037400',
        },
        '&.negative': {
            background: '#FFA7A7',
            color: '#740000',
        },
    })
)

export const LineChartBlock = styled(Grid)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        marginTop: 32,
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary.DEFAULT}`,
        padding: '20px 16px',
        minHeight: 270,
        // maxHeight: 290,
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark' ? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
        alignContent: 'center'
    };
});