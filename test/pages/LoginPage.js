import { browser } from "@wdio/globals";
class LoginPage{

    open(){
        return browser.url('/');
    }

    get userName(){
        return $('[name=username]');
    }

    get password(){
        return $('[name=password]');
    }

    get loginButton(){
        return $('button.orangehrm-login-button');
    }

    get title(){
        return $
    }
}

export default new LoginPage();