/// <reference types="cypress" />

import HomePage from '../../support/PageObjects/HomePage'
import SignUpPage from '../../support/PageObjects/SignUpPage'
import ProductPage from '../../support/PageObjects/ProductPage'
import PaymentPage from '../../support/PageObjects/PaymentPage'



//homepage = new HomePage()
//loginpage = new LoginPage()
//this.signupPage = new SignUpPage()   
describe('Ecommerce Test Suite', function () {
    before(function () {
        this.signupPage = new SignUpPage()
        this.homePage = new HomePage()
        this.productPage = new ProductPage()
        this.paymentPage = new PaymentPage()
        
    })
    it('Ecommerce Test Case', function () {
        this.signupPage = new SignUpPage()
        // const baseUrl = 'https://www.automationexercise.com/'; ;
        // cy.visit(baseUrl)
        cy.visit(Cypress.env('url'))
        this.signupPage.signUp()
        this.signupPage.signUpDetails()
        this.signupPage.createAccount()
        cy.wait(2000) // Wait for the page to load after account creation
        // this.homePage.visitHomePage()
        this.homePage.selectProduct()
        this.productPage.verifyProductInformation()
        this.productPage.addToCart()
        cy.wait(1000)
        this.productPage.verifyCartModal()
        this.productPage.proceedToCheckout()
        //this.paymentPage.visitPaymentPage()
        this.paymentPage.placeOrder()
        // Fill in payment details
        cy.wait(1000)
        this.paymentPage.fillBillingDetails()
        // Verify order confirmation
        this.paymentPage.verifyOrderConfirmation()
        // Logout       
        this.paymentPage.verifyLogout()

    })
})  