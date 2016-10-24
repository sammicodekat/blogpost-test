import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card, Grid, Button, Comment, Form, Header} from 'semantic-ui-react'
import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions'
import moment from 'moment'

export default class Chat extends Component {
  constructor() {
    super();
    this.state={
      blogs: BlogStore.getBlogs()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    BlogStore.startListening(this._onChange);
    BlogActions.getBlogs();
  }

  componentWillUnmount () {
    BlogStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ messages: BlogStore.getBlogs()});
  }


  render(){
    let { blogs} = this.state;
    let Blogs = ''
    if(blogs){
      Blogs = blogs.map( blog => {
        let { author, date, post, title} = blog;
        return(
        <Comment>
          <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>{author}</Comment.Author>
            <Comment.Metadata>
              <div>{date}</div>
            </Comment.Metadata>
            {title}
            <Comment.Text>{post}</Comment.Text>
          </Comment.Content>
        </Comment>
      )
    })
    }
    return(
      <Comment.Group>
        <Header as='h3' dividing>Blogs</Header>
        {Blogs}
      </Comment.Group>
    )
  }
}
