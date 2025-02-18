# SauceDemo Test Automation

This project is designed to perform end-to-end testing of the [SauceDemo](https://www.saucedemo.com/) application using [Playwright](https://playwright.dev/). The automation suite includes scenarios to ensure the reliability, stability, and correctness of the application functionality. Additionally, it leverages **auto-playwright**, integrating AI (OpenAI) to generate and enhance testing capabilities efficiently.

---

## Features

- **AI-Powered Test Writing**: Uses [`auto-playwright`](https://github.com/Lucgagan/auto-playwright) to generate tests with the help of OpenAI, reducing manual effort and speeding up test creation.
- **Playwright-Based Testing**: Implements the Playwright framework for reliable, cross-browser test automation.
- **Customized HTML Sanitization**: A manually modified `sanitizeHtml.js` script optimizes inputs and outputs during test case execution.
- **Cross-Browser Testing**: Supports automated testing across browsers like Chrome, Firefox, and Edge.
- **CI/CD Friendly**: Easily integrates into continuous integration and continuous deployment pipelines.

---

## Prerequisites

Before running this project, ensure the following tools are installed:

1. **Node.js** (v16 or higher)
2. **NPM** or **Yarn**
3. **Playwright CLI** (optional but recommended)

To verify your installations:
```bash
node -v 
npm -v
```

Additionally, this project uses the `auto-playwright` library, which requires an OpenAI API key to function. Make sure you have API access before proceeding.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url> saucedemo-tests
   cd saucedemo-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright dependencies:
   ```bash
   npx playwright install
   ```

4. Install the `auto-playwright` library:
   ```bash
   npm install auto-playwright -D
   ```

5. Set up your OpenAI API key:
    - Export your OpenAI API token as an environment variable:
      ```bash
      export OPENAI_API_KEY='sk-...'
      ```
    - Alternatively, you can add it to a `.env` file at the root of the project:
      ```plaintext
      OPENAI_API_KEY=sk-...
      ```

---

## Test Details

### Running Playwright Tests Using AI

With the `auto-playwright` library, you can automatically generate and execute Playwright test cases powered by OpenAI. This enables faster test creation with minimal setup.

1. Use the `auto-playwright` commands to generate tests based on your requirements:
   ```bash
   npx auto-playwright generate "<describe the test>"
   ```
   Replace `<describe the test>` with a natural-language description of the scenario you'd like to test.

2. Run generated Playwright tests:
   ```bash
   npx playwright test
   ```

3. Run in debug mode (headed browser launch for debugging):
   ```bash
   npx playwright test --headed
   ```

4. Execute a specific test scenario:
   ```bash
   npx playwright test tests/<specific-file-name>.spec.js
   ```

5. Generate Playwright reports:
   ```bash
   npx playwright show-report
   ```

---

## Modified `sanitizeHtml.js`

The `sanitizeHtml.js` file in this project has been manually edited to tailor the sanitization rules for HTML testing. This function ensures that only essential tags, such as `button`, `form`, `img`, `input`, `select`, and `textarea`, are allowed during sanitization, optimizing testing performance.

---

## Folder Structure

- **/tests**: Contains all Playwright test specifications.
- **/utils**: Utility functions that support the tests.
- **/sanitizeHtml.js**: A modified script that sanitizes HTML inputs and outputs.
- **playwright.config.js**: Configuration file for Playwright, including browser preferences, timeouts, and test-specific setups.

---

## Reporting & Debugging

- After running tests, generate and view Playwright reports:
  ```bash
  npx playwright show-report
  ```

- Use the `--debug` flag or headed mode for detailed debugging:
  ```bash
  npx playwright test --headed
  ```

---

## Contribution

We welcome contributions to enhance this project! If you'd like to improve the automation suite or add more tests, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push them:
   ```bash
   git commit -m "Add your feature description"
   git push origin feature/your-feature-name
   ```
4. Open a pull request for review.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements

- [Playwright Documentation](https://playwright.dev/docs/introduction)
- [SauceDemo Application](https://www.saucedemo.com/)
- [auto-playwright](https://github.com/Lucgagan/auto-playwright) - Used for AI-powered test case generation.
- [sanitize-html](https://www.npmjs.com/package/sanitize-html)

---
