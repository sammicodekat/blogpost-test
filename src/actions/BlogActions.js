import AppDispatcher from '../AppDispatcher'
import API from '../API'

const BlogActions = {
  getBlogs(){
    API.getBlogs();
  },
  addBlog(form){
    API.addBlog(form);
  },
  deleteBlog(id) {
    API.deleteBlog(id);
  },
  editBlog(id){
    API.editBlog(id);
  }
}

export default BlogActions;
