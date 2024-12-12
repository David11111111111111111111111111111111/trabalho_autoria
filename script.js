// Mensagem de boas-vindas ao carregar a página inicial
document.addEventListener('DOMContentLoaded', function () {
    alert("Bem-vindo ao portfólio de João Silva!");
});

// Validação básica do formulário de contato
document.querySelector('#formContato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
        document.querySelector('#formContato').reset();
    }
});
