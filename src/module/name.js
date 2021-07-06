import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'name/CHANGE_INPUT';
const INSERT = 'name/INSERT';

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, name => name);

const initialState = {
    input: '',
    name: null
};

const name = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({
            ...state,
            input
        }),
        [INSERT]: (state, { payload: name }) => ({
            ...state,
            name
        }),
    },
    initialState
);

export default name;