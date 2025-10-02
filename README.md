## Best Practices

### Single Responsibility Principle (SRP)
- Each page object should encapsulate only the logic and selectors for a single page or component.
- Step definitions should only orchestrate actions and assertions, not contain UI logic.
- Hooks (`support/hooks.ts`) should only manage setup/teardown, not test logic.

### Independence & Data Isolation
- Each scenario should be independent and not rely on the state left by previous tests.
- Use hooks to launch and close a new browser context for every scenario.
- Avoid sharing state between scenarios except through the custom world object.

### Clear & Descriptive Names
- Name feature files, scenarios, steps, and page object methods clearly and consistently.
- Use Gherkin steps that describe user intent, not implementation details.
- Name selectors and variables to reflect their purpose in the UI.

### Proper Setup & Teardown
- Use `Before` and `After` hooks to launch and close the browser for each scenario.
- Clean up any test data or state in teardown hooks if needed.
- Ensure all resources (browser, context, page) are properly disposed after each test.

Following these practices will keep your test suite maintainable, reliable, and easy to extend.
# Swag Labs BDD Automation Framework

This project is an end-to-end BDD test automation framework for [Swag Labs](https://www.saucedemo.com/) using Cucumber, Playwright, and the Page Object Model (POM) in TypeScript.

## Features
- Cucumber BDD with Gherkin feature files
- Playwright for browser automation
- Page Object Model for maintainable test code
- Robust login, cart, and checkout scenarios
- Full error message assertions
- Headed mode for visual debugging
- **Allure reporting** for rich test reports

## Project Structure
```
features/           # Gherkin feature files
step-definitions/   # Step definitions (TypeScript, using POM)
pages/              # Page Object Model classes
support/            # World, hooks, and custom logic
README.md           # Project documentation
```

npm install
npm test
npx allure generate allure-results --clean && npx allure open

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd swaglabs-bdd
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run all tests and generate an HTML report:**
   ```sh
   npm test
   ```
   This will run all scenarios in headed mode and generate a report at `reports/cucumber-report.html`.

4. **View the HTML report:**
   Open `reports/cucumber-report.html` in your browser to see a detailed test report.

## Usage Examples

### Example: Add a new login scenario

Add to `features/login.feature`:
```gherkin
Scenario: User login with locked out user
  Given I am on the login page
  When I login with username "locked_out_user" and password "secret_sauce"
  Then I should see an error message for invalid credentials
```

### Example: Add a new step definition

Add to `step-definitions/login.steps.ts`:
```typescript
Then('I should see the login page', async function (this: CustomWorld) {
  expect(await this.page.url()).toContain('saucedemo.com');
});
```

### Example: Add a new page object

Create `pages/CartPage.ts`:
```typescript
import { Page } from '@playwright/test';
export class CartPage {
  constructor(private page: Page) {}
  async isVisible() {
    return this.page.isVisible('.cart_list');
  }
}
```

## Reporting
This framework uses **Allure** for advanced reporting. After running tests, generate and open the report as shown above. The report includes:
- Scenario pass/fail status
- Step-by-step execution
- Screenshots on failure (if implemented)
- Error messages and stack traces

## Adding/Editing Tests
- Add new scenarios in `features/`
- Implement step logic in `step-definitions/` using page objects from `pages/`
- Add new page objects as needed for new UI sections

## Customization
- Update selectors in page objects if the Swag Labs UI changes
- Add more hooks or custom world logic in `support/`

## Requirements
- Node.js 18+
- Chrome/Chromium browser (Playwright will auto-install)

---

**Author:** Your Name
