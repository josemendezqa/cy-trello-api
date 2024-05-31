import { DashboardPage } from "../pages/dashboard-page"
import { BoardsApiHelper } from "../../../../api/tests/boards/helpers/boards-api-helpers"
import { BoardPage } from "../pages/board-page"
import createBoardData from '../../../../../fixtures/ui/boards/board-create.json'



const dashboardPage = new DashboardPage()
const boardsApiHelper = new BoardsApiHelper()
const boardPage = new BoardPage()

describe('Dashboard Test Suite', {},

function(){
	const userCredentials = {
		'userName' : Cypress.env('credentials').userName,
		'userPassword' : Cypress.env('credentials').userPassword
	}

	this.beforeEach(()=>{
		cy.uiLogin(userCredentials)
		boardsApiHelper.deleteAllBoards()
	})

	it('Create a board', {}, () => {
			const boardName = createBoardData.name
			dashboardPage.createBoard(boardName)
			boardPage.checkBoardTitleText(boardName)		
	})	

})