import {Server} from "socket.io";
import http from "http";
import express from "express"
const app = express();
const server = http.createServer(app);
//socket io
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"]
    },
});

const users = {};

    //used to listen events on server side
    io.on("connection",(socket)=>{
    console.log("A user connected",socket.id);
    const userId=socket.handshake.query.userId;
    if(userId) {
        users[userId] = socket.id;
        console.log("Current online users:", users);
       
        // used to send the event to all connected user => to show online status
        io.emit("getOnlineUser",Object.keys(users));
        
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

export {app,io,server};

// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);

// // socket.io instance with CORS configuration
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST"],
//   },
// });

// const users = {}; // Store users and their respective socket IDs

// // Listen for socket connection
// io.on("connection", (socket) => {
//   console.log("A user connected", socket.id);
  
//   const userId = socket.handshake.query.userId;

//   // If userId is provided in the handshake, track the user
//   if (userId) {
//     users[userId] = socket.id; // Map userId to socket ID
//     console.log("Current online users:", users);

//     // Emit the updated list of online users to all clients
//     io.emit("getOnlineUsers", Object.keys(users));
//   }

//   // Handle socket disconnection
//   socket.on("disconnect", () => {
//     console.log("A user disconnected", socket.id);

//     // Find and remove the disconnected user
//     Object.keys(users).forEach((key) => {
//       if (users[key] === socket.id) {
//         delete users[key];
//       }
//     });

//     // Emit the updated list of online users to all clients
//     io.emit("getOnlineUsers", Object.keys(users));
//   });
// });

// export { app, io, server };
