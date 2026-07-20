import { defineConfig } from '@playwright/test';
import config from './config/index.js';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  workers: process.env.CI ? 4 : 4,
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  use: {
    baseURL: config.baseURL,
    headless: config.headless,
    viewport: { width: 1280, height: 720 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 10000,
    navigationTimeout: config.timeout,
  },
});