import axios,{ get,post,put } from 'axios'
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
    post('/api/blogs/',form)
    .then(res => {
      ServerActions.gotBlogs(res.data);
    })
    .catch(console.error)
  },
  deleteBlog(id){
    axios.delete(`/api/blogs/${id}`)
    .then(res => {
      ServerActions.gotBlogs(res.data);
    })
    .catch(console.error)
  },
  editBlog(id){
    put(`/api/blogs/${id}`)
    .then(res => {
      ServerActions.gotBlogs(res.data);
    })
    .catch(console.error)
  }
}

export default API
