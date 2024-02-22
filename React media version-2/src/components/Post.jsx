import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { useContext } from 'react';
import { postLists } from '../store/post-list-store';

const Post = ({ post }) => {
  const { deletePost } = useContext(postLists);
  return (
    <div className="card postCard" style={{ width: "18rem" }}>
      {/* <img src={post.image} className="card-img-top" style={{ width: "16rem" }} alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{post.id} - {post.title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => { deletePost(post.id) }}>
          <MdDeleteOutline />
        </span></h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => <span key={tag}
        className="badge text-bg-light">{tag}</span>)}
      </div>
      <button type="button" className="btn btn-primary">{post.reactions}<AiFillLike /> </button>
    </div>
  )
}

export default Post