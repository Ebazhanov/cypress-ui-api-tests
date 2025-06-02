// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { buildPayload } from './utils/envelopeUtils'
import { formatCookiesAsHeader } from './utils/cookieUtils'

Cypress.on('uncaught:exception', () => {
  return false
})

Cypress.Commands.add('loginByApi', (userKey = 'validUser') => {
  cy.fixture('users').then((users) => {
    const user = users[userKey]

    cy.request({
      method: 'POST',
      url: '/login_check',
      form: true,
      body: {
        _username: user.email,
        _password: user.password,
        _remember_me: 'on'
      },
      followRedirect: false
    }).then((response) => {
      expect(
        response.status,
        'Login by API should redirect to Home page with'
      ).to.eq(302)
    })
  })
})

Cypress.Commands.add(
  'createEnvelope',
  (envelopeName: string, amount: number) => {
    cy.getCookies().then((cookies) => {
      const cookieHeader = formatCookiesAsHeader(cookies)

      const payload = buildPayload([
        {
          Uuid: '',
          FullName: envelopeName,
          Amount: amount.toFixed(2),
          Period: 'MON',
          PeriodExtra: '1',
          EnvelopeType: 'ENV_REG'
        }
      ])

      cy.request({
        method: 'POST',
        url: '/envelope/save',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          cookie: cookieHeader
        },
        body: payload.toString()
      })
    })
  }
)

// ─────────────────────────────────────────────────────────────
// Verify that an envelope already exists in /buckets-api/household
// ─────────────────────────────────────────────────────────────
Cypress.Commands.add(
  'validateEnvelope',
  (envelopeName: string, amount: number) => {
    cy.getCookies().then((cookies) => {
      const cookieHeader = formatCookiesAsHeader(cookies)

      cy.request({
        method: 'GET',
        url: '/buckets-api/household',
        headers: {
          cookie: cookieHeader          // remove if not needed
        }
      }).then((resp) => {
        expect(resp.status, 'status code').to.eq(200)

        const envelopes = resp.body.envelopes || []
        const found = envelopes.find((env: any) => env.name === envelopeName)

        expect(
          found,
          `Envelope '${envelopeName}' should exist`
        ).to.not.be.undefined

        expect(parseFloat(found.amount)).to.eq(amount)

        expect(found).to.include({
          name: envelopeName,
          currentAmount: '0.00',
          amount: amount.toFixed(2),
          envelopeType: 'ENV_REG',
          period: 'MON',
          periodExtra: '1',
          nextDueDate: ''
        })
      })
    })
  }
)

// ─────────────────────────────────────────────────────────────
// Update Envelope
// ─────────────────────────────────────────────────────────────
Cypress.Commands.add(
  'updateEnvelope',
  (oldName: string, newName: string, newAmount: number) => {
    cy.getCookies().then((cookies) => {
      const cookieHeader = formatCookiesAsHeader(cookies);

      // 1) Get current envelopes
      cy.request({
        method: 'GET',
        url: '/buckets-api/household',
        headers: {
          Cookie: cookieHeader,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);

        const allEnvelopes = resp.body.envelopes || [];
        const envReg = allEnvelopes.filter((env: any) => env.envelopeType === 'ENV_REG');

        const updatedEnvReg = envReg.map((env: any) => ({
          Uuid: env.uuid,
          FullName: env.name === oldName ? newName : env.name,
          Amount: env.name === oldName ? newAmount.toFixed(2) : parseFloat(env.amount).toFixed(2),
          Period: env.period,
          PeriodExtra: env.periodExtra,
          EnvelopeType: env.envelopeType,
        }));

        const payload = buildPayload(updatedEnvReg);

        cy.request({
          method: 'POST',
          url: '/envelope/save',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: cookieHeader,
          },
          body: payload.toString(),
        }).then((postResp) => {
          expect(postResp.status).to.eq(200);
        });
      });
    });
  }
);

