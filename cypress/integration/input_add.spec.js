describe('Add Form', () => {
    beforeEach( () => {
        cy.visit('/')
    })
    
    it('successfully loads', () => {

        cy.focused()
            .should('have.class', 'form-control')
    })

    it.only('accepts input', () => {

        const typedText = 'Buy Milk'
        cy.get('[placeholder="Task Name"]')
            .type(typedText)
            .should('have.value', typedText)
    })
    
    context('Form submission', () => {
        it.only('Adds a new todo on submit', () => {
            cy.get('[placeholder="Task Name"]')
                .type('Buy Milk')
            cy.get('[placeholder="Description"]')
                .type('At Monop')
                .type ('{enter}')
        })
    })
})