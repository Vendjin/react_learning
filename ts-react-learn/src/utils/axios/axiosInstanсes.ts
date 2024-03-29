import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const watchListApi = axios.create({
    baseURL: 'http://localhost:3002',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export const cryptoCompare = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/v2/',
    timeout: 1000,
})

export default instance;