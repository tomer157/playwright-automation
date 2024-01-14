import { expect, type Locator, type Page } from '@playwright/test';
import 'dotenv/config';

// POM For the artlist login page
class LoginPage {
    private static instance: LoginPage | null = null;
    private readonly page: Page;
    signInBtn: Locator;
    userNameTextBox: Locator;
    baseUrl = process.env.BASE_URL || 'https://artlist.io/';
    username = process.env.EMAIL
    passwordTextBox: Locator;
    loginBtn: Locator;
    userDiv: Locator;
    logoutBtn: Locator;

    private constructor(page: Page) {
        this.page = page;
        this.signInBtn = page.getByRole('button', { name: 'Sign in' });
        this.userNameTextBox =  page.getByTestId('email');
        this.passwordTextBox = page.getByTestId('password');
        this.loginBtn = page.getByRole('dialog').getByRole('button', { name: 'Sign in' });
        this.userDiv =  page.getByRole('button', { name: 'Tomer' })
        this.logoutBtn = page.getByRole('link', { name: 'Sign Out' })
        
    }

    static getInstance(page: Page): LoginPage {
        if (!LoginPage.instance) {
            LoginPage.instance = new LoginPage(page);
        }
        return LoginPage.instance;
    }

    async navigate() {
        await this.page.goto(this.baseUrl);
    }

    async login(username, password) {
        await this.signInBtn.click();
        await this.userNameTextBox.click();
        await this.userNameTextBox.fill(username);
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill(password);
        await this.loginBtn.click();
    }



    async doesTomerDivElementExist() {
        await expect(this.userDiv).toBeVisible();
    }

    async logout() {
        await this.userDiv.click();
        await this.logoutBtn.click();
    }

    async close() {
        await this.page.close();
    }
    
}

export default LoginPage;
