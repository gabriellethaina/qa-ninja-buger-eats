describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900) //ajustar resolução 
        cy.visit('https://buger-eats.vercel.app') //acessar url do site
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})