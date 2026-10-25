import type { CapacitorConfig } from '@capacitor/cli';
const url = process.env.FOLIA_SERVER_URL;
if (!url || !/^https:\/\//.test(url)) throw new Error('FOLIA_SERVER_URL must be HTTPS');
const config: CapacitorConfig = {
  appId: 'dev.blackhole.folia.ipad',
  appName: 'Folia for iPad',
  webDir: 'www',
  server: { url, cleartext: false, allowNavigation: [new URL(url).hostname] },
  ios: { contentInset: 'automatic', scrollEnabled: true }
};
export default config;
