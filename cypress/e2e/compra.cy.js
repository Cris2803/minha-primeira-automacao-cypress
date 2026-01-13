describe('Fluxo de Compra no Sauce Demo', () => {

    it('Deve realizar uma compra do início ao fim com sucesso', () => {
        // 1. Login usando seu comando customizado
        cy.login('standard_user', 'secret_sauce')

        // 2. Validar que estamos na página de produtos
        cy.get('.title').should('contain', 'Products')

        // 3. Adicionar um produto ao carrinho (Mochila)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        // 4. Ir para o carrinho
        cy.get('.shopping_cart_link').click()
        cy.get('.title').should('contain', 'Your Cart')

        // 5. Clicar em Checkout
        cy.get('[data-test="checkout"]').click()

        // 6. Preencher dados de entrega (Informações fictícias)
        cy.get('[data-test="firstName"]').type('Cris')
        cy.get('[data-test="lastName"]').type('Cordeiro')
        cy.get('[data-test="postalCode"]').type('12345678')

        // 7. Continuar
        cy.get('[data-test="continue"]').click()

        // 8. Validar resumo e Finalizar
        cy.get('.title').should('contain', 'Checkout: Overview')
        cy.get('[data-test="finish"]').click()

        // 9. VALIDAÇÃO FINAL: Verificar mensagem de sucesso
        cy.get('.complete-header').should('be.visible').and('contain', 'Thank you for your order!')
    })
})