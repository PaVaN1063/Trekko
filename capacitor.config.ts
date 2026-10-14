import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.aorbo.starter',
  appName: 'Trekko',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,      // Duration in milliseconds (3 seconds)
      launchAutoHide: true,          // Automatically hide the splash screen after the duration
      backgroundColor: '#4b7ef0',  // Background color of the splash screen (white in RGBA)
      androidScaleType: 'CENTER_CROP', // Scale the image to fill the screen while keeping aspect ratio
      splashFullScreen: true,        // Enable full-screen splash without the status bar
      splashImmersive: true          // Enable immersive mode (hides navigation bar on Android)
    }
  }
};

export default config;
