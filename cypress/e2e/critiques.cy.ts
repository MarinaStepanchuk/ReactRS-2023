/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/critiques');
});

describe('Critiques page', () => {
  it('should correct render the critiques page title', () => {
    cy.get('h1').should('have.text', 'Рецензии');
  });

  it('should correct render the critiques page description', () => {
    cy.get('h2').should('includes.text', 'Здесь вы можете оставить свой отзыв');
  });

  it('should show errors with incorrect values in the inputs', () => {
    cy.get('#name').type('123');
    cy.get('form').submit();
    cy.get('[data-testid="errorMessage"]').should('be.visible');
  });

  it('should submit form with valid values and save cards when switching between pages', () => {
    cy.get('#name').type('Marina Stepanchuk');
    cy.get('#country').select('Belgium');
    cy.get('#photo').selectFile({
      fileName: 'person.png',
      contents: ['photo'],
    });
    cy.get('#movie').type('The Banshees of Inisherin');
    cy.get('#date').type('2023-01-10');
    cy.get('#review').type('Is a good movie');
    cy.get('[type="radio"]').first().check();
    cy.get('#personal').check();

    cy.get('form').submit();
    cy.wait(1000);

    cy.get('[data-cy="critique-movie"]').should('have.text', 'The Banshees of Inisherin');

    cy.get('a[href="/about"]').click();
    cy.get('a[href="/critiques"]').click();
    cy.get('[data-cy="critique-movie"]').should('have.text', 'The Banshees of Inisherin');
  });
});
