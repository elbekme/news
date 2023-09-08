import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PostPage from '../../pages/PostPage';

export class PostCard extends Component {
  render() {
    const { author, content, title } = this.props;
    return (
        <div className="alert alert-primary">
            <h3 className='post-author'>{author}</h3>
            <h6 className='mt-3'>{title}</h6>
            <p className=' mt-3'>{content}</p>
            <Link to={`/posts/${author}`}>About More...</Link>
        </div>
    )
  }
}

export default PostCard