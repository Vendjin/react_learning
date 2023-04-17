import useSWR from 'swr';
import {fetcherV2} from "../libs/fetcher";

const CurrentUserUrl = 'http://127.0.0.1:80/api/v0/users/current/';

const token = sessionStorage.getItem('token')

export default function useUser() {
    const {data, mutate, error} = useSWR(
    [CurrentUserUrl, token], fetcherV2);

    const loading = !data && !error;
    const loggedOut = error && error.status === 403;
    const incorrectCredentials = error && error.status === 401;


    return {
        loading,
        loggedOut,
        incorrectCredentials,
        mutate,
        user: data
    };
}
