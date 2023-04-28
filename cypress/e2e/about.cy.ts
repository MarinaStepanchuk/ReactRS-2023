/// <reference types="cypress" />

describe('About page', () => {
  it('should the about page title', () => {
    cy.visit('/about');

    cy.get('h1').should('have.text', 'О нас');
  });
});
