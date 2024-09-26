import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4002;

mongoose.connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/user', userRouter); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));