import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import { postLists } from '../store/post-list-store';


const PostList = () => {
 const {PostList} = useContext(postLists);
  return (
    <div className='lists'>
      {
        PostList.map((post)=> (<Post key={post.id} post={post}/>))
      }
    </div>
  )
}

export default PostList