import TopBar from "../top-bar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import Sidebar from "../sidebar";
import {useState} from "react";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const isLowMonitor = useMediaQuery('(min-width:1025px)');

    return (
        location.pathname === '/login' || location.pathname === '/register'
            ? (
                <>
                    <Outlet/>
                </>
            ) : (
                <Box display={isNonMobile ? 'flex' : 'block'}
                     justifyContent={'space-between'}
                     width={'100%'}
                     height={'100%'}
                >
                    <Sidebar isNonMobile={isNonMobile}
                             isLowMonitor={isLowMonitor}
                             drawerWidth={'250px'}
                             isOpen={isOpen}
                             setIsOpen={setIsOpen}
                    />

                    <Box display={'flex'}
                         justifyContent={'center'}
                         flexDirection={'column'}
                        // width={`calc(100% - 250px)`}
                         flexGrow={1}
                    >
                        <TopBar isOpen={isOpen}
                                setIsOpen={setIsOpen}/>
                        <Outlet/>
                    </Box>

                </Box>
            )
    )
}

export default Layout;