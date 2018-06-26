import axios from 'axios';

/////////////INSERT API KEY HERE //////////////////
const API_KEY = '3fa3f989c39659651f5aef4d25b43421';
/////////////INSERT API KEY HERE //////////////////

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('REquest:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
