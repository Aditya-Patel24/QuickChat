import {Server} from "socket.io";
import http from "http";
import express from "express"
const app = express();
const server = http.createServer(app);
//socket io
const io = new Server(server,{
    cors:{
        origin:"https://quickchat-aditya.onrender.com",
        methods:["GET","POST"]
    },
});

// real time message code is here
export const getReceiverSocketId = (receiverId)=>{
    return users[receiverId];
}
const users = {};

    //used to listen events on server side
    io.on("connection",(socket)=>{
    console.log("A user connected",socket.id);
    const userId=socket.handshake.query.userId;
    if(userId) {
        users[userId] = socket.id;
        console.log("Current online users:", users);
       
        // used to send the event to all connected user => to show online status
        io.emit("getOnlineUsers",Object.keys(users));   
    }

    //used to listen client side events emitted by server side
    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
    
        // Find and remove the disconnected user
        Object.keys(users).forEach((key) => {
          if (users[key] === socket.id) {
            delete users[key];
          }
        });
    io.emit("getOnlineUsers", Object.keys(users));
    });
})
export { app, io, server };