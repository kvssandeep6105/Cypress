/// <reference types="Cypress" />

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el.find('button')).click()
            }
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())

        })
        cy.get('.cart-icon > img').click()

        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('.promoCode').type('rahulshettyacademy')
        cy.get('.promoBtn').click()
        cy.wait(2000)


        //cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
        cy.contains('Place Order').click()
        //cy.get('.button').contains('Place Order').click()





        //fixture

    })



})