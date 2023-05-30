import {AppBar, Divider, Grid, Typography} from '@mui/material';
import React, {FC} from 'react';
import {MenuOutlined} from '@mui/icons-material';
import {CustomToolbar} from "./styles";
import FlexBetween from "../flexBetween/inedx";
import {ITopBarProps} from "../../common/types/topBar/iTopBar";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import SearchBar from "../searchBar/searchBar";

const TopBarComponent: FC<ITopBarProps> = ({isOpen, setIsOpen, isNonMobile}: ITopBarProps): JSX.Element => {

    return (
        <AppBar position="static" sx={{boxShadow: 'none'}}>
            <CustomToolbar>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween sx={{gap: '10px', cursor: 'pointer'}}>
                            <MenuOutlined onClick={() => setIsOpen(!isOpen)}></MenuOutlined>
                            <Typography variant={'h3'}>Welcome {sessionStorage.getItem('firstName')}</Typography>
                        </FlexBetween>
                    </Grid>

                    {isNonMobile && (
                        <Grid display={'flex'}
                              justifyContent={'flex-end'}
                              alignItems={'center'}
                              item sm={9} lg={9}
                        >
                            <ThemeSwitcher/>
                            <Divider orientation="vertical"
                                     flexItem
                                     variant={'middle'}
                                     sx={{
                                         marginLeft: '1.8rem',
                                         marginRight: 3
                                     }}
                            />
                            <SearchBar/>
                        </Grid>
                    )}
                </Grid>
            </CustomToolbar>
        </AppBar>
    );
};

export default TopBarComponent;

