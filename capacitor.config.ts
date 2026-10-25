import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.blackhole.folia.ipad',
  appName: 'Folia for iPad',
  webDir: 'www',
  ios: { contentInset: 'automatic', scrollEnabled: true },
  // Patch fetch/XMLHttpRequest to use native networking on iOS.
  // This avoids WKWebView CORS restrictions for the NetEase API.
  plugins: { CapacitorHttp: { enabled: true } }
};
export default config;
