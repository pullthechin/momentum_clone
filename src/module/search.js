import { createAction, handleActions } from 'redux-actions';

const SET_GOOGLE = 'search/SET_GOOGLE';
const SET_NAVER = 'search/SET_NAVER';
const CHANGE_INPUT = 'search/CHANGE_INPUT';
const TOGGLE = 'search/TOGGLE';

export const setGoogle = createAction(SET_GOOGLE);
export const setNaver = createAction(SET_NAVER);
export const changeInput = createAction(CHANGE_INPUT, input => input);
export const toggle = createAction(TOGGLE);

const initialState = {
    links: {
        url: "http://www.google.co.kr/search",
        name: "q"     
    },
    input: '',
    display: false
};

const search = handleActions(
    {
        [SET_GOOGLE]: state => ({
            ...state,
            links: {
                url: "http://www.google.co.kr/search",
                name: "q"
            }
        }),
        [SET_NAVER]: state => ({
            ...state,
            links: {
                url: "http://search.naver.com/search.naver",
                name: "query"
            }
        }),
        [CHANGE_INPUT]: (state, { payload: input }) => ({
            ...state,
            input
        }),
        [TOGGLE]: state => ({
            ...state,
            display: !state.display
        })
    },
    initialState
);

export default search;