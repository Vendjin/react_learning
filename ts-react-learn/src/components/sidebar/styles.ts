import {Box, ListItemButton, ListItemIcon, styled} from "@mui/material";
import {tokens} from "../../theme";


export const LogoComponent = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '30px 25px',
        cursor: 'pointer',
    }));

export const BlueListItemButton = styled(ListItemButton)(
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return ({
            marginRight: '16px',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#1900D5 !important',
                color: '#FFFFFF',
                '&.MuiSvgIcon-root': {
                    color: `${colors.secondary.DEFAULT} !important`,
                }
            }
        })
    });

export const IconSidebar = styled(ListItemIcon) (
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return ({
            color: colors.secondary.DEFAULT,
            '&:hover': {
                backgroundColor: '#1900D5',
                color: '#FFFFFF'
            }
        })
    }
)