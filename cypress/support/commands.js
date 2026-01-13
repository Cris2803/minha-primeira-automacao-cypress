// Este arquivo serve para criar comandos que você repete muito
// O comando 'login' poderá ser usado em qualquer teste agora

Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://www.saucedemo.com/') // Abre o site
    
    // Preenche o campo de usuário usando o argumento 'usuario'
    cy.get('[data-test="username"]').type(usuario)
    
    // Preenche o campo de senha usando o argumento 'senha'
    cy.get('[data-test="password"]').type(senha)
    
    // Clica no botão de login
    cy.get('[data-test="login-button"]').click()
})