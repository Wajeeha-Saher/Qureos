describe ('login' ,function () {

    it('Login with correct credentials', function () {
    //visit the page
    cy.visit(Cypress.env('qureos_url')) 
    cy.wait(1000)
    //type email id
    cy.get('[type = email]').type(Cypress.env('Valid_login_email'))
    //type password
    cy.get('[type = password').type(Cypress.env('Valid_password'))
    //Click login button
    cy.get('button').contains('Login').click()
    cy.wait(3000)
    //verify page
    cy.url().should('contain','https://app.qureos.com/home')
    })


    it('Login with incorrect credentials', function () {
        //visit the page
        cy.visit(Cypress.env('qureos_url')) 
        cy.wait(1000)
        //type email id
        cy.get('[type = email]').type(Cypress.env('Valid_login_email'))
        //type password
        cy.get('[type = password').type(Cypress.env('invalid_password'))
        //Click login button
        cy.get('button').contains('Login').click()
        cy.wait(1000)
        //verify message
        cy.get('div.ant-message-error').should('contain', 'Invalid password')
        //verify page
        cy.url().should('contain','https://app.qureos.com')
        })
})