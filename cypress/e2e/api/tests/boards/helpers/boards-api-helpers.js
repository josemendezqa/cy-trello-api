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
