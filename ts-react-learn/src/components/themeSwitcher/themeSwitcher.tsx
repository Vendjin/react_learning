import React, {useContext} from 'react';
import {Grid, IconButton, useTheme} from "@mui/material";
import {DarkMode, LightMode, Notifications} from "@mui/icons-material";
import {ColorModeContext} from "../../theme/theme";

const ThemeSwitcher = () => {
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);

    return (
        <>
            <Grid onClick={colorMode.toggleColorMode}>
                <IconButton>
                    {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                </IconButton>
            </Grid>
            <Grid marginLeft={2}>
                <IconButton>
                    <Notifications/>
                </IconButton>
            </Grid>
        </>
    );
};

export default ThemeSwitcher;