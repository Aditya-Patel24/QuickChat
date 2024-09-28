import React from "react";

const Message = ({message}) => {
  return (
    <div className="p-4">
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent">{message.message}
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
      </div>
    </div>
  );
};

export default Message;
