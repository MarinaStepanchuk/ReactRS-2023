beforeEach(() => {
  cy.visit('/');
});

describe('Main page', () => {
  it('should show preloader by clicking on the card', () => {
    cy.get('[data-cy="preloader"]').should('be.visible');
  });

  it('should the main page title', () => {
    cy.get('h1').should('have.text', 'Главная');
  });

  it('should the main page description', () => {
    cy.get('[class*=greeting]').should('includes.text', 'Введите фильм, который вы ищете');
  });

  it('should the navigation list', () => {
    cy.get('nav > ul > li > a').first().should('have.text', 'Главная');
    cy.get('nav > ul > li > a').last().should('have.text', 'Рецензии');
  });

  it('should save input text', () => {
    cy.get('[data-cy="input-main"]').type('123{enter}');
    cy.get('a[href="/about"]').click();
    cy.get('a[href="/"]').click();
    cy.get('[data-cy="input-main"]').should('have.value', '123');
  });

  it('should get 10 cards default', () => {
    cy.get('[data-cy="movie-card"]').should('have.length', 10);
  });

  it('should show a message when an incorrect request is made', () => {
    cy.get('[data-cy="input-main"]').type('grgrhrgewgrrgeg{enter}');
    cy.wait(2000);
    cy.get('[data-cy="alert-message"]').should(
      'have.text',
      'Не найдено данных, соответствующих запросу'
    );
  });

  it('should show a message when an incorrect request is made', () => {
    cy.get('[data-cy="input-main"]').type('11:14');
    cy.get('form').submit();
    cy.wait(2000);
    cy.get('[class*=title]').should('have.text', '11:14');
  });
});

describe('Modal card', () => {
  it('should show preloader by clicking on the card', () => {
    cy.get('[data-cy="movie-card"]').first().click();
    cy.get('[data-cy="preloader"]').should('be.visible');
    cy.get('[data-cy="modal-close-button"]').click();
  });

  it('should open modal card', () => {
    cy.get('[data-cy="movie-card"]').first().click();
    cy.wait(1000);
    cy.get('[data-cy="modal-movie"]').should('be.visible');
    cy.get('[data-cy="modal-close-button"]').click();
  });

  it('should correct render first card', () => {
    cy.get('[data-cy="movie-card"]').first().click();
    cy.wait(1000);
    cy.get('[class*=description]').should(
      'includes.text',
      'Пострадав в результате несчастного случая, богатый аристократ'
    );
    cy.get('[data-cy="modal-close-button"]').click();
  });

  it('should close modal window by clicking on close button ', () => {
    cy.get('[data-cy="movie-card"]').last().click();
    cy.wait(1000);
    cy.get('[data-cy="modal-close-button"]').click();
    cy.get('[data-cy="modal-movie"]').should('not.exist');
  });

  it('should close the modal window by clicking on the shade', () => {
    cy.get('[data-cy="movie-card"]').first().click();
    cy.wait(1000);
    cy.get('[data-cy="modal-wrapper"]').click({ force: true });
    cy.get('[data-cy="modal-movie"]').should('not.exist');
  });
});
