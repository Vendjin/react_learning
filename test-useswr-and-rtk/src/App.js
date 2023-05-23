import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setData, setCity} from './slice';
import useSWR from "swr";

export const fetcher = (params) => {
    const [url, city] = params;
    return fetch(`${url}&q=${city}`, {}).then(res => res.json()).then(data => data)
}

export const Weather = () => {
        const dispatch = useDispatch();
        const [cityInput, setCityInput] = useState('');
        const [formSubmitted, setFormSubmitted] = useState(false)

        const url = 'https://api.openweathermap.org/data/2.5/weather?&APPID=26338807a14a2a4d75feca465fc9038f'
        const {data: weatherData} = useSWR(formSubmitted ? [url, cityInput] : null, fetcher)
        weatherData && dispatch(setData(weatherData))

        const handleInputChange = (event) => {
            setCityInput(event.target.value);
        };

        async function handleFormSubmit(event) {
            event.preventDefault();
            await setFormSubmitted(true);
            await dispatch(setCity(cityInput));
        }

        return (
            <>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" value={cityInput} onChange={handleInputChange}/>
                    <button type="submit">Get Weather</button>
                </form>
                {weatherData ? (
                    <>
                        <h2>{weatherData?.name}</h2>
                    </>
                ) : (
                    <p>Введите название города и нажмите "Get Weather", чтобы увидеть погоду</p>
                )
                }
            </>
        )
    }
;