/// <reference types="Cypress" />

const baseUrl = Cypress.env('envCredentials').baseUrl
const apiKey = Cypress.env('envCredentials').apiKey
const apiToken = Cypress.env('envCredentials').apiToken

export default class ApiCalls {
	#sendRequest(requestData) {
		const urlPath = '/1'

		return cy
			.request({
				method: requestData.apiRequestType,
				url: `${baseUrl}${urlPath}/${requestData.endpoint}?key=${apiKey}&token=${apiToken}`,
				failOnStatusCode: false,
				body: requestData.body,
				headers: {},
			})
			.as(requestData.alias)
	}

	//https://api.trello.com/1/boards/undefined?key=7c3b5827c59ceeab864b285da53b833b&token=ATTAe4b5b5ba2c87340c1f786b04119a0167488d6a3963f70da0306b662ed8a5337bB41E964A

	get(endpoint) {
		return this.#sendRequest({
			apiRequestType: 'GET',
			endpoint: endpoint,
			body: null,
			alias: 'getReponse',
		})
	}

	post(endpoint, body) {
		return this.#sendRequest({
			apiRequestType: 'POST',
			endpoint: endpoint,
			body: body,
			alias: 'postReponse',
		})
	}

	put(endpoint, body) {
		return this.#sendRequest({
			apiRequestType: 'PUT',
			endpoint: endpoint,
			body: body,
			alias: 'putReponse',
		})
	}

	delete(endpoint) {
		return this.#sendRequest({
			apiRequestType: 'DELETE',
			endpoint: endpoint,
			body: null,
			alias: 'deleteReponse',
		})
	}
}
