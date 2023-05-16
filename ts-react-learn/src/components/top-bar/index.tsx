import {AppBar, Box, Divider, Grid, IconButton, InputBase, Typography, useTheme} from '@mui/material';
import React, {useContext} from 'react';
import {useAppSelector} from "../../utils/hook";
import {DarkMode, LightMode, Notifications, Search, MenuOutlined} from '@mui/icons-material';
import {ColorModeContext} from "../../theme";
import {CustomToolbar, SearchGrid} from "./styles";
import FlexBetween from "../flexBetween/inedx";

const TopBarComponent = (props: any) => {
    const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);
    const {isOpen, setIsOpen} = props;

    return (
        <AppBar position="static" sx={{boxShadow: 'none'}}>
            <CustomToolbar>
                <FlexBetween sx={{gap: '10px', cursor: 'pointer'}}>
                    <MenuOutlined onClick={() => setIsOpen(!isOpen)}></MenuOutlined>
                    <Typography variant={'h3'}>Welcome {user.firstName}</Typography>
                </FlexBetween>
                <Box display={'flex'}>
                    <Grid onClick={colorMode.toggleColorMode}>
                        <IconButton>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                    </Grid>
                    <Grid marginLeft={4}>
                        <IconButton>
                            <Notifications/>
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
                    <SearchGrid>
                        <IconButton sx={{'&:hover': {background: 'transparent'}}}>
                            <Search/>
                        </IconButton>
                        <InputBase sx={{padding: '12px 18px'}}
                                   placeholder={'Поиск'}
                        />
                    </SearchGrid>
                </Box>
            </CustomToolbar>
        </AppBar>
    );
};

export default TopBarComponent;