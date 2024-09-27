import express from 'express';
import secureRoute from '../middleware/secureRoute.js';
import { sendMessage } from '../controller/message.controller.js';
import { getMessage } from '../controller/message.controller.js';

const router = express.Router();
router.post('/send/:id', secureRoute, sendMessage);
router.get('/get/:id', secureRoute, getMessage);

export default router;