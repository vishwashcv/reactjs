import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__headerRight'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'/>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new Chat' type="text" /> 
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat /> 
        <SidebarChat />
        <SidebarChat /> 
      </div>
    </div>
  )
}

export default Sidebar