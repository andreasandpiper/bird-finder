export {
  fetchBirdFailedAction,
  fetchBirdSuccessfulAction
}

const fetchBirdSuccessfulAction = (birds) => {
  return {
    type: 'FETCH_BIRDS_SUCCESSFUL',
    birds
  }
}

const fetchBirdFailedAction = (err) => {
  return {
    type: 'FETCH_BIRDS_ERROR',
    err
  }
}
