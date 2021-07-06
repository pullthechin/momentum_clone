import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

const GET_PHOTO = 'photo/GET_PHOTO';

export const getPhoto = () => async dispatch => {
    try {
        const response = await api.getPhoto();
        dispatch({
            type: GET_PHOTO,
            payload: response.data
        });
    } catch (e) {
        console.log(e);
    }
};


const initialState = {
    data: null
};

const photo = handleActions(
    {   
        [GET_PHOTO]: (state, { payload: data }) => ({
            ...state,
            data
        })
    },
    initialState
);

export default photo;