# 🎭 Playwright UI Automation Tests

This repository contains end-to-end UI test automation for [OrangeHRM](https://opensource-demo.orangehrmlive.com/) using **Playwright** with **TypeScript**. It demonstrates real-world scenarios such as login, dropdown handling, and table data validation.

---

## 🚀 Tech Stack

- ✅ Playwright
- ✅ TypeScript
- ✅ VSCode
- ✅ Git & GitHub
- ✅ GitHub Actions (CI-ready)

---

## 📌 Features Covered

- 🔐 Login Functionality
- 🔽 Dropdown selection (native + modern JS dropdowns)
- 📋 Table row assertions and pagination
- ✅ Assertions with `toHaveText`, `toHaveCount`
- 🔄 Retry strategy & flakiness handling
- 📸 Screenshots on failure

---
## 📝 Test Reporting

This project uses **Allure Reports** to generate rich test execution reports.  

### 📂 Report Output
- **allure-results/** → Raw test results (JSON, screenshots, videos)
- **allure-report/** → Beautiful HTML report generated from the results

### 📖 View Reports Locally
After running your tests:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

## 🔧 Getting Started

### 1. Install dependencies

```bash
npm install
