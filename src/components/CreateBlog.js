import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card, Grid, Button, Comment, Form, Header} from 'semantic-ui-react'
import BlogActions from '../actions/BlogActions'

export default class CreateBlog extends Component {

  handleSubmit(e, form){
    e.preventDefault()
    BlogActions.editBlog(form);
  }
  render(){
    
    return(
      <Comment.Group>
        <Header as='h3' dividing>Blog Name</Header>
        <Form onSubmit={this.handleSubmit} >
          <Form.Input label='Author' name='author' placeholder='Name' />
          <Form.Input label='Title' name='title' placeholder='Title' />
          <Form.TextArea label='New Blog' name='post' />
          <Button content='Add Blog' labelPosition='right' icon='edit' primary />
        </Form>
      </Comment.Group>
    )
  }
}
