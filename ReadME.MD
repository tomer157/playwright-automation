# Playwright -Interview Project

This project utilizes Playwright for end-to-end testing and automation.
Testing the artlist site.

## Getting Started

To run the end-to-end tests, use the following commands:

```bash
# Run all tests
npx playwright test

# Run the TaskManager tests
npx playwright test ./tests/task-manager-test.spec.ts

# Start interactive UI mode
npx playwright test --ui

# Run tests only on Desktop Chrome
npx playwright test --project=chromium

# Run tests in a specific file
npx playwright test example

# Run tests in a specific file. run on Chrome browser.
npx playwright test --project=chromium --headed  .\tests\api-test.spec.ts

# Run tests in debug mode
npx playwright test --debug

```

## Reports folder

- playwright-report
