import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (<div className="sidebarChat">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png" />
    <div className="sidebarChat__info">
      <h2>Room</h2>
      <p>This is the last message</p>
    </div>
  </div>);
}

export default SidebarChat;