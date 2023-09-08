import React, { Component } from 'react'
import {Layout} from "../components/layout";
import PostsPage from './PostsPage';

export class General extends Component {
  render() {
    return (
      <Layout>
        <section>
        <h2 className=' my-3 '>
          Our General Posts
          </h2>
        <PostsPage />
        </section>
      </Layout>
    )
  }
}

export default General