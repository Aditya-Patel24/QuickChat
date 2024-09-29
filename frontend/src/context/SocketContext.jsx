import {createContext, useContext, useEffect, useState} from "react"
import { io } from "socket.io-client";
import { useAuth } from "./Authprovider";

//this is Hook
const socketContext = createContext();
export const useSocketContext = () => {
    return useContext(socketContext);
};


 export const SocketProvider = ({children})=>{
    const [socket,setSocket]=useState(null);
    const [authUser]=useAuth();
    const [onlineUsers,setOnlineUsers] = useState([]); 
    useEffect(()=>{
        if(authUser){
            const socket=io("http://localhost:4000",{
query:{
    userId:authUser.checkUser._id,
}})
setSocket(socket);
socket.on("getOnlineUsers", (users) => {
    setOnlineUsers(users);
})
    return()=>socket.close();
}
else {
    if(socket) {
    socket.close();
    setSocket(null);
    }
}
    },[authUser]);
    return(
    <socketContext.Provider value={{ socket, onlineUsers }}>
        {children}
    </socketContext.Provider>
    );
 };