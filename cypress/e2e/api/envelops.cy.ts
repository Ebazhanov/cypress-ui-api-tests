describe('Envelopes - API', () => {
  const envelopeName = `Heizung ${Date.now()}`
  const newEnvelopeName = `New_Heizung ${Date.now()}`
  const initialAmount = 123
  const editedAmount = 999

  beforeEach(() => {
    cy.loginByApi()
  })

  it('should verify creating Envelope', () => {
    cy.createEnvelope(envelopeName, initialAmount)
    cy.validateEnvelope(envelopeName, initialAmount)
  })

  it('should update Envelope value', () => {
    cy.updateEnvelope(envelopeName, newEnvelopeName, editedAmount)
    cy.validateEnvelope(newEnvelopeName, editedAmount)
  })
})
