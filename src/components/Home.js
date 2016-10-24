import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
const { Column, Row } = Grid
import Blog from './Blog'



export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Grid centered  textAlign='center' padded>
        <Row colum ={2}>
          <Column textAlign='center'></Column>
          <Column textAlign='center'><Chat/></Column>
        </Row>
      </Grid>
    )
  }
}
