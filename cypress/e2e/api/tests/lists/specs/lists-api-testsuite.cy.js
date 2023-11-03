/// <reference types="Cypress" />

describe('Lists Test Suite', () => {
	it('Should get all lists on the board', {}, () => {
		cy.getRequest(`boards/653c3307ab3469f5dc2010f4`).then((response) => {
			console.log(response.body)
		})
	})
})
