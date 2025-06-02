declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
    loginByApi(): Chainable<void>
    clickOutside(): Chainable<void>
    createEnvelope(envelopeName: string, amount: number): Chainable<void>
    validateEnvelope(envelopeName: string, amount: number): Chainable<void>
    updateEnvelope(oldName: string, newName: string, newAmount: number): Chainable<void>
  }
}
