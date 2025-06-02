const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    experimentalWebKitSupport: true,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://goodbudget.com'
    //chromeWebSecurity: false
  },
  screenshotOnRunFailure: true,
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cypress/reports'
  }
})
