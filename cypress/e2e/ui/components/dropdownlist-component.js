import { BaseComponent } from './base-component'

export class DropdownlistComponent extends BaseComponent {
	constructor(locator) {
		super(locator)
		this.locator = locator
	}

	select(text) {
		cy.get(this.locator).should('exist').should('be.visible').click({
			force: true,
			invoke: true,
		})

		cy.get('[data-qa-tag="locator"]')
			.should('exist')
			.should('be.visible')
			.contains(text)
			.click({
				force: true,
			})
	}
}
