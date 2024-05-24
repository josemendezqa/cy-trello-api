import { LoginLocators } from '../constants/login-ui-constants'
import { ButtonComponent } from '../../../components/button-component'
import { InputComponent } from '../../../components/input-component'
import { getDevEmail, getDevPassword } from '../../../../../../config/environment-handler';

export class LoginPage {
	constructor(email = getDevEmail(), password = getDevPassword()) {
		this.TrelloLoginButton = new ButtonComponent(LoginLocators.TRELLO_LOGIN_BUTTON)
		this.AtlassianLoginButton = new ButtonComponent(LoginLocators.ATLASSIAN_LOGIN_BUTTON)
		this.GoogleButton = new ButtonComponent(LoginLocators.GOOGLE_BUTTON)
		this.EmailInput = new InputComponent(LoginLocators.EMAIL_INPUT)
		this.PasswordInput = new InputComponent(LoginLocators.PASSWORD_INPUT)
		this.ContinueButton = new ButtonComponent(LoginLocators.CONTINUE_BUTTON)
		this.email = email
		this.password = password
	}

	navigateToLoginPage() {
		cy.visit('https://trello.com/')
		cy.get(this.TrelloLoginButton.locator).click()
	}

	login() {
		//cy.visit('https://trello.com/')
		//cy.get(loginButtonLocator).click()
		const emailInputSelector = this.EmailInput.locator;
        const passwordInputSelector = this.PasswordInput.locator;
		const atlassianLoginButton = this.AtlassianLoginButton.locator;
		const continueButton = this.ContinueButton.locator;

		const loginLocators = {
			"emailInputSelector": this.EmailInput.locator,
			"passwordInputSelector": this.PasswordInput.locator,
			"atlassianLoginButton": this.AtlassianLoginButton.locator,
			"continueButton": this.ContinueButton.locator	
		}
	
		const userCredentials = {
			"userEmail" : this.email,
			"userPassword" : this.password
		} 

		cy.origin('https://id.atlassian.com', { args: { loginLocators, userCredentials} }, ({ loginLocators, userCredentials}) => {

			cy.get(loginLocators.emailInputSelector).type(userCredentials.userEmail)
			cy.contains(loginLocators.continueButton).click()
			cy.get(loginLocators.passwordInputSelector).type(userCredentials.userPassword)
			cy.get(loginLocators.atlassianLoginButton).click({force: true})
		})
	}
}
