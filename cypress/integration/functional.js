// @ts-check
/* eslint-env mocha */
const config = require('../../cypress.json');
const url = config.baseUrl;

describe('Website functional test', () => {

  it('successfully access prod URL', () => {
    cy.visit(url);
    cy.screenshot();
  });

  it('search a game and check the iframe', () => {
    cy.visit(url);
    cy.get('#inputSearch').type('Dota 2');
    cy.wait(2000);
    cy.screenshot();
    cy.get('#dropdownGamesList').first().click();
    cy.wait(2000);
    cy.screenshot();
    cy.get('#dropdownStreamsList').first().click();
    cy.get('#iframeContainer');
    cy.wait(5000);
    cy.screenshot();
  });

});
