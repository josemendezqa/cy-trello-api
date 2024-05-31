import { BaseComponent } from './base-component';

export class LabelComponent extends BaseComponent {
  constructor(locator) {
    super(locator);
    this.locator = locator;
  }

  /**
   * Get the text of the label.
   * @returns {Cypress.Chainable<string>}
   */
  getText() {
    return cy.get(this.locator).invoke('text');
  }

  /**
   * Verify the text of the label.
   * @param {string} expectedText - The expected text to verify.
   */
  verifyText(expectedText) {
    cy.get(this.locator)
      .should('exist', "Label element doesn't exist")
      .invoke('text')
      .should('equal', expectedText, `Label text is not as expected: ${expectedText}`);
  }
  
  /**
   * Verify the label is visible.
   */
  isVisible() {
    cy.get(this.locator)
      .should('exist', "Label element doesn't exist")
      .should('be.visible', "Label element is not visible");
  }
  
  /**
   * Verify the label contains certain text.
   * @param {string} partialText - The partial text to verify.
   */
  containsText(partialText) {
    cy.get(this.locator)
      .should('exist', "Label element doesn't exist")
      .should('contain.text', partialText, `Label does not contain text: ${partialText}`);
  }

  /**
   * Get the text of the label and stringify it.
   * @returns {Cypress.Chainable<string>}
   */
  getTextAsString() {
    return this.getText().then((text) => JSON.stringify(text.trim()));
  }
}
