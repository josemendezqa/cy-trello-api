import { BaseComponent } from './base-component'

export class InputComponent extends BaseComponent {
	constructor(locator) {
		super(locator)
		this.locator = locator
	}

	clear() {
		cy.get(this.locator).clear()
	}

	type(text) {
		this.click()
		cy.get(this.locator)
			.should('exist', "Element doesn't exists")
			.invoke('show')
			.should('be.visible', 'Element is not visible')
			.clear()
			.should('be.empty', 'Input not empty after clear operation')
			.type(text, {
				force: true,
				retries: 2,
			})
			.should('have.value', text)
	}
}
