import { get, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getBlogs(){
    get('/api/blogs/')
    .then(res => {
      ServerActions.gotBlogs(res.data);
    })
    .catch(console.error)
  },
  addBlog(form){
    put('/api/blogs/',form)
    .then(res => {
      ServerActions.gotBlogs(res.data);
    })
    .catch(console.error)

  }
}

export default API
