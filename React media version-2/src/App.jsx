import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';


const App = () => {

   const [selectedTab , setSelectedTab] = useState("Home");



  return (
  <PostListProvider>
      <div className='appContainer'>
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      </SideBar>
      <div className='content'>
      <Header/>
      {selectedTab === "Home" ?<PostList/>:<CreatePost/>}
      </div>
    </div>
  </PostListProvider>
  )
}

export default App