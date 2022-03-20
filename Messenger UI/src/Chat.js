import React from 'react';
import "./Chat.css";
function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'/>
        <div className='chat__headerInfo'>
          <h3>Room</h3>
          <p>last seen at...</p>
        </div>
        
      </div>
      <div className='chat__body'>
        <p className='chat__message'><span className='chat__name'>Sonny</span>
        This is a message

        <span className='chat__timestamp'>
          {new Date().toUTCString()}  
        </span>
    
        </p>

        <p className='chat__message chat__receiver'><span className='chat__name'>Sonny</span>
        This is a message

        <span className='chat__timestamp'>
          {new Date().toUTCString()}  
        </span>
    
        </p>

        <p className='chat__message'><span className='chat__name'>Sonny</span>
        This is a message

        <span className='chat__timestamp'>
          {new Date().toUTCString()}  
        </span>
    
        </p>

        </div>

      <div className='chat__footer'>
        <form>
          <input
          placeholder="Type a message"
          type="text"
          />
          <button
          type="submit">
            Send a message
          </button>
        </form>
      </div>

    </div>
  )
}

export default Chat;