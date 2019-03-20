import types from '../actions/types';
import { loop, Cmd } from 'redux-loop';


const DEFAULT_STATE = {
    all: [],
    single: {}
}

const example_data = [
  {
    'comName': 'test bird',
    'sciName': 'birdeuas maximus',
    'locName': 'Goleta',
    'howMany': '5'
  }
]

function fetchBirds(coordinates) {
 return fetch(`/api/v1/birds?lat=${this.state.lat}&long=${this.state.long}`)
}

const initialState = {
	initStarted: false,
	birds: [],
	error: null
}

export default function(state = initialState, action){
    switch(action.type){
      case types.SEARCH_FOR_BIRDS:
				return { ...state, birds: example_data }
      default:
          return state;
    }
}
