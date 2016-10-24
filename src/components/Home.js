import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
const { Column, Row } = Grid
import Blog from './Blog'



export default class Home extends Component {
  render() {
    return (
      <Grid centered  textAlign='center' padded>
        <Row>
          <Column textAlign='center'><Blog/></Column>
        </Row>
      </Grid>
    )
  }
}
