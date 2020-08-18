describe('user can create a contact', () => {
    it ('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Emi')
        cy.get('#email').type('thomas@craft.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('@thomasochman')
        cy.get('#submit').click()
    })
    it ('displays a name of the new contact', () => {
        cy.get('#contact-list').should('contain', 'Emi')
    })
    it ('displays the phone number of the new contact', () => {
        cy.get('#contact-list').should('contain', '0700 101010')
    })
})









// lo ultimo que hice fue hacer que mi 
// default branch sea master y master está
// igual que project_setup
// tendria que crear una branch para esta
// feature, hacer el proximo paso en el 
// proyecto y pushear a esta nueva rama
// luego probar a hacer un pull request
// hacia master y ver si me queda todo bien
// y asi seguir trabajando en la feature branch
// para hacer pull request to master al final
// tal como hicimos en el proy. anterior


// ACABO DE HACER todo eso y me funcionó
// seguir con el projecto y pushear a esta
// nueva br

// PROBAR UN PULL REQUEST antes de seguir

// bueno, todo lo de arriba me funcionó así que ahora 
// tiro un ci más antes de arrancar, va a la feature branch 
// y de ahí seguimos con el proyecto