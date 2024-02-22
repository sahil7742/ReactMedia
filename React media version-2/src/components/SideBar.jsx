import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";


const SideBar = ({ selectedTab, setSelectedTab }) => {

  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  }

  return (

    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark sidebar" style={{ width: "280px" }} >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-white  text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-3">ReactMedia</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto text-white ">
        <li className="nav-item text-white" onClick={() => { handleOnClick("Home") }}>
          <a href="/" className={`nav-link ${selectedTab === 'Home' && 'active'} text-white`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home <MdHomeFilled />
          </a>
          {/* link-body-emphasis */}
        </li>
        <li onClick={() => { handleOnClick("Post") }}>
          <a href="#" className={`nav-link link-body-emphasis ${selectedTab === 'Post' && 'active'} text-white`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Post <MdOutlinePostAdd />
          </a>
        </li>
        <li onClick={() => { handleOnClick("Friends") }}>
          <a href="#" className={`nav-link link-body-emphasis ${selectedTab === 'Friends' && 'active'} text-white`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            Friends <FaUserFriends />
          </a>
        </li>
        <li onClick={() => { handleOnClick("Chats") }}>
          <a href="#" className={`nav-link link-body-emphasis ${selectedTab === 'Chats' && 'active'} text-white`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
            Chats <CiChat1 />
          </a>
        </li>
        <li onClick={() => { handleOnClick("Settings") }}>
          <a href="#" className={`nav-link link-body-emphasis ${selectedTab === 'Settings' && 'active'} text-white`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            Settings <IoSettingsOutline />
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-body-emphasis  text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="public/photo.jpeg" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>SAHIL SHRIVASTAVA</strong>
        </a>
        <ul className="dropdown-menu text-small shadow  text-white " >
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar