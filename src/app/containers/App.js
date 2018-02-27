import React, { Component } from 'react'
import { connect } from "react-redux"
import Navbar from '../components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
}

const mapStoreToProps = store => (
  {}
)

export default connect(mapStoreToProps)(App);
