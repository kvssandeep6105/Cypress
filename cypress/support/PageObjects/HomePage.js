
class HomePage{

    constructor() {
        this.homePageUrl = "https://www.automationexercise.com/";
        this.logoSelector = 'img[alt="Website for automation practice"]';
        this.menCategoryLink = 'a[href*="#Men"]';
        this.tshirtsLink = 'Tshirts';
        this.tshirtsTitleSelector = 'h2[class*="title text-center"]';
        this.productInfoSelector = '.productinfo.text-center';  
        this.productDetailsSelector = 'a[href="/product_details/31"]';
    }
    visitHomePage() {
        // const baseUrl =  this.homePageUrl;
        // cy.visit(baseUrl);
        cy.visit(Cypress.env('url'));
        
    }
    selectProduct() {
         cy.get(this.logoSelector).should('be.visible')
        cy.get(this.menCategoryLink).click()
        cy.contains(this.tshirtsLink).should('be.visible').click()
        cy.get(this.tshirtsTitleSelector).should('have.text', 'Men - Tshirts Products')
        cy.get(this.productInfoSelector).should('have.length', 6)
        cy.get(this.productInfoSelector).filter(':contains("Pure Cotton Neon Green Tshirt")')
            .then($product => {
                cy.wrap($product).should('have.length', 1)

            })

        // cy.contains('.productinfo.text-center', 'Pure Cotton Neon Green Tshirt')
        //     .should('exist')
        //     .within(() => {
        //         cy.contains('Add to cart').click()
        //     })
        cy.get( this.productDetailsSelector).click()
}
}export default HomePage;