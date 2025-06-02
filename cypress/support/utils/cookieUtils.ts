/**
 * Converts an array of Cypress cookies into a string suitable for use
 * as an HTTP `Cookie` header.
 *
 * Example output: "session=abc123; theme=dark"
 *
 * @param cookies - An array of Cypress.Cookie objects
 * @returns A formatted string for the Cookie header
 */
export const formatCookiesAsHeader = (cookies: Cypress.Cookie[] = []): string =>
  cookies
    .filter((cookie) => cookie.name && cookie.value)
    .map(({ name, value }) => `${name}=${value}`)
    .join('; ')
