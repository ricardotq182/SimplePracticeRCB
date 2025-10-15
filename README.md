# 1. Prerequisites
Before starting, ensure you have the correct development environment installed:

Node.js and npm: You must have Node.js version v22.20.0 or higher, which includes npm version 10.0.3 or higher.
node -v
npm -v

# 2. Project Setup and Installation
Follow these steps to initialize the project and install all required dependencies.

2.1. Initialize Playwright
Use the Playwright CLI to set up the project. This command automatically installs required libraries for E2E testing, including TypeScript configuration.
### Run this command in your project root
npm init playwright@latest
When prompted, ensure you select TypeScript as the language and choose to add a GitHub Actions workflow file.

2.2. Install Browsers
Playwright automatically installs Chromium, Firefox, and WebKit during the initialization step. If you need to reinstall them or ensure all are present:
npx playwright install

2.3. Install Environment Variable Management
We use dotenv to manage environment variables (like API keys, base URLs, etc.) for different environments (local, staging, production).
npm install dotenv

# 3. Configuration

3.1. Environment Variables (.env file)
Create a file named .env in the root of your project. This file is used to store sensitive configuration data.
Note: Ensure .env is added to your .gitignore file to prevent sensitive information from being committed to the repository.

### .env example
BASE_URL="[http://your-application-url.com](http://your-application-url.com)"
USERNAME="testuser"
PASSWORD="secure-password"
To load these variables in your tests, you typically configure playwright.config.ts to use dotenv.

3.2. TypeScript E2E Setup
Since you initialized with Playwright, TypeScript is already configured. All your test files should use the .spec.ts or .test.ts extension.

# 4. Running Tests
Run All Tests
npx playwright test

Run Tests in Headed Mode to see the browser interact during the test:
npx playwright test --headed

Run Specific Tests
npx playwright test path/to/your/test.spec.ts
