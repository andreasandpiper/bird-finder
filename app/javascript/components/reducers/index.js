import { combineReducers } from 'redux-loop';
import searchReducer from './search_reducer.js';
import uiReducer from './ui_reducer.js'

export default combineReducers({
    search: searchReducer,
    ui: uiReducer
})
