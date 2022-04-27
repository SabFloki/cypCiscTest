// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import form from '../integration/pageObjects/form'
//Cypress command to fill the form
Cypress.Commands.add('fillform', (datatable) => {
    cy.waitFor('networkidle')
    datatable.hashes().forEach(element => {
        form.inputFirstName().type(element.FirstName)
        form.inputLastName().type(element.LastName)
        form.inputCompanyName().type(element.CompanyName)
        form.inputCompanyEmail().type(element.CompanyEmail)
        form.inputCompanyWebsite().type(element.CompanyWebsite)
        form.inputPhone().type(element.Phone)
        form.inputPass().type(element.Password)
        form.inputPassConfirm().type(element.Password)
        cy.wait(2000) //Not necessary
    })
})

//Cypress command to accept the captcha

Cypress.Commands.add('confirmCaptcha', function () {
    cy.get('iframe[title="reCAPTCHA"]')
        .first()
        .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').click()
            cy.wait(5000)
        })
    cy.get('iframe[title="recaptcha challenge expires in two minutes"]')
        .then((item) => {
            const temp = item.contents()
            cy.log(temp)
            cy.wrap(temp).find('[class*="button-holder help"]')
                .last()
                .click({ force: true })
            // cy.wrap(temp).find('')
            //     .shadow()
            //     .find('[id="solver-button"]')
            //     .click({ position: 'top' })
        })
    form.verifyCheckEnabled().should('be.enabled', { setTimeout: 5000 })
})


//command to handle extension
const addExtensionCommands = require('cypress-browser-extension-plugin/commands');
addExtensionCommands(Cypress);
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
