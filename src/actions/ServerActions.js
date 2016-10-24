import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotMssg(mssg) {
    AppDispatcher.dispatch({
      type: 'GOT_MSSG',
      payload: mssg
    })
  }
}

export default ServerActions
