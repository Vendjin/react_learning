import {useLocation, Navigate, Outlet} from 'react-router-dom';
import {useAuth} from "../hook/useAuth";

const PrivateAuth = ({children}) => {
    const location = useLocation();
    const auth = useAuth();
    console.log(auth)
    return (
        auth ? <Outlet/> : <Navigate to={'/login'} state={{from: location}}/>
    )
}

export default PrivateAuth;