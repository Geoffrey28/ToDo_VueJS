describe('Test RouterVue', () => {
    beforeEach( () => {
        cy.visit('/')
    })

    it('Test Do link', () => {
        cy.get('[href="#/Do"]')
            .click()
            cy.get('.item')
            .should('have.length', 2)
            cy.get('.item')
                    .first()
                    .find('.destroy')
                    .click()
                        cy.get('.item')
                        .should('have.length', 1)
    })

    it('Test Todo link', () => {
        cy.get('[href="#/Todo"]')
            .click()
            cy.get('.item')
                .should('have.length', 3)
                cy.get('.item')
                    .first()
                    .find('.destroy')
                    .click()
                        cy.get('.item')
                        .should('have.length', 2)
    })

    it('Test All link', () => {
        cy.get('[href="#/"]')
            .click()
            cy.get('.item')
            .should('have.length', 5)
    })
})