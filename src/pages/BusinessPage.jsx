import React, { Component } from 'react'
import PostCard from '../components/cards/PostCard';
import {Layout} from "../components/layout";
import ServerLoading from '../components/loading/ServerLoading';
import PostsPage from './PostsPage';

export class Business extends Component {
  render() {
    // const {loading, posts,} = this.props;
    return (
      <Layout>
        <section>
          <h2 className=' my-3 '>
          Our Business Posts
          </h2>
          <PostsPage />
          {/* <div className="posts">
            {loading ? <ServerLoading/> : posts.map(post => <PostCard {...post}/> )}
          </div> */}
        </section>
        </Layout>
    )
  }
}

export default Business