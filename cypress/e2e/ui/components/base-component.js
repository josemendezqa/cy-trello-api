export class BaseComponent {
	constructor(locator) {
		this.locator = locator
	}

	locator() {
		return this.locator
	}

	click() {
		cy.get(this.locator)
			.should('have.length', 1)
			.should('exist')
			.invoke('show')
			.should('be.visible')
			.click(
				{
					force: true,
				},
				{
					retries: 2,
				}
			)
	}

	scroll() {
		cy.get(this.locator).should('have.length', 1).scrollIntoView({
			force: true,
		})
		return this
	}

	isDisplayed() {
		cy.get(this.locator)
			.scrollIntoView({
				force: true,
			})
			.should('be.visible')
	}

	isDisabled() {
		cy.get(this.locator).should('have.class', 'disabled')
	}

	isEnabled() {
		cy.get(this.locator).should('not.have.class', 'disabled')
	}
}
