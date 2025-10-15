import { Page, expect } from '@playwright/test';
import path from 'path';
import * as taskData from '../fixtures/test-data/taskData.json';

export default class CreateTask {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async createTask(uniqueName: string) {
        await this.page.getByRole('link', { name: 'Tasks' }).click();
        await this.page.getByRole('link', { name: 'Create task' }).click();
        await this.page.getByRole('textbox', { name: 'Task name' }).fill(uniqueName);
        await this.page.getByRole('textbox', { name: 'Description' }).fill(taskData.taskDescription);
        await this.page.click('[placeholder="mm/dd/yyyy"]');
        const daySelector = '.datepicker-days td.day:not(.old):not(.new)'; //this will make sure past and next month dates are excluded
        const targetDay = this.page.locator(daySelector).getByText(taskData.dueDate, { exact: true });
        await targetDay.click();
        await this.page.getByPlaceholder('hh:mm aa').fill(taskData.dueTime);
        await this.page.getByRole('button', { name: 'None' }).click();
        await this.page.getByRole('option', { name: taskData.priority }).click();
        await this.page.locator('[id^="select-box-el-"]').first().click();
        await this.page.getByRole('searchbox').fill(taskData.assignedToName1);
        await this.page.getByRole('option', { name: taskData.assignedToName1 }).click();
        await this.page.getByText('Add team members').click();
        await this.page.getByRole('searchbox').fill(taskData.assignedToName2);
        await this.page.getByText(taskData.assignedToName2).click();
        const filePath = path.resolve(__dirname, '../e2e/files/Ricardo Cortes - QA Engineer with automation.pdf');
        await this.page.setInputFiles('input[type="file"]', filePath);
        await this.page.getByRole('button', { name: 'Save' }).click();
        console.log(`Task "${uniqueName}" created successfully`);
        await expect(this.page.getByText(uniqueName)).toBeVisible({ timeout: 10000 });
    }
}