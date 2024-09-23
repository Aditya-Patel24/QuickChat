import express from 'express';
import {allUsers, login, logout, signup} from '../controller/user.controller.js';
const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/alluser', allUsers);

export default router;