import {Box, Divider, Grid, IconButton, InputBase, useTheme} from '@mui/material';
import React, {useContext} from 'react';
import {useAppSelector} from "../../utils/hook";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext} from "../../theme/theme";
import {SearchStack, TopBarBox} from "./styles";

const TopBarComponent = () => {
    const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);

    return (
        <TopBarBox>
            <Grid>Welcome {user.firstName} </Grid>
            <Box display={'flex'}>
                <Grid onClick={colorMode.toggleColorMode}>
                    <IconButton>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>
                </Grid>
                <Grid marginLeft={4}>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Divider orientation="vertical"
                         flexItem
                         variant={'middle'}
                         sx={{
                             marginLeft: '1.8rem',
                             marginRight: 3
                         }}
                />
                <SearchStack>
                    <IconButton sx={{'&:hover': {background: 'transparent'}}}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase sx={{padding: '12px 18px'}}
                               placeholder={'Поиск'}
                    />
                </SearchStack>
            </Box>
        </TopBarBox>
    );
};

export default TopBarComponent;