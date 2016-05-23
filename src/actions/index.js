import axios from 'axios';

const API_KEY = "19066c9219d5f45440e07a1661b3890d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeatherData(cityName) {
    const url = `${ROOT_URL}$q?${cityName},est`
    const request = axios.get(url);

    //Use library called Axios to make query requests, instead of using jQuery.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}