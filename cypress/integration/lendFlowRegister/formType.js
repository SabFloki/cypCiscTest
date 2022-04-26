import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import form from '../pageObjects/form';
import { navigate } from '../util'

Given('the LendFlow registration website is launched', () => {
    navigate('register')
});

And('the LendFlow title is displayed', () => {
    form.formTitle().should('contain', 'Lendflow')
})

And('provide all details to sign up the account', (datatable) => {
    cy.fillform(datatable)
})

And('accept the captcha', () => {
    cy.confirmCaptcha()
})

And('recheck the password', (datatable) => {
    datatable.hashes().forEach(element => {
        form.inputPassConfirm().type(element.Password)
    })
})

Then('tap the Create Account', () => {
    form.tapCreateAccount().should('not.be.disabled', { setTimeout: 3000 }).click()
})