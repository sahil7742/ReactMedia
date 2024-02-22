import { useReducer } from "react";
import { createContext } from "react";

export const postLists = createContext({
   PostList: [],
   addPost: () => { },
   addInitialPost:() =>{},
   deletePost: () => { }
   // api desining
});
const postListReducer = (currPostList, action) => {
   let newPostList = currPostList;
   if (action.type === 'DELETE_POST') {
      newPostList = currPostList.filter(post => post.id !== action.payload.postId);
   }
   else if (action.type === 'ADD_IINITIAL_POST') {
     newPostList = action.payload.posts;
   }
   else if (action.type === 'ADD_POST') {
      newPostList = [action.payload, ...currPostList]
   }

   return newPostList;
}

const PostListProvider = ({ children }) => {
   const [PostList, dispatchPostList] = useReducer(postListReducer, []);

   const addPost = (userId, title, body, tags, reactions, image) => {
      dispatchPostList({
         type: 'ADD_POST',
         payload: {
            id: Date.now(),
            title: title,
            body: body,
            reactions: reactions,
            userId: userId,
            tags: [tags],
            image: image
         }
      })
   }
   const addInitialPost = (posts) => {
      dispatchPostList({
         type: 'ADD_IINITIAL_POST',
         payload:
         {
            posts
         }
      })
   }
   const deletePost = (postId) => {
      dispatchPostList({
         type: 'DELETE_POST',
         payload: {
            postId
         }
      })

   }

   return (<postLists.Provider value={{ PostList, addPost,addInitialPost, deletePost }}>
      {children}
   </postLists.Provider>
   )
};


const DEFAULT_POST_LIST = [];


export default PostListProvider;