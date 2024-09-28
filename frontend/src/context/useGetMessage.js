import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

 const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect (() => {
      const getMessages = async () => {
        setLoading(true);
        if (selectedConversation && selectedConversation._id) {
          try {
            const res = await axios.get(`/api/message/get/${selectedConversation._id}`);
            setMessages(res.data);
            setLoading(false);
          } catch (error) {
            console.log("Error in getting message", error);
            setLoading(false);
          }
        }
      };
      getMessages();
    },[selectedConversation, setMessages]);
  return { loading, messages };
};

export default useGetMessage;
