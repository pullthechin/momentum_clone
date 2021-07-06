import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const TOGGLE = 'todos/TOGGLE';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';


let id = 3;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const toggle = createAction(TOGGLE, id => id);
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}));
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'test1',
            done: true
        },
        {
            id: 2,
            text: 'test2',
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({
            ...state,
            input
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
        }),
        [INSERT]: (state, { payload: todo }) => ({
            ...state,
            todos: state.todos.concat(todo)
        }), 
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id)
        })
    },
    initialState
);

export default todos;

