class SignUpPage {

    constructor() {
        this.signUpButton = 'button[data-qa="signup-button';
        this.usernameField = 'input[placeholder="Name"]';
        this.emailField = 'input[data-qa="signup-email';
        this.passwordField = '#password';
        this.confirmPasswordField = '#confirm-password';
        this.submitButton = '#submit-sign-up';
        this.loginLink = 'a[href*="/login"]';
        this.genderRadioButton = '#id_gender1';
        this.daysDropdown = '#days';
        this.monthsDropdown = '#months';
        this.yearsDropdown = '#years';
        this.newsletterCheckbox = '#newsletter';
        this.firstNameField = '#first_name';
        this.lastNameField = '#last_name';
        this.companyField = '#company';
        this.address1Field = '#address1';
        this.address2Field = '#address2';
        this.countryDropdown = '#country';
        this.stateField = '#state';
        this.cityField = '#city';
        this.zipcodeField = '#zipcode';
        this.mobileNumberField = '#mobile_number';
        this.createAccountButton = 'button[data-qa*="create-account"]';
        this.continueButton = 'a[class*="btn btn-primary"]';
        this.accountInformationTitle ='.title.text-center:first-child'; 
        this.loginEmailField = 'input[data-qa*="login-email"]';  
        this.loginPasswordField = 'input[data-qa*="login-password"]';
        this.loginButton = 'button[data-qa*="login-button"]';

    }
    signUp(username, email) {
        cy.get(this.loginLink).click()
        cy.get(this.usernameField).type(username)
        cy.get(this.emailField).type(email)
        cy.get(this.signUpButton).click()
         
    }
    enterAccountInformationTitle(accountInfoHeader) {
        cy.get(this.accountInformationTitle).should('contain.text', accountInfoHeader)
    }
    signUpDetails() {
        cy.get(this.genderRadioButton).check().should('be.checked').and('have.value', 'Mr')
        cy.get(this.passwordField).type('saisandee888')
        cy.get(this.daysDropdown).select('22').should('have.value', '22')
        cy.get(this.monthsDropdown).select('October').should('have.value', '10')
        cy.get(this.yearsDropdown).select('1992').should('have.value', '1992')
        cy.get(this.newsletterCheckbox ).check().should('be.checked')
        cy.get(this.firstNameField).type('Sai')
        cy.get( this.lastNameField).type('Sandeep')
        cy.get( this.companyField ).type('Tech Company')
        cy.get(this.address1Field).type('123 Tech Street')
        cy.get(this.address2Field).type('Suite 456')
        cy.get( this.countryDropdown).select('United States').should('have.value', 'United States')
        cy.get(this.stateField).type('California')
        cy.get( this.cityField).type('San Francisco')
        cy.get(this.zipcodeField).type('94105')
        cy.get(this.mobileNumberField).type('1234567890')
    }
    createAccount() {
        cy.get(this.createAccountButton).click()
        cy.url().should('include', '/account_created')
        cy.get( this.continueButton).click()
    }
    login(username, password) {
        cy.get(this.loginLink).click()
        cy.get(this.loginEmailField).type(username)
        cy.get(this.loginPasswordField).type(password)
        cy.get(this.loginButton).click()
    }

}export default SignUpPage;
