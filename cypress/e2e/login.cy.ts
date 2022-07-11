/// <reference types="cypress" />

describe('Auth testing', () => {
  const URL: string = Cypress.env('URL')
  it('check url', () => {
    cy.visit('/login')
    cy.url().should('eq', URL + 'login')
  })
  it('header auth', () => {
    cy.get('h2').should('have.text', ' Sign in to your account ')
  })
  it('email input', () => {
    cy.get('#email-address')
  })
  it('password input', () => {
    cy.get('#password')
  })
  it('remember me', () => {
    cy.get('#remember-me')
  })
  it('forgot your password', () => {
    cy.contains('Forgot your password?')
  })
  it('btn sign in', () => {
    cy.get('button')
  })
})
