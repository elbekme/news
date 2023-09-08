import React, { Component } from 'react'
import PostCard from '../components/cards/PostCard';
import Layout from '../components/layout'
import ServerLoading from '../components/loading/ServerLoading';
import request from '../server';
import { toast } from 'react-toastify';

export class PostsPage extends Component {
    state = {
        posts : [],
        loading:false,
      };
    
      
    
      async getPost() {
        this.setState({loading:true})
        try{
          let res = await request("");
          // console.log(res.data.articles);
          this.setState({posts : res.data.articles, loading : false});
          toast.success("Success ✅ !");
        }catch(err){
          toast.error("Not Found 😕 !");
        }finally{
          this.setState({loading : false});
        }
      }
    
      componentDidMount(){
        this.getPost();
      }
    
  render() {
    const {posts, loading} = this.state;
    return (
        <section>
        <div className="posts">
        {loading ? (
            <ServerLoading />
          ) : (
            posts.map((post) => <PostCard {...post} />)
          )}
          </div>
        </section>
    )
  }
}

export default PostsPage