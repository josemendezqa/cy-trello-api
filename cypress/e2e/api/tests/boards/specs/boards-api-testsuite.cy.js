/// <reference types="Cypress" />

import StatusCodeValidator from '../../../helpers/status-code-validator'
import { BoardsApiHelper } from '../helpers/boards-api-helpers'
import { TestTags } from '../../../helpers/test-tags-constants'

const validator = new StatusCodeValidator()
const boardsApiHelper = new BoardsApiHelper()

describe('Board Test Suite', () => {
	afterEach(() => {
		boardsApiHelper.deleteAllBoards()
	})

	it(
		'Get all boards',
		{
			tags: [TestTags.BOARDS],
		},
		() => {
			boardsApiHelper.getAllBoardsForOrganization().then((getResponse) => {
				validator.http200Validations(getResponse)
			})
		}
	)

	it('Should create a board', {}, () => {
		boardsApiHelper.createBoard().then((postResponse) => {
			validator.http200Validations(postResponse)
		})
	})

	it('Should update a board', {}, () => {
		boardsApiHelper.createBoard().then((createResponse) => {
			boardsApiHelper
				.updateBoard(createResponse.body.id)
				.then((updateReponse) => {
					validator.http200Validations(updateReponse)
				})
		})
	})

	it('Should delete a board', {}, () => {
		boardsApiHelper.createBoard().then((createResponse) => {
			boardsApiHelper
				.deleteBoard(createResponse.body.id)
				.then((deleteReponse) => {
					validator.http200Validations(deleteReponse)
				})
		})
	})
})
