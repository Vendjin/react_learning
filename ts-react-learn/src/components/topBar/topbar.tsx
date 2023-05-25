import {AppBar, Box, Divider, Grid, IconButton, InputBase, Typography, useTheme} from '@mui/material';
import React, {FC, useContext} from 'react';
import {DarkMode, LightMode, MenuOutlined, Notifications, Search} from '@mui/icons-material';
import {ColorModeContext} from "../../theme/theme";
import {CustomToolbar, SearchGrid} from "./styles";
import FlexBetween from "../flexBetween/inedx";
import {ITopBarProps} from "../../common/types/topBar/iTopBar";

const TopBarComponent: FC<ITopBarProps> = ({isOpen, setIsOpen}: ITopBarProps): JSX.Element => {
    // const user = useAppSelector(state => state.auth.user);
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);

    return (
        <AppBar position="static" sx={{boxShadow: 'none'}}>
            <CustomToolbar>
                <FlexBetween sx={{gap: '10px', cursor: 'pointer'}}>
                    <MenuOutlined onClick={() => setIsOpen(!isOpen)}></MenuOutlined>
                    <Typography variant={'h3'}>Welcome {sessionStorage.getItem('firstName')}</Typography>
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