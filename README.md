# 🚀 MGK Playwright Automation Framework

A scalable end-to-end test automation framework built with **Playwright** and **JavaScript**, following industry-standard design patterns and best practices.

The framework is designed to demonstrate how modern UI and API automation can be implemented using a clean, maintainable, and reusable architecture. It focuses on readability, scalability, CI/CD integration, and reporting.

---

# ✨ Features

- ✅ UI Automation using Playwright
- ✅ API Testing
- ✅ Page Object Model (POM)
- ✅ Custom Playwright Fixtures
- ✅ Environment Configuration
- ✅ Authentication using Storage State
- ✅ Test Data Management
- ✅ Allure Reporting
- ✅ GitHub Actions CI/CD
- ✅ Parallel Test Execution
- ✅ Cross Browser Support
- ✅ Clean Folder Structure
- ✅ Easily Scalable Framework

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | UI Automation |
| JavaScript | Programming Language |
| Playwright Test Runner | Test Execution |
| Allure Report | Advanced Reporting |
| GitHub Actions | Continuous Integration |
| Page Object Model | Design Pattern |
| REST API | API Testing |

---

# 📁 Project Structure

```text
MGK-Playwright-Automation
│
├── auth/
├── config/
├── fixtures/
├── pages/
├── api/
├── test-data/
├── tests/
├── utils/
├── allure-results/
├── allure-report/
├── playwright.config.js
└── package.json
```

## Folder Description

### 📂 auth

Stores authentication state (`storageState`) for logged-in users to avoid repeated logins.

---

### 📂 config

Contains environment-specific configurations such as base URL, API URL, timeout, and execution settings.

---

### 📂 fixtures

Contains custom Playwright fixtures that inject reusable Page Objects into tests, reducing boilerplate code.

---

### 📂 pages

Contains all Page Object classes following the Page Object Model (POM) design pattern.

Each page encapsulates its own locators and actions.

---

### 📂 api

Contains reusable API methods and service classes for API automation.

---

### 📂 test-data

Stores static test data such as credentials, product information, and test inputs.

---

### 📂 tests

Contains all UI and API test cases organized by feature.

---

### 📂 utils *(Coming Soon)*

Will contain reusable helper methods like random data generators, date utilities, file utilities, etc.

---

### 📂 allure-results

Stores raw execution results generated during test execution.

---

### 📂 allure-report

Contains the generated Allure HTML report.

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd MGK-Playwright-Automation
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/ui/login/login.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run only Chromium

```bash
npx playwright test --project=chromium
```

Debug a test

```bash
npx playwright test --debug
```

---

# 🔐 Generate Authentication State

Run the authentication setup test

```bash
npx playwright test tests/auth/auth.setup.spec.js
```

This generates

```text
auth/user.json
```

which is reused by authenticated test scenarios.

---

# 📊 Generate Allure Report

Execute tests

```bash
npx playwright test
```

Generate report

```bash
npx allure generate allure-results --clean
```

Open report

```bash
npx allure open allure-report
```

Or generate and serve in one command

```bash
npx allure serve allure-results
```

---

# 🚀 Continuous Integration

The framework is integrated with **GitHub Actions**.

Every push automatically

- Installs dependencies
- Installs Playwright browsers
- Executes tests
- Generates reports

---

# 📌 Framework Design Principles

This framework is built with the following principles:

- Keep tests clean and readable.
- Separate test logic from page logic.
- Minimize code duplication.
- Build reusable components.
- Follow industry best practices.
- Keep the framework easy to maintain and extend.

---

# 📈 Future Enhancements

- Docker Integration
- Network Mocking
- Visual Testing
- Custom Reporter
- AI-assisted Test Generation
- Advanced Logging
- Cross Environment Execution

---

# 👨‍💻 Author

**Goutham Kumar**

Senior QA Automation Engineer

If you found this project helpful, feel free to ⭐ the repository.