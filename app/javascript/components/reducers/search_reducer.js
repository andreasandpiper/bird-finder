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

function fetchBirds(lat, long) {
 return fetch(`/api/v1/birds?lat=${lat}&long=${long}`).then(resp => resp.json())
}

function fetchBirdSuccessfulAction(birds) {
  return {
    type: 'FETCH_BIRDS_SUCCESSFUL',
    birds
  }
}

function fetchBirdFailedAction(err) {
  return {
    type: 'FETCH_BIRDS_ERROR',
    err
  }
}

const initialState = {
	initStarted: false,
	birds: [],
	error: null
}

export default function(state = initialState, action){
    switch(action.type){
      case types.SEARCH_FOR_BIRDS:
        return loop(
          {...state, initStarted:true},
          Cmd.run(fetchBirds, {
            successActionCreator: fetchBirdSuccessfulAction,
            failActionCreator: fetchBirdFailedAction,
            args: [action.payload.coordinates.lat, action.payload.coordinates.long]
          })
        )
      case 'FETCH_BIRDS_SUCCESSFUL':
        console.log(action, state)
        return {...state, birds: action.birds.birds}
      case 'FETCH_BIRDS_ERROR':
        console.log(action, state)
        return {...state}
      default:
          return state;
    }
}
