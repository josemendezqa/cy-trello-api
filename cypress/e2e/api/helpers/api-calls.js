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
