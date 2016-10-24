import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotBlogs(blogs) {
    AppDispatcher.dispatch({
      type: 'GOT_BLOGS',
      payload: blogs
    })
  }
}

export default ServerActions
