class ProductPage{

    constructor() {
        this.productInformation = '.product-information';
        this.addToCartButton = '.btn.btn-default.cart';
        this.cartModalText = "div[id='cartModal'] p:nth-child(2)";
        this.checkoutButton = 'a[class*="btn btn-default check_out"]';
       
    }
    verifyProductInformation() {
        cy.get(this.productInformation).should('be.visible');
    }
    addToCart() {
        cy.get(this.addToCartButton).click();
    }
    verifyCartModal() {
        cy.get(this.cartModalText).should('be.visible').click();
    }
    proceedToCheckout() {
        cy.get(this.checkoutButton).click();
    }
   
}export default ProductPage;