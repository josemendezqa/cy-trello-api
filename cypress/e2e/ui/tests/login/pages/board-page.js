
import { BoardLocators } from '../constants/board-ui-constants' 
import { LabelComponent } from '../../../components/label-component'


export class BoardPage {
	constructor() {
		this.BoardTitleLabel = new LabelComponent(BoardLocators.BOARD_TITLE_LABEL)		
	}

	checkBoardTitleText(expectedText){
		this.BoardTitleLabel.containsText(expectedText)
	}
}
