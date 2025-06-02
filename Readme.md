# 🚀 E2E testing
GoodBudget web app testing using [Cypress](https://www.cypress.io/)🧪

[![Chromium Tests](https://github.com/Ebazhanov/cypress-ui-api-tests/actions/workflows/chromium.yml/badge.svg?branch=main)](https://github.com/Ebazhanov/cypress-ui-api-tests/actions/workflows/chromium.yml)
[![Firefox Tests](https://github.com/Ebazhanov/cypress-ui-api-tests/actions/workflows/firefox.yml/badge.svg?branch=main)](https://github.com/Ebazhanov/cypress-ui-api-tests/actions/workflows/firefox.yml)

## ✨ Features
### 🔍 Manual "Exploratory" testing
- 🧪 [Exploratory testing charters]()

### 🤖 E2E Automation:
- 💻 [UI tests](/cypress/e2e/ui)
    - 🔐 [Authorisation](/cypress/e2e/ui/auth.cy.ts)
    - 🧾 [Envelops](/cypress/e2e/ui/envelops.cy.ts)
    - 💸 [Transactions](/cypress/e2e/ui/transactions.cy.ts)
- 📡 [API tests](/cypress/e2e/api)
    - 🛠️ [Envelops(Create/Update)](/cypress/e2e/api/envelops.cy.ts)

### 📊 HTML-Report in GH-Actions 
- 🧪 [Chromium test result](https://github.com/Ebazhanov/cypress-ui-api-tests/actions/workflows/chromium.yml)
- 🧪 [Firefox test result](https://github.com/Ebazhanov/cypress-ui-api-tests/actions/workflows/firefox.yml)

## 🧰 Getting Started
#### ▶️ Run locally:
- `$ npm run cy:open` to open Cypress Test Runner
- `$ npm run cy:run` to run tests in headless mode

#### 🐳 Build and run tests in parallel
- `$ docker-compose up --build` (Chromium, Firefox).

#### 🧪 Run tests individually
- `$ docker-compose run cypress-chromium` only in Chromium
- `$ docker-compose run cypress-firefox` only in Firefox
