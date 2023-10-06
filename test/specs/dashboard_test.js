import DashboardPage from "../pages/DashboardPage.js";
import LoginPage from "../pages/LoginPage.js";

describe('Dashboard ', () => {
    beforeEach( async () => {
        
        console.log('Before HOOK is executed');
        await LoginPage.open();
    })

    it('Login and Navigate to Dashboard', async () => {
        
        await expect(browser).toHaveTitle("OrangeHRM");

        (await LoginPage.userName).addValue('Admin');
        (await LoginPage.password).addValue('admin123');
        (await LoginPage.loginButton).click();

        const exp_Header = await DashboardPage.header_Dashboard;
        await console.log("Expected value : " , exp_Header);

        await expect(exp_Header).toEqual('Dashboard');
    });
})