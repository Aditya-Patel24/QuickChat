import React from 'react'
import useConversation from '../../zustand/useConversation.js'

const User = ({user}) => {
  const {selectedConversation, setSelectedConversation}= useConversation();
  const isSelected = selectedConversation?._id === user._id;
  return (
    <div className={` ${isSelected ? "bg-slate-700":" "}`} onClick={() => setSelectedConversation(user)}>
       <div className={`flex space-x-4 px-8 py-3 ${!isSelected ? "hover:bg-slate-800" : ""} duration-300 cursor-pointer`}>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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

export default User
