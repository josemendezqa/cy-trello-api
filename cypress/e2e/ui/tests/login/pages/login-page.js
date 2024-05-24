import { LoginLocators } from '../constants/login-ui-constants'
import { ButtonComponent } from '../../../components/button-component'
import { InputComponent } from '../../../components/input-component'

const loginButtonLocator = "[data-uuid$='_login']"

export class LoginPage {
	constructor() {
		this.LoginButton = new ButtonComponent(LoginLocators.LOGIN_BUTTON)
		this.GoogleButton = new ButtonComponent(LoginLocators.GOOGLE_BUTTON)
		this.EmailInput = new InputComponent(LoginLocators.EMAIL_INPUT)
		this.PasswordInput = new InputComponent(LoginLocators.PASSWORD_INPUT)
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

		console.log(emailInputSelector);
		console.log(passwordInputSelector);

		cy.origin('https://id.atlassian.com', { args: { emailInputSelector, passwordInputSelector } }, ({ emailInputSelector, passwordInputSelector }) => {
			cy.get(emailInputSelector).type('josemendez.qaengineer@gmail.com')
			cy.contains('Continue').click()
			cy.get(passwordInputSelector).type('123Queso!')
			cy.get('#login-submit').click({ force: true })
		})
	}
}
