import {Navigate, Outlet, useLocation} from 'react-router-dom';

const PrivateAuth = () => {
    const location = useLocation();
    // useEffect(() => {
    //     if (!user && loggedOut) {
    //
    //     }
    // })
    return (
        Boolean(sessionStorage.getItem('token')) ? <Outlet/> : <Navigate to={'/login'} state={{from: location}}/>
    )
}

export default PrivateAuth;