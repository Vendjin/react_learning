import {AppDispatch, RootState} from "../../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
// типизация диспатча и селектора
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    const {isLogged} = useAppSelector(state => state.auth)
    console.log(useAppSelector(state => state.auth))
    return isLogged;
}