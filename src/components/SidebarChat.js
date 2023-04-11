import React from 'react'
import "../css/SidebarChat.css"
import { Avatar } from '@mui/material';

const SidebarChat = (props) => {
  const {personName, lastMessage} = props;
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>{props.personName}</h2>
            <p>{props.lastMessage}</p>
        </div>
    </div>
  )
}

export default SidebarChat
