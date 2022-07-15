/// <reference types="cypress" />

describe('Api testing', () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  it('first test', () => {
    cy.request(url).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
})
// TODO Api testing login
