export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  // if (process.env.VERCEL_URL) {
  //   re`https://${process.env.VERCEL_URL}`;
  // }
  if (process.env.DEPLOYED) {
    return 'https://garage-guest-c14.vercel.app';
  }
  return 'http://localhost:3000';
}
