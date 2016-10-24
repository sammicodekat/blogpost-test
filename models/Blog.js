const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: { type: String},
  title: { type: String},
  date: { type: String},
  post: {type: String}
})
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
