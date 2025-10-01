// routes/webhooks.js
import express from 'express';
import verifyClerkWebhook from '../middleware/verifyClerkWebhook.js';
import { handleClerkWebhook } from '../controllers/clerkWebhookController.js';
import bodyParser from 'body-parser';

const router = express.Router();

// Apply raw body parser to this specific POST route so req.body is Buffer for signature verify
router.post('/clerk', bodyParser.raw({ type: '*/*' }), verifyClerkWebhook, handleClerkWebhook);

export default router;
