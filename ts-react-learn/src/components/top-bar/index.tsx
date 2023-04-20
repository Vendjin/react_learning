import {Box, Grid, IconButton, InputBase, useTheme} from '@mui/material';
import React, {useContext} from 'react';
import {useAppSelector} from "../../utils/hook";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext, tokens} from "../../theme";

const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useContext(ColorModeContext);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingX: '32px',
            paddingY: '24px'
        }}>
            <Grid>Welcome {user.firstName} </Grid>
            <Box display={'flex'}>
                <Grid onClick={colorMode.toggleColorMode}>
                    <IconButton>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>
                </Grid>
                <Grid>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>

                <Grid sx={{
                    display: 'flex',
                    backgroundColor: colors.primary[600]

                }}>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;