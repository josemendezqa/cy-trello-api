import { DashboardPage } from "../pages/dashboard-page"


const dashboardPage = new DashboardPage()

describe('Dashboard Test Suite', {},

function(){
	const userCredentials = {
		'userName' : Cypress.env('credentials').userName,
		'userPassword' : Cypress.env('credentials').userPassword
	}

	it('Create a board', {}, () => {
		cy.uiLogin(userCredentials)

        const boardName = 'My Board Test Name'
        //TO DO: obtain name from fixture file

        dashboardPage.createBoard(boardName)
        //TODO: const actualBoardName = boardPage.getBoardTitle()
        //TODOexpect(actualBoardName).to.equal(boardName)

        //Delete created board by API
	})	

})