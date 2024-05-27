import { LoginPage } from '../pages/login-page'


const loginPage = new LoginPage()

describe('Login Test Suite', {},

function(){
	const userCredentials = {
		'userName' : Cypress.env('credentials').userName,
		'userPassword' : Cypress.env('credentials').userPassword
	}
	console.log(userCredentials)

	xit('Log in to Trello', {}, () => {		
		loginPage.login()
		cy.url().should('include', '/boards')
	})

	it('Log in to Trello using cy command', {}, () => {
		cy.uiLogin(userCredentials)
		cy.url().should('include', '/boards')

	})	

})
