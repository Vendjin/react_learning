import {useNavigate} from "react-router-dom";

const Second = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login', {replace:true});
    };


    return (
        <>
            <div>Second </div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}

export default Second;