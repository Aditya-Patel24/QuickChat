import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const Chatuser = () => {
  const {onlineUsers}=useSocketContext();
  const getOnlineUsersStatus = (userId)=>{
    return onlineUsers.includes(userId)?"online":"offline";
  };
  const {selectedConversation}= useConversation();
  console.log("chatuser",selectedConversation);
  if (!selectedConversation) {
    return (
      <div className="relative flex items-center h-auto md:h-[10vh] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-b-sm">
        <h1 className="text-xl">No conversation selected</h1>
      </div>
    );
  }
  const status = getOnlineUsersStatus(selectedConversation._id);
  const statusColor = status === "online" ? "text-green-500" : "text-red-500"; 
  return (
    <div className="relative flex items-center h-[10vh] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-b-sm">
      <div className={`avatar ${getOnlineUsersStatus(selectedConversation._id)}`}>
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.fullname } </h1>
        <span className={`text-sm ${statusColor}`} >{getOnlineUsersStatus(selectedConversation._id)}</span>
      </div>
    </div>
  );
};

export default Chatuser;
