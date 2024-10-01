import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

 const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  // console.log("message",messages);
      const sendMessages = async (message) => {
        setLoading(true);
          try {
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`,{message});
            setMessages([...messages,res.data.newMessage]);
            setLoading(false);
          } catch (error) {
            console.log("Error in getting message", error);
            setLoading(false);
          }
        };
        return { loading, sendMessages};
    };


export default useSendMessage;
