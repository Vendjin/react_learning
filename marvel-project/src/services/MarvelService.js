// import {useHttp} from '../components/hooks/http.hooks';

import {useHttp} from "../components/hooks/http.hooks";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=3be00fde4d4063b65c77a6bbcda778de';
    const _baseOffset = 210;

    /*const getResource = async (url) => {
        try{
            let res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            return await res.json();

        } catch (e) {
            throw e;
        }
    }

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }*/

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }

    /*переделал функцию на async/await тк внутри вызываем _getResource, которая так же асинхронная
    и что бы getCharacter не падала, ее так же сделал асинхронной*/
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        // результат запроса превращаем в объект, который попадет в стейт
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : `Описание персонажа ${char.name} не найдено`,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        };
    };


    const getAllComics = async (offset = 0) => {
        const response = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return response.data.results.map(_transformComics)
    };

    const getComics = async (id) => {
        const response = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformCharacter(response.data.results[0])
    };

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || `Не описания комикса ${comics.title}`,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            pageCount: comics.pageCount ? `${comics.pageCount} pages` : "No information about the number of pages",
            prices: comics.prices[0].price ? `${comics.prices[0].price}$` : "No information about prices",
            language: comics.textObjects[0]?.language || "en-us",
        };
    };

    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComics};
};

export default useMarvelService;