import {AppBar, Divider, Grid, Typography} from '@mui/material';
import React, {FC} from 'react';
import {MenuOutlined} from '@mui/icons-material';
import {CustomToolbar} from "./styles";
import FlexBetween from "../flexBetween/inedx";
import {ITopBarProps} from "../../common/types/topBar/iTopBar";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import SearchBar from "../searchBar/searchBar";
import {useAppSelector} from "../../utils/hook";

const TopBarComponent: FC<ITopBarProps> = ({isOpen, setIsOpen, isNonMobile}: ITopBarProps): JSX.Element => {
    const {user} = useAppSelector(state => state.auth);

    return (
        <AppBar position="static" sx={{boxShadow: 'none'}}>
            <CustomToolbar>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item sm={5} lg={3}>
                        <FlexBetween sx={{gap: '10px', cursor: 'pointer'}}>
                            <MenuOutlined onClick={() => setIsOpen(!isOpen)} sx={{ ...(isOpen && { display: 'none' }) }}></MenuOutlined>
                            <Typography variant={'h3'}>Welcome {user ? (`${user.firstName}`) : ('') }</Typography>
                        </FlexBetween>
                    </Grid>

                    {isNonMobile && (
                        <Grid display={'flex'}
                              justifyContent={'flex-end'}
                              alignItems={'center'}
                              item sm={7} lg={9}
                        >
                            <ThemeSwitcher/>
                            <Divider orientation="vertical"
                                     flexItem
                                     variant={'middle'}
                                     sx={{
                                         marginLeft: 2,
                                         marginRight: 2
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

