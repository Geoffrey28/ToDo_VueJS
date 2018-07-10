describe('Todo Test', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it.only('Loads todo on page load', () => {
        cy.get('.item')
            .should('have.length', 5)
    })
})