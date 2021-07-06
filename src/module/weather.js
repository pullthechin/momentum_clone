import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

const GET_WEATHER = 'weather/GET_WEATHER';

export const getWeather = (lat, lon) => async dispatch => {
    try {
        const response = await api.getWeather(lat, lon);
        dispatch({
            type: GET_WEATHER,
            payload: response.data
        });
    } catch (e) {
        console.log(e);
    }
};

const initialState = {
    data: null
}

const weather = handleActions(
    {
        [GET_WEATHER]: (state, { payload: data }) => ({
            ...state,
            data
        })
    },
    initialState
);

export default weather;