// import { BoardsEndpointsConstants } from '../constants/boards-endpoints-constants'
// import StatusCodeValidator from '../../../helpers/status-code-validator'

// const validator = new StatusCodeValidator()

// export class BoardsApiHelper {
// 	createBoard() {
// 		return cy.fixture('/api/boards/create-board.json').then((postBody) => {
// 			cy.postRequest(BoardsEndpointsConstants.POST_BOARD, postBody)
// 		})
// 	}

// 	getAllBoardsForOrganization() {
// 		return cy.getRequest(
// 			BoardsEndpointsConstants.GET_ALL_ORGANIZATION_BOARDS.replace(
// 				'{id}',
// 				'64f75a01e4f85af3806c19a1'
// 			)
// 		)
// 	}

// 	updateBoard(boardId) {
// 		return cy.fixture('/api/boards/update-board.json').then((putBody) => {
// 			cy.putRequest(`boards/${boardId}`, putBody)
// 		})
// 	}

// 	getBoardById(boardId) {
// 		const endpoint = boardsEndpoints.getBoardById(boardId)

// 		return cy.getRequest(endpoint).as('getBoardById')
// 	}

// 	deleteBoard(boardId) {
// 		return cy
// 			.deleteRequest(
// 				BoardsEndpointsConstants.DELETE_BOARD.replace('{boardId}', boardId)
// 			)
// 			.then((deleteResponse) => {})
// 	}

// 	deleteAllBoards() {
// 		this.getAllBoardsForOrganization().then((allBoardsInOrganization) => {
// 			for (let i = 0; i < allBoardsInOrganization.body.length; i++) {
// 				this.deleteBoard(allBoardsInOrganization.body[i].id)
// 			}
// 		})
// 	}
// }

import createBoardRequestBody from '../../../../../fixtures/api/boards/requestsBody/board-create-body.json'
import updateBoardRequestBody from '../../../../../fixtures/api/boards/requestsBody/board-update-body.json'
import { BoardsEndpointsConstants } from '../constants/boards-endpoints-constants'
import BoardsEndpoints from '../endpoints/boards-endpoints'
import { OrganizationsApiHelper } from '../../organizations/helpers/organizations-api-helper'

const boardsEndpoints = new BoardsEndpoints()
const organizationsApiHelper = new OrganizationsApiHelper()

export class BoardsApiHelper {
	createBoard() {
		const requestBody = createBoardRequestBody
		return cy
			.postRequest(BoardsEndpointsConstants.POST_BOARD, requestBody)
			.as('createBoard')
	}

	updateBoard(boardId) {
		const requestBody = updateBoardRequestBody

		const endpoint = boardsEndpoints.updateBoardById(boardId)

		return cy.putRequest(endpoint, requestBody).as('updateBoard')
	}

	getBoardById(boardId) {
		const endpoint = boardsEndpoints.getBoardById(boardId)

		return cy.getRequest(endpoint).as('getBoardById')
	}

	deleteBoardById(boardId) {
		const endpoint = boardsEndpoints.deleteBoardById(boardId)

		return cy.deleteRequest(endpoint).as('deleteBoardById')
	}

	deleteAllBoards() {
		organizationsApiHelper
			.getBoardsInOrganization()
			.then((allBoardsInOrganization) => {
				for (let i = 0; i < allBoardsInOrganization.body.length; i++) {
					this.deleteBoardById(allBoardsInOrganization.body[i].id)
				}
			})
	}
}
