/// <reference types="cypress" />

describe('Main page', () => {
  it('should the about page title', () => {
    cy.visit('/about');

    cy.get('h1').should('have.text', 'О нас');
  });
});
