import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { getWeather } from '../module/weather';

const { useEffect } = React;
const WeatherContainer = ({ data, getWeather }) => {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const lat = Math.floor(position.coords.latitude);
                    const lon = Math.floor(position.coords.longitude);
                    getWeather(lat, lon);
                },
                function(error) {
                    console.log(error);
                }
            );
        }
    }, [getWeather]);

    return <Weather data={data} getWeather={getWeather} />;
};

const mapStateToProps = ({ weather }) => ({
    data: weather.data
});

const mapDispatchToProps = dispatch => ({
    getWeather: (lat, lon) => {
        dispatch(getWeather(lat, lon));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);