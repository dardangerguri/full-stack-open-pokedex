import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-tests',
  use: {
    headless: true,
    baseURL: 'http://localhost:5000'
  },
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
  },
})
