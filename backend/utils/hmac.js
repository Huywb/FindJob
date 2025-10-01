
import crypto from 'crypto';

export function computeHmacSha256Hex(bufferOrString, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(bufferOrString);
  return hmac.digest('hex');
}
