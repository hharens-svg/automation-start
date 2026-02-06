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

        this.labelLogin = page.getByRole('heading', { name: 'Login' });
        this.labelPleaseLoginToContinue = page.getByText('Please log in to continue.');
        this.labelSystemVerification = page.getByRole('heading', { name: 'System Verification' });
        this.labelSalesApp = page.getByRole('heading', { name: 'Sales App' });
        this.labelNotRegisteredYet = page.getByText('Not registered yet?Sign up');
        this.labelImpressum = page.getByRole('link', { name: 'Impressum' });

        this.inputEmailAdress = page.locator('#input-1');
        this.inputPassword = page.locator('#password');

        this.warningEmailAdress = page.locator('#input-1-messages');
        this.warningPassword = page.locator('#password-messages');

        this.buttonLogin = page.locator('#ibtn');
        this.buttonSignup = page.getByRole('button', { name: 'Sign up' });
    }

    async goTo() {
        await this.page.goto(this.url);
    }

    async login(email?: string, password?:string){

        if (email!=undefined){
            this.inputEmailAdress.fill(email);
        }

        if (password!=undefined){
            this.inputPassword.fill(password);
        }

    }
}