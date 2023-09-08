import React, { Component } from 'react'
import Layout from '../components/layout'
import request from '../server';
import { toast } from 'react-toastify';

export class PostPage extends Component {
  state = {
    post: {},
  }
  
  async getPost(){
    try{
      let postAuthor = window.location.pathname.split("/").at(-1);
      let res = await request(`posts/${postAuthor}`);
      this.setState({post:res.data.articles});
      console.log(res); 
      console.log(postAuthor);
    }catch(err){
      toast.error("Not Found 😕 !");
    }
  }
  componentDidMount(){
    this.getPost();
  }

  render() {
    const { post } = this.state;
      return (
        <Layout>
            <section>
              <h1>PostPage...</h1>
              <h1>{post.author}</h1>
              </section>
        </Layout>
    )
  }
}

export default PostPage