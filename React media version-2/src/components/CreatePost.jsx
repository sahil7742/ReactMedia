import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { postLists } from '../store/post-list-store';

const CreatePost = () => {

  const { addPost } = useContext(postLists);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();
  const imageElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ",);
    const reactions = reactionsElement.current.value;
    const image = imageElement.current.value;
     
    addPost(userId,title,body,tags,reactions,image);
  }


  return (
    <div className='createPost'><form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">Profile</label>
        <input type="text" ref={userIdElement} placeholder='User Name' className="form-control" id="userIdElement" />
      </div>
      <div className="mb-3">
        <label htmlFor="titleElement" className="form-label">title</label>
        <input type="text" ref={titleElement} placeholder='!!!How are you feeling today...' className="form-control" id="titleElement" />
      </div>
      <div className="mb-3">
        <label htmlFor="bodyElement" className="form-label">Description</label>
        <textarea rows={4} type="text" ref={bodyElement} placeholder='Describe your feelings...' className="form-control" id="bodyElement" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactionsElement" className="form-label">reactions</label>
        <input type="text" ref={reactionsElement} placeholder='reactionsElement' className="form-control" id="reactionsElement" />
      </div>

      <div className="mb-3">
        <label htmlFor="tagsElement" className="form-label">tags</label>
        <input type="text" ref={tagsElement} className="form-control" id="tagsElement" placeholder=' #tagsElement' />
      </div>
      <div className="mb-3">
        <label htmlFor="imageElement" className="form-label">Photo/Album</label>
        <input type="file" ref={imageElement} className="form-control" id="imageElement" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form></div>
  )
}

export default CreatePost