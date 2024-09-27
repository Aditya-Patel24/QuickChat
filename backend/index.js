import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import messageRoute from './routes/message.route.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4002;

mongoose.connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/user', userRouter); 
app.use('/api/message', messageRoute); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));