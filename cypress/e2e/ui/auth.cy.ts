context('Authentication - UI', () => {
  it('should sign up a new user', () => {
    cy.visit('/signup')

    cy.fixture('users').then((data) => {
      const { email, password } = data.validUser
      cy.get('#new_household_email').type(email)
      cy.get('#new_household_new_password').type(password)
    })
    cy.get('#new_household_plan_0').click()
    cy.get('#signup-submit').click()
    // TODO unable to by pass captcha
  })

  it('should logs in with an existing user and signs out', () => {
    cy.visit('/login')
    cy.fixture('users').then((data) => {
      const { email, password } = data.validUser
      cy.get('#username').type(email)
      cy.get('#password').type(password)
    })
    cy.get('button[type="submit"]').click()

    // Verify login success
    cy.url().should('include', '/home')
    cy.contains("Welcome to Goodbudget! We're glad you're here.").should(
      'be.visible'
    )

    // Logout
    cy.get('.navbar-inner').contains('Logout').click()
    cy.contains('See you soon!').should('be.visible')
    cy.url().should('include', '/logout')
  })
})
