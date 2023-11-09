import { BoardsEndpointsConstants } from '../constants/boards-endpoints-constants'
import StatusCodeValidator from '../../../helpers/status-code-validator'

const validator = new StatusCodeValidator()

export class BoardsApiHelper {
	createBoard() {
		return cy.fixture('/api/boards/create-board.json').then((postBody) => {
			cy.postRequest(BoardsEndpointsConstants.POST_BOARD, postBody)
		})
	}

	getAllBoardsForOrganization() {
		return cy.getRequest(
			BoardsEndpointsConstants.GET_ALL_ORGANIZATION_BOARDS.replace(
				'{id}',
				'64f75a01e4f85af3806c19a1'
			)
		)
	}

	updateBoard(boardId) {
		return cy.fixture('/api/boards/update-board.json').then((putBody) => {
			cy.putRequest(`boards/${boardId}`, putBody)
		})
	}

	deleteBoard(boardId) {
		return cy
			.deleteRequest(
				BoardsEndpointsConstants.DELETE_BOARD.replace('{boardId}', boardId)
			)
			.then((deleteResponse) => {
				validator.http200Validations(deleteResponse)
			})
	}

	deleteAllBoards() {
		this.getAllBoardsForOrganization().then((allBoardsInOrganization) => {
			for (let i = 0; i < allBoardsInOrganization.body.length; i++) {
				this.deleteBoard(allBoardsInOrganization.body[i].id)
			}
		})
	}
}
