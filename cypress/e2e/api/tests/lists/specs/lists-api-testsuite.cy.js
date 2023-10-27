/// <reference types="Cypress" />

const apiKey = Cypress.env('envCredentials').apiKey
const apiToken = Cypress.env('envCredentials').apiToken

describe('Board Test Suite', () => {
	it('Should get all lists on the board', {}, () => {
		cy.getRequest(
			`/boards/653c3307ab3469f5dc2010f4?key=${apiKey}&token=${apiToken}`
		).then((response) => {
			console.log(response.body)
		})
	})
})
