import './commands';
import '@cypress/code-coverage/support';

afterEach(() => {
  cy.window().trigger('unload');
});
