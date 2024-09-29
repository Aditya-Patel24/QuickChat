import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext'
import useConversation from '../zustand/useConversation.js';
import sound from "../assets/notification3.mp3";

const useGetSocketMessage = () => {
    const {socket}=useSocketContext();
    const {messages,setMessages} = useConversation();
    useEffect(()=>{
        socket.on("newMessage",(newMessage) => {
            const notification = new Audio(sound);
            notification.play();
            setMessages([...messages, newMessage]);
        });
        return () => {
            socket.off("newMessage");
        };
    },[socket,messages,setMessages])
};
export default useGetSocketMessage;