//OrangeHRM
//https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
import {browser, $, expect } from '@wdio/globals';
import LoginPage from '../pages/LoginPage';

describe('Login Page', () => {
    beforeEach( async() => {
        await LoginPage.open();
    })
    it('Open URL & assert title', async() => {
        
        await expect(browser).toHaveTitle("OrangeHRM");
    });

    it('Validate Url Contains given', async() => {
        //await browser.url('/');
        
        await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });

    it('Validate forgot password page', async() => {
        //await browser.url('/');

        await $('.oxd-text.orangehrm-login-forgot-header').click();
        await expect(browser).toHaveUrlContaining('requestPasswordResetCode');
    });

    it('Validating the links from Side menu in Home page', async() => {
        //await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const username = await $('[name=username]');
        const password = await $('[name=password]');
        const loginButton = await $('button.orangehrm-login-button');

        await username.addValue("Admin");
        await password.addValue("admin123");
        await loginButton.click();

        //ul.oxd-main-menu li.oxd-main-menu-item-wrapper a span
        const actualLinks = [];
        const navLinks = await $('ul.oxd-main-menu').$$('li.oxd-main-menu-item-wrapper a span');

        const expectedLinks = [
            'Admin', 'PIM', 'Leave', 'Time', 'Recruitment','My Info', 'Performance',
             'Dashboard', 'Directory','Maintenance', 'Claim', 'Buzz'
        ]

        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);
    });
} )