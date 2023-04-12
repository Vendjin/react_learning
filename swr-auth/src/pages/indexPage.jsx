import React from "react";
import {logOut} from "../libs/auth";
import {useNavigate} from "react-router-dom";
import useUser from "../data/useUser";
import Spinner from "../components/spinner";

const IndexPage = () => {
    const navigate = useNavigate()
    const {user, loading} = useUser();
    console.log(user)

    const handleLogOut = () => {
        logOut();
        navigate('login', {replace: true});
    }

    if (loading) return <Spinner/>
    return (
        <>
            <h1>Index Page {user.name}</h1>
            <button onClick={handleLogOut}>Log out</button>
        </>
    )
}


export default IndexPage;