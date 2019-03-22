import types from './types';

export function searchForBirds(coordinates){
    return {
      type: types.SEARCH_FOR_BIRDS,
      payload: coordinates
    }
}

export function initialPaymentProcess(){
    return {
      type: types.PAYMENT_PENDING
    }
}

export function completeProcess(){
    return {
      type: types.PAYMENT_COMPLETE
    }
}
