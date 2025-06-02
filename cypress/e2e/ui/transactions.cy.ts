describe('Transactions - UI', () => {
  const companyName = `${Date.now()}`.slice(0, 8)
  const incomeAmount = '99000'

  before(() => {
    cy.loginByApi()
    cy.visit('/home')
  })

  it('should add new Transaction', () => {
    cy.get('a.btn.addTransaction').click()
    cy.get('.add-transaction.modal').should('be.visible')
    cy.get('a[href="#income"]').click()
    cy.get('#income').should('be.visible')
    cy.get('#income-payer').type(companyName, { timeout: 100})
    cy.get('input[name="income-amount"]').type(incomeAmount)
    cy.get('select[name="account"]').should('be.visible')
    cy.get('#addTransactionSave').click()
    cy.get('#transactions').should('be.visible')
    cy.get('#transactions .payee').should('contain.text', companyName)
  })
})
