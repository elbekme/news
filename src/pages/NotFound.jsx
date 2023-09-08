import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      <div>
        NotFound 😕
        <br />
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default NotFound