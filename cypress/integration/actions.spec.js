describe('Test Do checkbox & delete button', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Delete todo with click on button', () => {
        cy.get('.item')
            .first()
            .find('.destroy')
            .click()
            cy.get('.item')
            .should('have.length', 4)
    })

    it('Task done', () => {
        cy.get('.item')
            .last()
            .find('.check')
            .click()
    })
})