import { LoginLocators } from '../constants/login-ui-constants'
import { ButtonComponent } from '../../../components/button-component'
import { InputComponent } from '../../../components/input-component'
import { DashboardLocators } from '../constants/dashboard-ui-constants'


export class DashboardPage {
	constructor() {
		this.CreateButton = new ButtonComponent(DashboardLocators.CREATE_BUTTON)
		this.CreateBoardButton = new ButtonComponent(DashboardLocators.CREATE_BOARD_BUTTON)
        this.BoardTitleInput = new InputComponent(DashboardLocators.BOARD_TITLE_INPUT)
        this.SubmitCreateBoardButton = new ButtonComponent(DashboardLocators.SUBMIT_CREATE_BOARD_BUTTON)
	}

	createBoard(boardName){
		this.CreateButton.click()
        this.CreateBoardButton.click()
        this.BoardTitleInput.type(boardName)
        this.SubmitCreateBoardButton.click()
	}
}
