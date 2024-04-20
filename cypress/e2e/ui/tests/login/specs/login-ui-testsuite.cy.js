import { LoginPage } from '../pages/login-page'

const loginPage = new LoginPage()

describe('Login Test Suite', {}, () => {
	it('Log in to Trello', {}, () => {
		//cy.visit('https://trello.com/')

		//Atlassian page navigation
		loginPage.navigateToLoginPage()
		loginPage.login()
	})
})
