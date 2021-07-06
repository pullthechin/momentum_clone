import axios from 'axios';

// 예비키: gfKShtptTlpUbkreb-qsubESK-Wf7JBnafRtB4Zl2W0

const PHOTO_KEY = 'nXPcrzI4eHrKOeLEa6D_V4qz7A9JvpSMfE0TnwulsEY';
const WEATHER_KEY = 'a4a937f3e55096004173a86b0a34a7e3';

export const getPhoto = () => {
    const response = axios.get('https://api.unsplash.com/photos/random', {
        params: {
            client_id: PHOTO_KEY,
            orientation: "landscape"
        }
    });
    return response;
};

export const getWeather = (lat, lon) => {
    const response = axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
            lat,
            lon,
            appid: WEATHER_KEY,
            units: "metric"
        }
    });
    return response;
};