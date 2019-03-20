import types from './types';

export function searchForBirds(coordinates){
    return {
      type: types.SEARCH_FOR_BIRDS,
      payload: coordinates
    }
}
