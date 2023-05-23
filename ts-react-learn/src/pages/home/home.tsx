import {useEffect} from "react";
import {useAppDispatch} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";

const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFavoriteAssets('bitcoin, ethereum'))
    }, [])

    return (
        <>
            <h2>Home page</h2>
        </>
    )
}

export default Home;