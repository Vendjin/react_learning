import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../pages/auth/authSlice";

const Index = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOutUser());
        navigate('/login', {replace:true});
    };


    return (
        <>
            <div>Index  {sessionStorage.getItem('userName')}</div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}

export default Index;