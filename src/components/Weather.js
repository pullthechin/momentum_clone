import React from 'react';
import styled from 'styled-components';
import { MdUpdate } from 'react-icons/md';

const IconStyle = {
    fontSize: "30px",
    cursor: "pointer"
}

const WeatherWrap = styled.div`
    position: fixed;
    top: 25px;
    right: 25px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;

const IconWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
`;

const Icon = styled.img`
    margin-right: 2px;
`;

const Weather = ({ data, getWeather }) => {
    return (
        <WeatherWrap>
            <IconWrap>
                {data && <Icon src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather-icon" />}
                {data && <span>{Math.floor(data.main.temp)}°</span>}
            </IconWrap>
            {data && <MdUpdate style={IconStyle} onClick={() => getWeather(data.coord.lat, data.coord.lon)} />}
        </WeatherWrap>
    );
};

export default Weather;