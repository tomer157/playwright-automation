# Playwright Artlist-Interview Project

This project utilizes Playwright for end-to-end testing and automation.
Testing the artlist site.

## Getting Started

To run the end-to-end tests, use the following commands:

```bash
# Run all tests
npx playwright test

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

## Note

- for some reason when running all the tests with all browsers we get some failures, different behaviours between configurations. its flaky.
- but when we run them seperatly we got 100% test success.
- so for the UI tests i used: npx playwright test --project=chromium --headed tests/login-and-download-test.spec.ts

## Task Description

- Page Object Model with Playwright:

- Implement a basic Page Object Model using TypeScript and Playwright for automating login and download functionality on artlist.io. Ensure that - your solution promotes code reusability and maintainability.

- Optional:
- Print console log errors

- Playwright API Testing:

- Write a TypeScript script using Playwright to automate the validation of RESTful API endpoints. Include sending requests, handling responses, and asserting the correctness of the returned data. Take any endpoint from artlist.io

- Optional:
- Change any API request values
