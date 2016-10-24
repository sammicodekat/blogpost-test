
import { Menu, Segment, Label, Icon } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'


export default class Layout extends Component {
  constructor() {
    super();
  }
  render() {
    let path = this.props.location.pathname
    return (
      <div>
        <Menu color ='blue' className="menu" stackable>
          <Menu.Item>
            <h1>MyBlog</h1>
          </Menu.Item>
          <Menu.Item className={classNames({active: path === '/'})}><Link to="/">Blogs</Link></Menu.Item>
          <Menu.Item className={classNames({active: path === '/write'})}><Link to="/write">Write Blog</Link></Menu.Item>
        </Menu>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
