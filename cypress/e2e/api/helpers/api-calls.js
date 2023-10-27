/// <reference types="Cypress" />

const baseUrl = Cypress.env('envCredentials').baseUrl

export default class ApiCalls {
	#sendRequest(requestData) {
		const urlPath = '/1'

		return cy
			.request({
				method: requestData.apiRequestType,
				url: `${baseUrl}${urlPath}/${requestData.endpoint}`,
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
}
