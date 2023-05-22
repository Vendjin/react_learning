/*
import {ILayout} from "../../common/types/layout";
import TopBar from "../topBar";
import {useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import Sidebar from "../sidebar";
import {useState} from "react";

const Layout = ({children}: ILayout) => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:600px)');

    return (
        location.pathname === '/login' || location.pathname === '/register'
            ? (
                <>
                    {children}
                </>
            ) : (
                <Box display={isNonMobile ? 'flex' : 'block'}
                     justifyContent={'space-between'}
                     width={'100%'}
                     height={'100%'}
                >
                    <Sidebar isNonMobile={isNonMobile}
                             drawerWidth={'250px'}
                             isOpen={isOpen}
                             setIsOpen={setIsOpen}
                    />

                    <Box display={'flex'}
                         justifyContent={'space-between'}
                         flexDirection={'column'}
                         width={`calc(100% - 250px)`}
                    >
                        <TopBar/>
                        {children}
                    </Box>

                </Box>
            )
    )
}

export default Layout;*/
