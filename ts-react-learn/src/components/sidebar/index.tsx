import React, {useEffect, useState} from 'react';
import {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    AutoGraphOutlined,
    AutoStoriesOutlined,
    SettingsOutlined,
    LogoutOutlined,
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flexBetween/inedx";
import {navMenu} from "../../common/moks/navigate";

const SideBar = ({isNonMobile, drawerWidth, isOpen, setIsOpen}: any) => {
    const theme = useTheme();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(pathname.substring(1))
    }, [pathname])

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
                                width: drawerWidth
                            },
                        }}
                >
                    <Box width={'100%'}>
                        <Box>
                            <FlexBetween>
                                <Box display={'flex'}
                                     alignItems={'center'}
                                     gap={'10px'}
                                >
                                    <Typography>Demo</Typography>

                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {
                                navMenu.map(itemMenu => (
                                    <ListItemButton onClick={() => navigate(`${itemMenu.path}`)} key={itemMenu.id}>
                                        <ListItemText primary={itemMenu.name}/>
                                    </ListItemButton>
                                ))
                            }
                        </List>

                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SideBar;