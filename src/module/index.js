import todos from './todos';
import name from './name';
import photo from './photo';
import weather from './weather';
import search from './search';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos,
    name,
    photo,
    weather,
    search
});

export default rootReducer;