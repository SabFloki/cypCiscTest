export function navigate(url) {
    cy.visit(url)
}

export function press(element) {
    cy.get(element, { timeout: 10000 }).should('be.visible').click()
}

export function enter(element, text) {
    cy.get(element).type(text, { enter })
}