import types from './types';

export function searchForBirds(){
  // fetch(`/api/v1/birds?lat=${this.state.lat}&long=${this.state.long}`)
  //   .then((response) => {return response.json()})
  //   .then((data) => {this.setState({ birds: data.birds }) })
  const request = []
    return {
        type: types.SEARCH_FOR_BIRDS,
        payload: request
    }
}
