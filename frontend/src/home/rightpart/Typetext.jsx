import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
const Typetext = () => {
  const {loading, sendMessages} = useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async(e) => {
    // console.log("text", e);
e.preventDefault();
await sendMessages(message);
setMessage("")
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex space-x-4 h-[8vh] bg-gray-800 items-center pl-8 ">
      <div className="w-[90%]">
        <input
          type="text"
          placeholder="Type here"
          value={message}
          className="bg-gray-600 rounded-xl outline-none items-center pl-4 w-full p-2"
          onChange={(e)=>setMessage(e.target.value)}
          />
      </div>
      <button>
        <IoSend className="text-3xl" />
      </button>
    </div>
  </form>
  );
};

export default Typetext;