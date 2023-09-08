import React, { Component } from 'react'
import {Layout} from "../components/layout";
import PostsPage from './PostsPage';
export class Health extends Component {
  render() {
    return (
      <Layout>
        <section>
        <h2 className=' my-3 '>
          Our Health Posts
          </h2>
          <PostsPage />
        </section>
        </Layout>
    )
  }
}

export default Health