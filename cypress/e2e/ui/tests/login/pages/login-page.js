import { LoginLocators } from '../constants/login-ui-constants'
import { ButtonComponent } from '../../../components/button-component'
import { InputComponent } from '../../../components/input-component'
import { getDevEmail, getDevPassword } from '../../../../../../config/environment-handler';

const loginButtonLocator = "[data-uuid$='_login']"

export class LoginPage {
	constructor(email = getDevEmail(), password = getDevPassword()) {
		this.LoginButton = new ButtonComponent(LoginLocators.LOGIN_BUTTON)
		this.GoogleButton = new ButtonComponent(LoginLocators.GOOGLE_BUTTON)
		this.EmailInput = new InputComponent(LoginLocators.EMAIL_INPUT)
		this.PasswordInput = new InputComponent(LoginLocators.PASSWORD_INPUT)
		this.email = email
		this.password = password
	}

	navigateToLoginPage() {
		cy.visit('https://trello.com/')
		cy.get(loginButtonLocator).click()
	}

	login() {
		//cy.visit('https://trello.com/')
		//cy.get(loginButtonLocator).click()
		const emailInputSelector = this.EmailInput.locator;
        const passwordInputSelector = this.PasswordInput.locator;
		const userEmail = this.email
		const userPassword = this.password

		const userCredentials = {
			"userEmail" : this.email,
			"userPassword" : this.password
		} 

		cy.origin('https://id.atlassian.com', { args: { emailInputSelector, passwordInputSelector, userCredentials} }, ({ emailInputSelector, passwordInputSelector, userCredentials}) => {

			cy.get(emailInputSelector).type(userCredentials.userEmail)
			cy.contains('Continue').click()
			cy.get(passwordInputSelector).type(userCredentials.userPassword)
			cy.get('#login-submit').click({force: true})
				})
	}
}
