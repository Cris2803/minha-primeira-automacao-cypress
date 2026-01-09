describe('Jornada do usuário no Sauce Demo', () => {
  
  // Prepara o ambiente fazendo login antes de cada teste
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Deve adicionar uma mochila ao carrinho com sucesso', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    // Valida que o ícone do carrinho mostra 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('Deve remover a mochila do carrinho com sucesso', () => {
    // Adiciona e depois remove
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    
    // Valida que o indicador de itens no carrinho sumiu
    cy.get('.shopping_cart_badge').should('not.exist')
  })

})