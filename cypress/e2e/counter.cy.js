describe('Counter testing', () => {
  const URL = 'http://localhost:3000/'
  const click11Times = (selector, count) => {
    cy.get(`[data-cy="${selector}"]`)
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()

    cy.get('[data-cy="count"]').should('have.text', `${count}`)
  }
  it('visit', () => {
    cy.visit(URL)
    cy.url().should('eq', URL)
  })
  it('default name', () => {
    const defaultName = 'Counter'
    cy.get('[data-cy="name"]').should('have.text', defaultName)
  })
  it('default count', () => {
    cy.get('[data-cy="count"]').should('have.text', '0')
  })
  it('increment', () => {
    click11Times('increment', 10)
  })
  it('decrement', () => {
    click11Times('decrement', 0)
  })
})
