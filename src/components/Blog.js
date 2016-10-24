import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card, Grid, Button, Comment, Form, Header, Modal} from 'semantic-ui-react'
import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions'
import marked from 'marked'
import EditBlog from './EditBlog'

export default class Blog extends Component {
  constructor() {
    super();
    this.state={
      blogs: BlogStore.getBlogs(),
      open:false,
      idx:1
    }
    this._onChange = this._onChange.bind(this);
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
    this.markUp = this.markUp.bind(this);
  }

  componentWillMount () {
    BlogStore.startListening(this._onChange);
    BlogActions.getBlogs();
  }

  componentWillUnmount () {
    BlogStore.stopListening(this._onChange);
  }

  show(id){
    this.setState({ open: true,idx:id});
  }

  close(){
    this.setState({ open: false });
  }

  _onChange() {
    this.setState({ blogs: BlogStore.getBlogs()});
  }
  deleteBlog(id){
    BlogActions.deleteBlog(id)
  }
  markUp(post){
    return {'__html': post};
  }

  render(){
    let {blogs,idx,open} = this.state;
    let Blogs = ''
    if(blogs){
      Blogs = blogs.map( blog => {
        let { author, date, post, title} = blog;
        let id =blog._id.toString()
        return(
          <div key={id}>
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={this.markUp(post)} />
            <p><strong>{author}</strong>{date}</p>
            <Button.Group>
              <Button onClick={() => this.show(id)} positive icon='edit'></Button>
              <Button.Or />
              <Button onClick={() => this.deleteBlog(id)} icon='trash' negative></Button>
            </Button.Group>
          </div>
        )
      })
    }
    return(
      <div>
        <h3>Blogs</h3>
        {Blogs}
        <Modal dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header>Edit</Modal.Header>
          <Modal.Content>
            <EditBlog blogs ={blogs} id={idx}/>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.close}>
              Go Back
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
