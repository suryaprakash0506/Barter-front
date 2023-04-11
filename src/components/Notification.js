import "../css/Notification.css"
import React from 'react'
import { Avatar} from '@mui/material';
const Notification = () => {
  return (
    <div className="notify__main">
      <div className="notify_item">
        <Avatar/>
        <p>You might follow daman</p>
      </div>
      <div className="notify_item">
        <Avatar/>
        <p>You might follow daman</p>
      </div>
    </div>
  )
}

export default Notification
