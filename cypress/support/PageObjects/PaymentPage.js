class PaymentPage{

    constructor() {
        this.paymentPageUrl = "https://www.automationexercise.com/view_cart";
       this.placeOrderButton = 'a[href="/payment"]';
       this.nameOnCardInput = "input[name='name_on_card']";
       this.cardNumberInput = "input[name='card_number']";
       this.cvcInput = "input[name='cvc']";
       this.expiryMonthInput = "input[name='expiry_month']";
       this.expiryYearInput = "input[name='expiry_year']";
       this.submitButton = '#submit';
         this.orderConfirmationMessage = '.title.text-center'; 
         this.logoutLink = 'a[href="/logout"]';
    }
    visitPaymentPage() {
        cy.visit(this.paymentPageUrl);
    }   
    fillBillingDetails() {
         
        cy.get(this.nameOnCardInput).type('Sai Sandeep')
        cy.get( this.cardNumberInput).type('1234567890123456')
        cy.get(this.cvcInput).type('123')
        cy.get( this.expiryMonthInput ).type('12')
        cy.get(this.expiryYearInput).type('2025')
        cy.get(this.submitButton).click()
        cy.wait(2000)
    }
    placeOrder() {
        cy.get(this.placeOrderButton).should('be.visible').click();
    }
    verifyOrderConfirmation() {
        cy.get(this.orderConfirmationMessage).should('contain.text', 'Order Placed!');
    }
    verifyLogout() {
        cy.get(this.logoutLink).should('be.visible').click();
        cy.url().should('include', '/login');
    }
   
}export default PaymentPage;