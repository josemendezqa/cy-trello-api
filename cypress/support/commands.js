import ApiCalls from "../e2e/api/helpers/api-calls"
import { loginHandler } from "./login-handler"

const apiCalls = new ApiCalls()
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('postRequest', (endpoint, body) => {
    return apiCalls.post(endpoint, body)
})
Cypress.Commands.add('getRequest', (endpoint) => {
    return apiCalls.get(endpoint)
})

Cypress.Commands.add('deleteRequest', (endpoint) => {
    return apiCalls.delete(endpoint)
})

Cypress.Commands.add('putRequest', (endpoint, body) => {
    return apiCalls.put(endpoint, body)
})

Cypress.Commands.add('uiLogin', (credentials) => {
    loginHandler(credentials)
})