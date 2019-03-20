import types from '../actions/types';
// import { loop, Cmd } from 'redux-loop';


const DEFAULT_STATE = {
    all: [],
    single: {}
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        default: 
            return state; 
    }
}
