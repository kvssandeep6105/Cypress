/// <reference types="Cypress" />

describe('Ecommerce Test Suite', function () {
    it('Ecommerce Test Case', function () {

        cy.visit("https://www.automationexercise.com/")
        cy.get('a[href*="/login"]').click()
        cy.get('input[placeholder="Name"]').type('saisandee888')
        cy.get('input[data-qa="signup-email"]').type('saisandee889@gmail.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#id_gender1').check().should('be.checked').and('have.value', 'Mr')
        cy.get('#password').type('saisandee888')
        cy.get('#days').select('22').should('have.value', '22')
        cy.get('#months').select('October').should('have.value', '10')
        cy.get('#years').select('1992').should('have.value', '1992')
        cy.get('#newsletter').check().should('be.checked')
        cy.get('#first_name').type('Sai')
        cy.get('#last_name').type('Sandeep')
        cy.get('#company').type('Tech Company')
        cy.get('#address1').type('123 Tech Street')
        cy.get('#address2').type('Suite 456')
        cy.get('#country').select('United States').should('have.value', 'United States')
        cy.get('#state').type('California')
        cy.get('#city').type('San Francisco')
        cy.get('#zipcode').type('94105')
        cy.get('#mobile_number').type('1234567890')
        cy.get('button[data-qa="create-account"]').click()  

    })
})  