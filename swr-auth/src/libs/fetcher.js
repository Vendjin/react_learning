import axios from "axios";

export const fetcher = (url, init) => fetch(url, init).then(res => res.json()).then(data=>data);


export const fetcherV2 = (params) => {
    const [url, token] = params;
    return fetch(url, {
        headers: {Authorization: `Token ${token}`}
    }).then(res => res.json()).then(data => data)

}
export const userFetcher = async (url)=> {
    const token = sessionStorage.getItem('token');
    const res = await axios
    .get(url, {headers: {Authorization: `Token ${token}`}})

    return res.data
}

