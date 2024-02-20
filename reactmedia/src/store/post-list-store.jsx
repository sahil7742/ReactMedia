import { useReducer } from "react";
import { createContext } from "react";

export const postLists = createContext({
   PostList: [],
   addPost: () => { },
   deletePost: () => { }
   // api desining
});
const postListReducer = (currPostList, action) => {
   let newPostList = currPostList;
   if (action.type === 'DELETE_POST') {
      newPostList = currPostList.filter(post => post.id !== action.payload.postId);
   }
   else if (action.type === 'ADD_POST') {
      newPostList = [action.payload, ...currPostList]
   }

   return newPostList;
}

const PostListProvider = ({ children }) => {
   const [PostList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

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
   const deletePost = (postId) => {
      dispatchPostList({
         type: 'DELETE_POST',
         payload: {
            postId
         }
      })

   }

   return (<postLists.Provider value={{ PostList, addPost, deletePost }}>
      {children}
   </postLists.Provider>
   )
};


const DEFAULT_POST_LIST = [{
   id: '1',
   title: 'Going to Kolkata',
   body: 'Hello Everyone , today i am joining my first job of Frontend developer..',
   reactions: 2,
   userId: 'user-9',
   tags: ['first job', 'learning'],
   image: "public/photo.jpeg"
},
{
   id: '2',
   title: 'Graduated!!!!!',
   body: 'Hello Everyone , today i am graduated from techno main saltLake',
   reactions: 15,
   userId: 'user-12',
   tags: ['Graduation', 'learning'],
   image: "public/sahil.jpeg"
},
{
   id: '2',
   title: 'Graduated!!!!!',
   body: 'Hello Everyone , today i am graduated from techno main saltLake',
   reactions: 15,
   userId: 'user-12',
   tags: ['Graduation', 'learning'],
   image: "public/sahil.jpeg"
}
];


export default PostListProvider;