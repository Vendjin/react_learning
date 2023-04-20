import {ILayout} from "../../common/types/layout";
import TopBar from "../top-bar";

const Layout = ({children}: ILayout) => {
    return (
        <>
            <TopBar/>
            {children}
        </>
    )
}

export default Layout;