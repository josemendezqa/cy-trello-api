import { LoginLocators } from '../constants/login-ui-constants'
import { ButtonComponent } from '../../../components/button-component'
import { InputComponent } from '../../../components/input-component'

const loginButtonLocator = "[data-uuid$='_login']"

export class LoginPage {
	constructor() {
		this.LoginButton = new ButtonComponent(LoginLocators.LOGIN_BUTTON)
		this.GoogleButton = new ButtonComponent(LoginLocators.GOOGLE_BUTTON)
		this.EmailInput = new InputComponent(LoginLocators.EMAIL_INPUT)
		this.PasswordInput
	}

	navigateToLoginPage() {
		cy.visit('https://trello.com/')
		cy.get(loginButtonLocator).click()
	}

	login() {
		//cy.visit('https://trello.com/')
		//cy.get(loginButtonLocator).click()
		cy.origin('https://id.atlassian.com', () => {
			cy.get('[data-testid="username"]').type('josemendez.qaengineer@gmail.com')
			cy.contains('Continue').click()
			cy.get('[data-testid="password"]').type('123Queso!')
			cy.get('#login-submit').click({ force: true })
		})
	}
}
