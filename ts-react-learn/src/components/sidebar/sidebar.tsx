import React, {FC, useEffect, useState} from 'react';
import {Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {ChevronLeftOutlined, LogoutOutlined} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flexBetween/inedx";
import {navMenu} from "../../common/moks/navigate";
import {tokens} from "../../theme/theme";
import Logo from '../../assets/images/logo.svg';
import {ListItemButtonCustom, ListItemButtonNav, LogoComponent} from "./styles";
import {ISidebarProps} from "../../common/types/sidebar/iSidebar";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import SearchBar from "../searchBar/searchBar";

const SideBar: FC<ISidebarProps> = ({
                                        isNonMobile,
                                        drawerWidth,
                                        isOpen,
                                        setIsOpen,
                                        isSmallScreen
                                    }: ISidebarProps): JSX.Element => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(pathname)
    }, [pathname])

    useEffect(() => {
        setIsOpen(isSmallScreen)
    }, [isSmallScreen, setIsOpen])


    const handleLogout = () => {
        sessionStorage.removeItem('firstName')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
        navigate('/login')
    }

    const renderNavMenu = navMenu.map(itemMenu => (
        <ListItemButtonNav onClick={() => navigate(itemMenu.path)}
                           key={itemMenu.id}
                           className={activePage === itemMenu.path ? 'active' : ''}
        >
            <ListItemIcon sx={{color: colors.secondary.DEFAULT, paddingY: '8px'}}>
                {itemMenu.icon}
            </ListItemIcon>
            <ListItemText primary={itemMenu.name}/>
        </ListItemButtonNav>
    ))

    return (
        <Box component={'nav'}>
            {isOpen && (
                <Drawer open={isOpen}
                        onClose={() => setIsOpen(false)}
                        variant={'persistent'}
                        anchor={'left'}
                        sx={{
                            width: drawerWidth,
                            '& .MuiDrawer-paper': {
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.primary.main,
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                >
                    <Box sx={{borderBottom: `1px solid ${colors.borderColor}`}}>
                        <FlexBetween>
                            <LogoComponent>
                                <img src={Logo} alt={'logo'}/>
                                <Typography variant='h1'
                                            color={
                                                theme.palette.mode === 'dark' ?
                                                    colors.white.DEFAULT :
                                                    colors.black.DEFAULT
                                            }> Demo </Typography>
                            </LogoComponent>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined/>
                                </IconButton>
                            )}
                        </FlexBetween>

                        <List sx={{marginBottom: '55px'}}>
                            {!isNonMobile && (
                                <ListItem>
                                    <SearchBar/>
                                </ListItem>
                            )}
                            {renderNavMenu}
                        </List>
                    </Box>

                    <Box marginTop={3}>
                        {!isNonMobile && (
                            <ListItem sx={{marginLeft: '8px'}}>
                                <ThemeSwitcher/>
                            </ListItem>
                        )}

                        <ListItemButtonCustom onClick={handleLogout}>
                            <ListItemIcon sx={{color: colors.secondary.DEFAULT}}>
                                <LogoutOutlined/>
                            </ListItemIcon>
                            <ListItemText>LogOut</ListItemText>
                        </ListItemButtonCustom>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SideBar;