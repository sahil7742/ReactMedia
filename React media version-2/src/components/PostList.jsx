import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import { postLists } from '../store/post-list-store';
import Wellcome from './Wellcome';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpin from './LoadingSpin';



const PostList = () => {
  const { PostList, addInitialPost } = useContext(postLists);

  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        addInitialPost(data.posts)
        setfetching(false);
      });
    return () => {
      controller.abort();
    }

  }, [])




  return (

    <>
      {fetching && <LoadingSpin />}
      {!fetching && PostList.length === 0 && <Wellcome />}
      <div className='lists'>
        {
          !fetching && PostList.map((post) => (<Post key={post.id} post={post} />))
        }
      </div>
    </>
  )
}

export default PostList