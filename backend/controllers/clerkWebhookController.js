// controllers/clerkWebhookController.js
import { upsertUserFromPayload, deleteUserByClerkId } from '../services/clerkService.js';

export async function handleClerkWebhook(req, res) {
  try {
    // req.body is raw Buffer (because route uses bodyParser.raw). Convert to JSON.
    const payload = JSON.parse(req.body.toString('utf8'));

    // Normalize shape: nhiều dạng payload khác nhau; thử một vài key thường gặp
    const eventType = payload.type || payload.eventType || payload.event || (payload.data && payload.data.type);
    const eventData = payload.data || payload.user || payload.payload || payload;

    console.log('Clerk webhook:', { eventType });

    if (eventType === 'user.created' || eventType === 'user.create') {
      await upsertUserFromPayload(eventData);
    } else if (eventType === 'user.updated' || eventType === 'user.update') {
      await upsertUserFromPayload(eventData);
    } else if (eventType === 'user.deleted' || eventType === 'user.delete') {
      const id = eventData.id || (eventData.user && eventData.user.id);
      if (id) await deleteUserByClerkId(id);
    } else {
      console.log('Unhandled clerk event type', eventType);
    }

    // Important: return 200 to acknowledge
    return res.status(200).send('ok');
  } catch (err) {
    console.error('clerkWebhookController error', err);
    return res.status(500).send('server error');
  }
}
