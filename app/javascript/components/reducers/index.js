import {combineReducers} from 'redux';
import searchReducer from './search_reducer.js';


export default combineReducers({
    search: searchReducer,
})
