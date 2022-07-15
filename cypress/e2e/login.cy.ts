/// <reference types="cypress" />

describe('Auth testing', () => {
  const URL: string = Cypress.env('URL')

  const invEmail = 'invemail@mail.ai'
  const invPassword = 'password'

  const email = 'email@mail.ai'
  const password = 'secret'

  context('Main check', () => {
    it('check url', () => {
      cy.visit('/login')
      cy.url().should('eq', URL + 'login')
    })
    it('header auth', () => {
      cy.get('h2').should('have.text', ' Sign in to your account ')
    })
    it('remember me', () => {
      cy.get('#remember-me').click()
    })
    it('forgot your password', () => {
      cy.contains('Forgot your password?')
    })
  })

  context.skip('Invalid and input validation', () => {
    it('', () => {
      cy.visit('/login')
    })
    it('input email validation', () => {
      cy.get('#email-address').type('email.ai{enter}')
      cy.get('.notify').should('be.visible')
    })
    // TODO Negative behavior
  })

  context('Valid', () => {
    it('email input', () => {
      cy.get('#email-address').type(email).should('have.value', email)
    })
    it('password input', () => {
      cy.get('#password').type(password).should('have.value', password)
    })

    it('btn sign in, route to main page', () => {
      cy.get('button').click()
      cy.url().should('eq', URL)
    })
  })
})
