import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { List,Item, Image, Label, Icon, Card, Grid, Button, Comment, Form, Header, Message} from 'semantic-ui-react'
import BlogActions from '../actions/BlogActions'
import moment from 'moment'

export default class CreateBlog extends Component {
  constructor(props){
    super(props)
    this.state = {mssg:false}
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(e, form){
    e.preventDefault()
    let {id} = this.props;
    form.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    BlogActions.editBlog(id,form);
    this.setState({
      mssg:true
    })
  }
  render(){
    let {mssg} = this.state
    let {blogs,id}= this.props
    let blog = blogs.filter( x => x._id.toString() == id)
    let {author,post,title} = blog[0];


    let Mssg = mssg ? (<Message positive floating><Message.Header>Blog Updated!</Message.Header></Message>) : (<Message floating><h3>Update Blog</h3> </Message>);

    return(
      <Comment.Group>
        {Mssg}
        <Form onSubmit={this.handleSubmit} >
          <Form.Input label='Author' name='author' defaultValue={author} />
          <Form.Input label='Title' name='title' defaultValue={title} />
          <Form.TextArea label='New Blog' name='post' defaultValue={post} />
          <Button content='Update Blog' labelPosition='right' icon='edit' primary />
        </Form>
      </Comment.Group>
    )
  }
}
