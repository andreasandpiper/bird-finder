import types from '../actions/types';
import { loop, Cmd } from 'redux-loop';
import { fetchBirdFailedAction, fetchBirdSuccessfulAction } from './search_reducer_actions'

function fetchBirds(lat, long) {
 return fetch(`/api/v1/birds?lat=${lat}&long=${long}`).then(resp => resp.json())
}

const initialState = {
	birds: [],
  isFetchingBirds: false
}

export default function(state = initialState, action){
    switch(action.type){
      case types.SEARCH_FOR_BIRDS:
        return loop(
          {...state, isFetchingBirds: true },
          Cmd.run(fetchBirds, {
            successActionCreator: fetchBirdSuccessfulAction,
            failActionCreator: fetchBirdFailedAction,
            args: [action.payload.coordinates.lat, action.payload.coordinates.long]
          })
        )
      case 'FETCH_BIRDS_SUCCESSFUL':
        console.log(action, state)
        return {...state, birds: action.birds.birds, isFetchingBirds: false}
      case 'FETCH_BIRDS_ERROR':
        console.log(action, state)
        return {...state, isFetchingBirds: false}
      default:
          return state;
    }
}
