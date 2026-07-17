import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Updated test directory
  timeout: 60000, // Increased timeout for each test
  retries: 1, // Number of retries for failed tests
  workers: process.env.CI ? 2 : undefined, // Number of parallel workers (default is based on CPU cores)
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://automationexercise.com', // Corrected base URL
    headless: true, // Run tests in non-headless mode for debugging
    viewport: { width: 1280, height: 720 }, // Default viewport size
    video: 'retain-on-failure', // Record video only on test failure
    screenshot: 'only-on-failure', // Take screenshots only on test failure
    trace: 'retain-on-failure', // Collect trace only on test failure
    actionTimeout: 10000, // Timeout for each action in milliseconds
    navigationTimeout: 30000, // Timeout for navigation actions in milliseconds
  },
  projects: [
    {
      name: 'chromium', // Project for Chromium browser
      use: { browserName: 'chromium' },
    },
  ],
});