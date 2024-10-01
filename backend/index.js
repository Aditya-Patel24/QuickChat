import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import messageRoute from './routes/message.route.js';
import { app, server } from './socketIO/server.js';
import path from "path";
// import { fileURLToPath } from 'url';
dotenv.config();
dotenv.config();
const _dirname = path.resolve();
// const _dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'https://quickchat-aditya.onrender.com',
    credentials: true,
}));

const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4002;

mongoose.connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('https://quickchat-aditya.onrender.com/api/user', userRouter); 
app.use('https://quickchat-aditya.onrender.com/api/message', messageRoute); 

//---- deployment code------
app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(_,res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));