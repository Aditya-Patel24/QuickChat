import React from "react";

const Message = ({message}) => {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const sender = message.senderId === authUser._id;
  const chatName = sender ? "chat-end" : "chat-start";
  const chatColor = sender ? "bg-blue-500" : "";
  return (
    <div className="pl-4 p-1">
      <div className={`chat ${chatName}`} >
        <div className={`chat-bubble text-white ${chatColor}`} >{message.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
