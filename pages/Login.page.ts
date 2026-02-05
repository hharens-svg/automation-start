import { expect, Locator, Page } from '@playwright/test';
export class Login {
    readonly url = "https://sales-dev.svgermany.de";
    readonly page: Page;
    readonly logoSVG: Locator;
    readonly labelLogin: Locator;
    readonly labelPleaseLoginToContinue: Locator;
    readonly labelSystemVerification: Locator;
    readonly labelSalesApp: Locator;
    readonly labelNotRegisteredYet: Locator;
    readonly labelImpressum: Locator;
    readonly inputEmailAdress: Locator;
    readonly inputPassword: Locator;
    readonly warningEmailAdress: Locator;
    readonly warningPassword: Locator;

    readonly buttonLogin: Locator;
    readonly buttonSignup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoSVG = page.locator('.logo');
        this.labelLogin = page.locator('div:nth-child(1) h2');
        this.labelPleaseLoginToContinue = page.locator('div:nth-child(1) p');
        this.labelSystemVerification = page.locator('div:nth-child(1) div.v-col.hidden-xs-only.sm6.right-side h2');
        this.labelSalesApp = page.locator('div:nth-child(1) div.v-col.hidden-xs-only.sm6.right-side h3');
        this.labelNotRegisteredYet = page.locator('div.v-container.v-locale--is-ltr > div.v-col > p');
        this.labelImpressum = page.locator('footer a');
        this.inputEmailAdress = page.locator('#input-1');
        this.inputPassword = page.locator('#password');
        this.warningEmailAdress = page.locator('#input-1-messages');
        this.warningPassword = page.locator('#password-messages');
        this.buttonLogin = page.locator('#ibtn');
        this.buttonSignup = page.locator('div.v-container.v-locale--is-ltr > div.v-col > p > span > button');
        this.buttonLogin = page.locator('#ibtn');
    }

    async goTo() {
        await this.page.goto(this.url);
    }
}

// SVG logo: ".logo"
// Login: "div:nth-child(1) h2"
// Please log in to continue: "div:nth-child(1) p"
// System Verification: "div:nth-child(1) div.v-col.hidden-xs-only.sm6.right-side h2"
// Sales App: "div:nth-child(1) div.v-col.hidden-xs-only.sm6.right-side h3"
// Not registered yet?: "div.v-container.v-locale--is-ltr > div.v-col > p"
// E-mail is required: "#input-1-messages"
// Password is required: "#password-messages"
// Email Adress: "#input-1"
// Password: "#password"
// Log in button: "#ibtn"
// Sign up button: "div.v-container.v-locale--is-ltr > div.v-col > p > span > button"
// Impressum: "footer a"