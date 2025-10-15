import { test as base, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

type MyFixtures = {
  login: () => Promise<void>;
};

export const test = base.extend<MyFixtures>({
  login: async ({ page }, use) => {
    const login = async () => {
      await page.goto(process.env.BASE_URL!);
      await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_USER!);
      await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_PASS!);
      await page.getByRole('button', { name: 'Sign in' }).click();
      await expect(page.locator('#user-avatar')).toMatchAriaSnapshot(`- text: TA`, { timeout: 10000 });
      await expect(page.locator('#user-avatar')).toContainText('TA');
      console.log('Login successful');
    };
    await use(login);
  },
});

export { expect };