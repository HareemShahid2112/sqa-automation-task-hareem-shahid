# SQA Automation Task – Hareem Shahid

This project contains automated test cases written in **Cypress** using **BDD** and **Page Object Model (POM)** for the site:  
🔗 https://qa-practice.netlify.app/products_list

## Automated Test Scenarios
1. Add 2 items to the cart (iPhone 12 and Huawei)
2. Verify total quantity
3. Double the quantity of first product
4. Reduce it back to single
5. Validate updated cart state

## Project Structure
- `cypress/e2e/features/cart.feature` – Test scenarios in Gherkin
- `cypress/e2e/step_definitions/cartSteps.js` – Step definitions
- `cypress/support/page_objects/productsPage.js` – POM locators and methods
- `cypress.config.js` – Cypress configuration

## Tech Stack
- Cypress
- Cucumber BDD
- JavaScript
- Page Object Model
- GitHub Actions (CI-ready)
