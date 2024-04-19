/// <reference types="Cypress" />

import StatusCodeValidator from '../../../helpers/status-code-validator'
import { BoardsApiHelper } from '../helpers/boards-api-helpers'
import { TestTags } from '../../../helpers/test-tags-constants'
import { OrganizationsApiHelper } from '../../organizations/helpers/organizations-api-helper'

const validator = new StatusCodeValidator()
const boardsApiHelper = new BoardsApiHelper()
const organizationsApiHelper = new OrganizationsApiHelper()

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
			organizationsApiHelper.getBoardsInOrganization().then((getResponse) => {
				validator.http200Validations(getResponse)
			})
		}
	)

	it('Should create a board', {}, () => {
		boardsApiHelper.createBoard().then((createResponse) => {
			validator.http200Validations(createResponse)
			boardsApiHelper.deleteBoardById(createResponse.body.id)
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
				.deleteBoardById(createResponse.body.id)
				.then((deleteReponse) => {
					validator.http200Validations(deleteReponse)
				})
		})
	})
})
