import { LoginPage } from "../e2e/ui/tests/login/pages/login-page"

exports.loginHandler = function (credentials) {
    
    let loginPage = new LoginPage()
    loginPage.login(credentials)
}