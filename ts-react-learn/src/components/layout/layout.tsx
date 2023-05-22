import TopBar from "../topBar/topbar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import Sidebar from "../sidebar";
import {FC, useState} from "react";

const Layout: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const isSmallScreen = useMediaQuery('(min-width:1159px)');

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
                             isSmallScreen={isSmallScreen}
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