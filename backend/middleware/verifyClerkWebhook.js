// middleware/verifyClerkWebhook.js
import { computeHmacSha256Hex } from '../utils/hmac.js';

export default function verifyClerkWebhook(req, res, next) {
  try {
    const raw = req.body; // Buffer
    const signatureHeader = req.header('Clerk-Signature') || req.header('clerk-signature') || req.header('x-clerk-signature');

    const secret = process.env.CLERK_WEBHOOK_SECRET;
    if (!signatureHeader || !secret) {
      console.warn('Missing signature header or secret');
      return res.status(401).send('missing signature or secret');
    }

    const expected = computeHmacSha256Hex(raw, secret);

    // signatureHeader could be 'sha256=<hex>' or plain hex, or CSV
    const matches = (sig) => {
      if (!sig) return false;
      if (sig === expected) return true;
      if (sig.startsWith('sha256=')) return sig.slice(7) === expected;
      return sig.split(',').some(s => {
        const t = s.trim();
        return t === expected || t === `sha256=${expected}`;
      });
    };

    if (!matches(signatureHeader)) {
      console.warn('Webhook signature mismatch', { signatureHeader });
      return res.status(401).send('invalid signature');
    }

    // signature verified
    next();
  } catch (err) {
    console.error('verifyClerkWebhook error', err);
    return res.status(500).send('server error');
  }
}
