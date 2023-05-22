import React, {useCallback, useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import useSWR from "swr";

// создаем экшен для загрузки данных о погоде
export const fetcher = (params) => {
    const [url, city] = params;

    return fetch(`${url}&q=${city}`, {
    }).then(res => res.json()).then(data => data)

}

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (city) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=26338807a14a2a4d75feca465fc9038f`);
      return res.json();
    }
);

// export const fetchWeatherData = createAsyncThunk(
//     'weather/fetchWeatherData',
//     async (city) => {
//         const {data, error} = useSWR(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=26338807a14a2a4d75feca465fc9038f`,
//             () => fetcher(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=26338807a14a2a4d75feca465fc9038f`)
//         )
//
//         if (error) throw new Error(error.message)
//         console.log(data)
//         return data
//     }
// )

// создаем slice для хранения состояния погоды
const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: '',
        ci: '',
        data: null,
        loading: false,
        error: null
    },
    reducers: {
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateCi: (state, action) => {
            state.ci = action.payload;
        },

        updateData: (state, action) => {
            console.log(action.payload, 'payload')
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeatherData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(fetchWeatherData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

// создаем компонент для отображения данных о погоде и обработки действий пользователя
const WeatherWidget = () => {
    const dispatch = useDispatch();
    const cityDis = useSelector((state) => state.weather.city);
    const data = useSelector((state) => state.weather.data);
    const loading = useSelector((state) => state.weather.loading);
    const [buttonClick, setButtonClick] = useState(false);

    // useEffect(() => {
    //     // setCity(cityDis)
    //     handleShowWeather()
    // }, [buttonClick])

    // используем useSWR для выполнения HTTP-запросов и кэширования данных о погоде
    // const { data: weatherData } = useSWR(city, (city) => fetchWeatherData(city));
    // const {data: weatherData} = useSWR(`https://api.openweathermap.org/data/2.5/weather/`, (city) => fetchWeatherData(city));
    const url = 'https://api.openweathermap.org/data/2.5/weather?&APPID=26338807a14a2a4d75feca465fc9038f'
    const {data: weatherData} = useSWR(cityDis? [url, cityDis]: null, fetcher)
    // обновляем состояние Redux store при выборе нового города пользователем
    const handleChangeCity = (event) => {
        dispatch(weatherSlice.actions.updateCity(event.target.value));
        // dispatch(weatherSlice.actions.updateCi(event.target.value));
    };

    // обрабатываем нажатие кнопки "Показать"
    // const handleShowWeather = () => {
    //     // dispatch(fetchWeatherData(city));
    //     // if (!weatherData) return null;
    //     dispatch(weatherSlice.actions.updateData(weatherData))
    //
    // };

    const  handleClick = useCallback(() => {
        dispatch(weatherSlice.actions.updateData(weatherData))
    }, [])

    return (
        <div>
            <input type="text" value={cityDis} onChange={handleChangeCity}/>
            <button  onClick={handleClick}>Показать</button>
            {loading && <p>Загрузка данных...</p>}

            {data ? (
                <>
                    <h2>{data?.name }</h2>
                    {/*<p>{weatherData?.current?.temp_c}</p>*/}
                </>
            ) : (
                <p>Введите название города и нажмите "Показать", чтобы увидеть погоду</p>
            )}
        </div>
    );
};

export default WeatherWidget;
export const {actions, reducer} = weatherSlice;