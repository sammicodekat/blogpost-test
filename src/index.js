
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import CreateBlog from './components/CreateBlog'

render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>
      <IndexRoute component ={Home}/>
      <Route path ='/write' component = {CreateBlog} />
    </Route>
  </Router>,
  document.getElementById('root')
);
