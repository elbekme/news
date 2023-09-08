import React, { Component, Fragment } from 'react'
import Header from '../header'

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className='container'>
        {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout