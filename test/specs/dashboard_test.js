import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

describe('Dashboard ', () => {
    before( async () => {
        
        console.log('Before HOOK is executed');
        await browser.url('/');
    })

    it('Login and Navigate to Dashboard', async () => {
        
        await expect(browser).toHaveTitle("OrangeHRM");

        (await LoginPage.userName).addValue('Admin');
        (await LoginPage.password).addValue('Admin123');
        (await LoginPage.loginButton).click();

        await expect(DashboardPage.header_Dashboard).toHaveText('Dashboard');
    });
})