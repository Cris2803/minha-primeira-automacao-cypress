describe('Testes de Login Negativo', () => {

    // Antes de cada teste, vamos garantir que estamos na página inicial
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Deve exibir erro ao tentar logar com usuário bloqueado', () => {
        // Usamos o comando customizado que criamos no commands.js
        cy.login('locked_out_user', 'secret_sauce')

        // VALIDAÇÃO: Verifica se a mensagem de erro contém o texto específico
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Deve exibir erro ao digitar senha incorreta', () => {
        // Tentamos logar com uma senha qualquer
        cy.login('standard_user', 'senha_errada')

        // VALIDAÇÃO: Verifica se o erro de senha inválida aparece
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', 'Username and password do not match any user in this service')
    })
})