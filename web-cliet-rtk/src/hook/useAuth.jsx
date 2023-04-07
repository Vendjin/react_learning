import {useSelector} from "react-redux";

export const useAuth = () => {
    return !!sessionStorage.getItem('token')
    // const {isLogged} = useSelector(state => state.auth);
    // return isLogged
}
