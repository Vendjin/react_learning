import React, {useEffect, useState} from 'react';
import {Box, Drawer, IconButton, List, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {ChevronLeftOutlined, LogoutOutlined,} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flexBetween/inedx";
import {navMenu} from "../../common/moks/navigate";
import {tokens} from "../../theme";
import Logo from '../../assets/images/logo.svg';
import {BlueListItemButton, LogoComponent} from "./styles";

const SideBar = ({isNonMobile, drawerWidth, isOpen, setIsOpen, isLowMonitor}: any) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(pathname.substring(1))
    }, [pathname])

    const renderNavMenu = navMenu.map(itemMenu => (
        <BlueListItemButton onClick={() => navigate(`${itemMenu.path}`)}
                            key={itemMenu.id}
                            sx={{marginLeft: '16px'}}
        >
            <ListItemIcon sx={{color: colors.secondary.DEFAULT}}>
                {itemMenu.icon}
            </ListItemIcon>
            <ListItemText primary={itemMenu.name}/>
        </BlueListItemButton>
    ))

    return (
        <Box component={'nav'}>
            {isLowMonitor && isOpen && (
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
                            {renderNavMenu}
                        </List>
                    </Box>

                    <Box marginTop={3}>
                        <BlueListItemButton sx={{marginLeft: '16px'}}>
                            <ListItemIcon sx={{color: colors.secondary.DEFAULT}}>
                                <LogoutOutlined/>
                            </ListItemIcon>
                            <ListItemText>LogOut</ListItemText>
                        </BlueListItemButton>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SideBar;