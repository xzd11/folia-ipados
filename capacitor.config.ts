import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.blackhole.folia.ipad',
  appName: 'Folia for iPad',
  webDir: 'www',
  ios: { contentInset: 'automatic', scrollEnabled: true }
};
export default config;
