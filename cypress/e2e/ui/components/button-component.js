import { BaseComponent } from './base-component'

export class ButtonComponent extends BaseComponent {
	constructor(locator) {
		super(locator)
		this.locator = locator
	}
}
