import {Box, ListItemButton, styled, Theme} from "@mui/material";
import {tokens} from "../../theme/theme";
// import {makeStyles} from '@mui/styles';

export const LogoComponent = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '30px 25px',
        cursor: 'pointer',
    }));

export const ListItemButtonCustom = styled(ListItemButton)(
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return ({
            marginRight: '16px',
            marginLeft: '16px',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#1900D5 !important',
                color: '#FFFFFF',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`,
                }
            }
        })
    });


export const ListItemButtonNav = styled(ListItemButton)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        height: '45px',
        marginRight: '16px',
        marginLeft: '16px',
        borderRadius: '4px',
        marginBottom: '10px',

        "&.active": {
            background: '#1900D5 !important',
            color: `${colors.white.DEFAULT}`,
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
                color: `${colors.white.DEFAULT}`,
            },
            "&:hover": {
                cursor: "auto",
            },
        },

        "&:hover": {
            background: '#1900D5 !important',
            color: `${colors.white.DEFAULT}`,
            borderRadius: "4px",
            cursor: "pointer",
            "& .MuiSvgIcon-root": {
                color: `${colors.white.DEFAULT}`,
            },
        },
    };
});

/*
// код сделанные с помощью makeStyles из версии mui4
export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)

    return ({
        navItem: {
            marginRight: '16px',
            marginLeft: '16px',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#1900D5 !important',
                color: '#FFFFFF',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`,
                }
            }
        },
        active: {
            backgroundColor: '#1900D5 !important',
            color: '#fff !important',
            borderRadius: '4px',
            marginRight: '16px',
            marginLeft: '16px',
            '& .MuiSvgIcon-root': {
                color: `${colors.white.DEFAULT} !important`,
            }
        }
    })
})*/
