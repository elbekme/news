import React, { Component } from 'react'
import { toast } from 'react-toastify';
import PostCard from '../components/cards/PostCard';
import {Layout} from "../components/layout";
import ServerLoading from '../components/loading/ServerLoading';
import request from '../server';
import PostsPage from './PostsPage';

export class Home extends Component {
  // state = {
  //   posts : [],
  //   loading:false,
  // };

  

  // async getPost() {
  //   this.setState({loading:true})
  //   try{
  //     let res = await request("");
  //     // console.log(res.data.articles);
  //     this.setState({posts : res.data.articles, loading : false});
  //     toast.success("Success ✅ !");
  //   }catch(err){
  //     toast.error("Not Found 😕 !");
  //   }finally{
  //     this.setState({loading : false});
  //   }
  // }

  // componentDidMount(){
  //   this.getPost();
  // }

  render() {
    // const { posts, loading } = this.props;
    // console.log(posts);
    return (
      <Layout>
        <section>
          <h2 className=' my-3 '>
          Our Lates Posts
          </h2>
          <PostsPage />
        </section>
      </Layout> 
    )
  }
}

export default Home