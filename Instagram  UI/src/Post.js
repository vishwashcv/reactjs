import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

function Post({ username, caption, imageUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
      <Avatar
      className='post__avatar'
      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"

      />
      <h3>{username}</h3>
      </div>

        <img className='post__image' src={imageUrl} />

      <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post;