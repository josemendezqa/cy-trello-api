import { BoardsEndpointsConstants } from '../constants/boards-endpoints-constants'
export default class BoardEndpoints {
	getBoardById(boardId) {
		return BoardsEndpointsConstants.GET_BOARD.replace('{boardId}', boardId)
	}

	updateBoardById(boardId) {
		return BoardsEndpointsConstants.PUT_BOARD.replace('{boardId}', boardId)
	}

	deleteBoardById(boardId) {
		return BoardsEndpointsConstants.DELETE_BOARD.replace('{boardId}', boardId)
	}
}
