import types from '../actions/types'

const initialState = {
  showLoadingModal: false
}

export default function(state = initialState, action){
    switch(action.type){
      case 'PAYMENT_PENDING':
        console.log(action, state)
        return {...state, showLoadingModal: true}
      case 'PAYMENT_COMPLETE':
        console.log(action, state)
        return {...state, showLoadingModal: false}
      default:
          return state;
    }
}
