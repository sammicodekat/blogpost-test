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
      console.log(res)
    })
    .catch(console.error)
  },
  deleteBlog(id){
    axios.delete(`/api/blogs/${id}`)
    .then(res => {
    console.log(res)
    })
    .catch(console.error)
  },
  editBlog(id,form){
    put(`/api/blogs/${id}`,form)
    .then(res => {
    console.log(res)
    })
    .catch(console.error)
  }
}

export default API
