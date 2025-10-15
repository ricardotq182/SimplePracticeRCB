import { Page, expect } from '@playwright/test';

export default class CompleteTask {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async completeTask(uniqueName: string) {
        // Look for the task matching the uniqueName and mark it as complete
        const buttonComp = this.page.getByText(uniqueName);
        const listItem = buttonComp.locator('..').locator('..');
        const checkableCircle = listItem.locator('.checkable-circle');
        await checkableCircle.click();

        // Code to validate task is marked as complete:
        await this.page.getByRole('button', { name: 'Incomplete' }).click();
        await this.page.getByRole('button', { name: 'Completed' }).first().click();
        // await this.page.locator('button:has-text("Completed")').click(); //alternative solution in case of flaky test
        const buttonCompleted = this.page.getByText(uniqueName);
        const listItem2 = buttonCompleted.locator('xpath=ancestor::div[contains(@class, "list-item")]');
        const detailsContainer = listItem2.locator('.M\\+cYT');
        const items = detailsContainer.locator('.item');
        await expect(items.first()).toContainText('Completed');
        await expect(items.first()).toBeVisible();
        console.log("Task " + uniqueName + " is marked as Completed");
    }
}