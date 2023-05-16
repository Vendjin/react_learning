import {Box, Grid, styled, Toolbar} from '@mui/material';
import {tokens} from "../../theme";



export const CustomToolbar = styled(Toolbar) (
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return ({
            justifyContent: 'space-between',
            padding: '32px 24px',
            width: '100%',
            height: '100px',
            backgroundColor: theme.palette.primary.main,
            borderBottom: `1px solid ${colors.borderColor}`,
        })
    }
)

export const TopBarBox = styled(Box)(
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return ({
            display: 'flex',
            justifyContent: 'space-between',
            padding: '32px 24px',
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            borderBottom: `1px solid ${colors.borderColor}`,
        })
    }
)

export const SearchGrid = styled(Grid)(
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return (
            {
                display: 'flex',
                backgroundColor: colors.primary[600],
                border: 'solid 1px',
                borderColor: colors.gray[100],
                borderRadius: 8,
                height: '2.5rem'
            })
    }
)