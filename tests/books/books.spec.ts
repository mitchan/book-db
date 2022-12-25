import { test, expect } from '@playwright/test';

test('creates a book', async ({ page }) => {
  await page.goto('http://localhost:4200/books');

  // click the create button
  await page.getByTestId('create-btn').click();

  const timestamp = Date.now();

  // fill the fields
  await page.getByLabel('Title').fill(`Book title - ${timestamp}`);
  await page.getByLabel('Author').fill(`Book author - ${timestamp}`);
  await page.getByLabel('ISBN').fill(`Book ISBN - ${timestamp}`);

  // submit the form
  await page.getByTestId('submit-btn').click();

  // check table last row
  await expect(page.getByText(`Book title - ${timestamp}`)).toHaveCount(1);
  await expect(page.getByText(`Book author - ${timestamp}`)).toHaveCount(1);
  await expect(page.getByText(`Book ISBN - ${timestamp}`)).toHaveCount(1);
});

test('deletes a book', async ({ page }) => {
  await page.goto('http://localhost:4200/books');

  // get the current number of rows
  await expect(page.getByRole('row').last()).toBeVisible();
  const rowCount = await page.getByRole('row').count();

  // click last row
  await page.getByRole('row').last().click();

  // click the delete btn
  await page.getByTestId('delete-btn').click();

  // get rows from table
  await expect(page.getByRole('row').last()).toBeVisible();
  const newRowsCount = await page.getByRole('row').count();
  expect(newRowsCount).toBe(rowCount - 1);
});
