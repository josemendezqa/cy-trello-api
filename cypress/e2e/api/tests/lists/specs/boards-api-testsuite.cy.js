/// <reference types="Cypress" />

const apiKey = Cypress.env('envCredentials').apiKey
const apiToken = Cypress.env('envCredentials').apiToken

describe('Board Test Suite', () => {
	it('Should create a board', {}, () => {
		cy.fixture('/api/boards/create-board.json').then((postBody) => {
			postBody.apiKey = apiKey
			postBody.apiToken = apiToken
			cy.postRequest(`boards`, postBody).then((response) => {})
		})
	})

	it('Should update a board', {}, () => {
		cy.fixture('/api/boards/create-board.json').then((postBody) => {
			postBody.apiKey = apiKey
			postBody.apiToken = apiToken
			cy.postRequest(`boards`, postBody).then((response) => {
				const boardId = response.body.id
				cy.fixture('/api/boards/update-board.json').then((putBody) => {
					cy.putRequest(`boards/${boardId}`, putBody).then((putResponse) => {})
				})
			})
		})
	})

	it('Should delete a board', {}, () => {
		cy.fixture('/api/boards/create-board.json').then((postBody) => {
			cy.postRequest(`boards`, postBody).then((response) => {
				postBody.apiKey = apiKey
				postBody.apiToken = apiToken
				const boardId = response.body.id
				cy.deleteRequest(`boards/${boardId}`).then((deleteResponse) => {})
			})
		})
	})
})
