import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../../../support/PageObjects/SignUpPage";
import HomePage from "../../../../support/PageObjects/HomePage";
import ProductPage from "../../../../support/PageObjects/ProductPage";
import PaymentPage from "../../../../support/PageObjects/PaymentPage";
const homePage = new HomePage();
const signUpPage = new SignUpPage();
const productPage = new ProductPage();
const paymentPage = new PaymentPage();  


Given('I am on the signup page', () => {
  cy.visit(Cypress.env('url'))
})

When('I enter a new {string} and {string}', (username, email)  => {
    signUpPage.signUp(username, email);
})

Then('I should see the {string} page', (accountInfoHeader) => {
  signUpPage.enterAccountInformationTitle(accountInfoHeader);
  
})

When('I Need to enter the account information', (dataTable) => {
  signUpPage.signUpDetails(dataTable);
  signUpPage.createAccount();
  
})

When('I enter a valid {string} and {string}', (username, password) => {
  signUpPage.login(username, password);
})

When('I add a {string} to the cart',  (product) => {

        homePage.selectProduct(product)
        productPage.verifyProductInformation()
        productPage.addToCart()
}) 

Then('I should see the popup {string}', (message) => {
   productPage.verifyCartConfirmatinMessage(message)

})
When('I proceed to the cart',  () => {
    productPage.verifyCartModal();
    
})

Then('I should see the {string} in the cart', (product) => {
    productPage.verifyProductInCart(product);

})

When('I proceed to checkout', () => {
    productPage.proceedToCheckout();
})

When('I place the order', () => {
    paymentPage.placeOrder();

})

When('I enter the payment details',  (dataTable) =>{
paymentPage.fillBillingDetails(dataTable);
}) 

When('I confirm the order', () => {
    paymentPage.payAndSubmitOrder();
})
Then('I should see the order confirmation page {string}', (confirmationMessage) => {
    paymentPage.verifyOrderConfirmation(confirmationMessage);
})