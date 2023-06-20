import TopBar from "../topBar/topbar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import {FC, useEffect, useState} from "react";
import {useAppDispatch} from "../../utils/hook";
import {getPublicUser} from "../../store/thunks/auth/authThunk";

const Layout: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:760px)');
    const isSmallScreen = useMediaQuery('(min-width:1159px)');
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = sessionStorage.getItem('id')
        dispatch(getPublicUser(id))
    }, [dispatch])

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
                             drawerWidth={'280px'}
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
                                setIsOpen={setIsOpen}
                                isNonMobile={isNonMobile}
                        />
                        <Outlet/>
                    </Box>

                </Box>
            )
    )
}

export default Layout;