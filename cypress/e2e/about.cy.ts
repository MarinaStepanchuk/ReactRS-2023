/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/about');
});

describe('About page', () => {
  it('should correct render the about page title', () => {
    cy.get('h1').should('have.text', 'О нас');
  });

  it('should correct render the about page description', () => {
    cy.get('[class*=about]').should(
      'includes.text',
      'MovieSearch — уникальная платформа для поиска фильмов'
    );
  });
});
