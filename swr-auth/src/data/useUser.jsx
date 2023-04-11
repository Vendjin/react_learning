import useSWR from 'swr';
import {fetcher} from "../libs/fetcher";
const ROOT_URL = 'http://127.0.0.1:80/api/v0/auth/login/';

export default function useUser(redmine_login, redmine_token) {
    const {data, mutate, error} = useSWR(ROOT_URL, fetcher(ROOT_URL,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({redmine_login, redmine_token}),
    }));

    const loading = !data && !error;
    const loggedOut = error && error.status === 403;
    const incorrectCredentials = error && error.status === 401;

    console.log('SWR data', data);
    console.log('SWR data', mutate);
    console.log('SWR error', error);
    return {
        redmine_login,
        data,
        loading,
        loggedOut,
        user: data,
        incorrectCredentials,
        mutate
    };
}


/*
export default function useUser(redmine_login, redmine_token) {
    const {data, mutate, error} = useSWR(
        [ROOT_URL, redmine_login, redmine_token], fetcher);

    const loading = !data && !error;
    const loggedOut = error && error.status === 403;
    const incorrectCredentials = error && error.status === 401;

    console.log('SWR data', data);
    console.log('SWR error', error);

    return {
        redmine_login,
        data,
        loading,
        loggedOut,
        user: data,
        incorrectCredentials,
        mutate
    };
}*/
