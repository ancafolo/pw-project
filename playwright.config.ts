import {PlaywrightTestConfig, devices} from '@playwright/test';


const config: PlaywrightTestConfig = {
  testMatch: ["tests/e2e/**/*.test.ts"],
  use: {
    headless: !!process.env.CI,
    screenshot: "on",
    video: "retain-on-failure",
  },
  retries: 0,
  reporter: [
    ["list"],
    [
      "allure-playwright",
      {
        resultsDir: "allure-results",
      },
    ],
  ],

  projects: [
    {
      name: "e2e",
      testDir: "tests/e2e",
      use: {
        ...devices["Desktop Chrome"],
      }

    }]

  }

export default config;  