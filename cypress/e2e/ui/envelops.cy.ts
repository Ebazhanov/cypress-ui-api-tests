describe('Envelopes - UI', () => {
  const envelopeName = `Wasser ${Date.now()}`
  const initialAmount = '123'
  const editedAmount = '199'

  beforeEach(() => {
    cy.loginByApi()
    cy.visit('/home')
  })

  it('should add new Envelope', () => {
    cy.get('#wrapper-envelopes').contains('Add / Edit').click()
    cy.get('.env-row .name').eq(0).should('be.visible')
    cy.get('envelope-list .btn-add').click()
    cy.get('.row-name input').last().click().clear().type(envelopeName)
    cy.get('.cell-content .amount').last().clear().type(initialAmount).blur()
    cy.get('.row-name input').last().should('have.value', envelopeName)
    cy.get('.cell-content .amount').last().last().should('have.value', initialAmount)
    cy.get('#save-envelopes-btn').click()
    cy.contains('New Envelopes Created!').should('be.visible')
    cy.get('#fillEnvelopesModalNo').click()
    cy.contains('New Envelopes Created!').should('not.be.visible')
    cy.get('.wrapper-item .env-left').should('contain.text', envelopeName)
  })

  it('should edit budget amount', () => {
    cy.get('#wrapper-envelopes').contains('Add / Edit').click()
    cy.get('.cell-content .amount').should('be.visible')
    cy.get('.cell-content .amount').last().clear().type(editedAmount)
    cy.get('.cell-content .amount').last().should('have.value', editedAmount)
    cy.get('#save-envelopes-btn').click()
    cy.get('.wrapper-item .right').should('contain.text', editedAmount)
  })

  it('should delete budget', () => {
    cy.get('#wrapper-envelopes').contains('Add / Edit').click()
    cy.get('.envelope-list .btn-remove i').last().click()
    cy.get('#save-envelopes-btn').click()
    cy.get('.wrapper-item .env-left').last().should('be.visible')
    cy.get('.env-left').contains(envelopeName).should('not.exist')
  })
})
