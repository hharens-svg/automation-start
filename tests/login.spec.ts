import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login.page';
import { exec } from 'node:child_process';

test('labels are correct, buttons active and warnings work', async ({ page }) => {
  const salesAppPage = new Login(page);
  await salesAppPage.goTo();

  await expect(salesAppPage.labelLogin).toBeVisible();
  await expect(salesAppPage.labelLogin).toContainText("Login");
  await expect(salesAppPage.labelPleaseLoginToContinue).toContainText("Please log in to continue.");
  await expect(salesAppPage.labelSystemVerification).toContainText("System Verification");
  await expect(salesAppPage.labelSalesApp).toContainText("Sales App");
  await expect(salesAppPage.labelNotRegisteredYet).toContainText("Not registered yet?");

  await expect(salesAppPage.inputEmailAdress).toBeEmpty();
  await expect(salesAppPage.inputPassword).toBeEmpty();

  await expect(salesAppPage.buttonLogin).toBeEnabled();
  await expect(salesAppPage.buttonSignup).toBeEnabled();

  await expect(salesAppPage.warningEmailAdress).toBeEmpty();
  await expect(salesAppPage.warningPassword).toBeEmpty();

  await salesAppPage.buttonLogin.click();

  await expect(salesAppPage.warningEmailAdress).toContainText("E-mail is required");
  await expect(salesAppPage.warningPassword).toContainText("Password is required");

});


