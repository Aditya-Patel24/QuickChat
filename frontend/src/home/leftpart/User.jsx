import React from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

const User = ({user}) => {
  const {selectedConversation, setSelectedConversation}= useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket, onlineUsers}  = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  console.log("Checking user:", user._id, "Online users:", onlineUsers);

  return (
    <div className={` ${isSelected ? "bg-slate-700" : "hover:bg-slate-800"}`} onClick={() => setSelectedConversation(user)}>
       <div className={`flex space-x-4 px-8 py-3 cursor-pointer`}>
        <div className={`avatar ${isOnline ? "online" : ""} flex items-center justify-center`  }>
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={`${user.fullname}'s avatar`} />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default User;