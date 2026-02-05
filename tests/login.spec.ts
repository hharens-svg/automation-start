import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login.page';
import { exec } from 'node:child_process';

test('all labels are correct', async ({ page }) => {
  const salesAppPage = new Login(page);
  await salesAppPage.goTo();

  await expect(salesAppPage.labelLogin).toBeVisible;
  await expect(salesAppPage.labelLogin).toBe("Login");
  await expect(salesAppPage.labelPleaseLoginToContinue).toBe("Please log in to continue");
  await expect(salesAppPage.labelSystemVerification).toBe("System Verification");
  await expect(salesAppPage.labelSalesApp).toBe("Sales App");
  await expect(salesAppPage.labelSystemVerification).toBe("System Verification");




  await expect(page).toHaveTitle(/Playwright/);
});

test('has title', async ({ page }) => {
  await page.goto('https://sales-dev.svgermany.de');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title', async ({ page }) => {
  await page.goto('https://sales-dev.svgermany.de');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title', async ({ page }) => {
  await page.goto('https://sales-dev.svgermany.de');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

