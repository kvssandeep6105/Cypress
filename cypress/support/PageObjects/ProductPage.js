class ProductPage{

    constructor() {
        this.productInformation = '.product-information';
        this.addToCartButton = '.btn.btn-default.cart';
        this.cartConfirmation = "div[id='cartModal'] p:nth-child(1)";
        this.cartModalText = "div[id='cartModal'] p:nth-child(2)";
        this.checkoutButton = 'a[class*="btn btn-default check_out"]';
        this.productConfirmation = "a[href*='/product_details/31']";
       
    }
    verifyProductInformation() {
        cy.get(this.productInformation).should('be.visible');
    }
    addToCart() {
        cy.get(this.addToCartButton).click();
    }
    verifyCartConfirmatinMessage(message) {
        cy.get(this.cartConfirmation).should('contain.text', message);
    }
    verifyCartModal() {
        cy.get(this.cartModalText).should('be.visible').click();
    }
    verifyProductInCart(product) {
        cy.get(this.productConfirmation).should('contain.text', product);
    }
    proceedToCheckout() {
        cy.get(this.checkoutButton).click();
    }
   
}export default ProductPage;