import {ILayout} from "../../common/types/layout";
import TopBar from "../top-bar";
import {useLocation} from "react-router-dom";

const Layout = ({children}: ILayout) => {
    const location = useLocation();

    return (
        location.pathname === '/login' || location.pathname === '/register'
            ? (
                <>
                    {children}
                </>
            ) : (
                <>
                    <TopBar/>
                    {children}
                </>
            )
    )
}

export default Layout;