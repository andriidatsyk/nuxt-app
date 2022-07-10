/// <reference types="cypress" />

describe('Auth testing', () => {
  const URL: string = Cypress.env('URL')
  it('check url', () => {
    cy.visit('/login')
    cy.url().should('eq', URL + 'login')
  })
})
