class form {
    formTitle() {
        return cy.title()
    }
    inputFirstName() {
        return cy.get('input[name="first_name"]')
    }
    inputLastName() {
        return cy.get('input[name="last_name"]')
    }
    inputCompanyName() {
        return cy.get('input[name="company_name"]')
    }
    inputCompanyWebsite() {
        return cy.get('input[name="company_website"]')
    }
    inputCompanyEmail() {
        return cy.get('input[name="email"]')
    }
    inputPhone() {
        return cy.get('input[name="phone"]')
    }
    inputPass() {
        return cy.get('input[name="password"]')
    }
    inputPassConfirm() {
        return cy.get('input[name="password_confirmation"]')
    }
    inputCheckBox() {
        return cy.get('.recaptcha-checkbox-checkmark')
    }
    verifyCheckEnabled() {
        return cy.xpath(`//*[contains(@class,'recaptcha-checkbox-checkmark')]`)
    }
    tapCreateAccount() {
        return cy.get('button[type="submit"]')
    }

}
module.exports = new form()