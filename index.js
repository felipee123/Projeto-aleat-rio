document.getElementById('home').addEventListener('click', function() {
    document.getElementById('welcomeMessage').textContent = 'Bem-vindo à página inicial!';
    document.getElementById('aboutTab').style.display = 'none';
    document.getElementById('contactTab').style.display = 'none';
});

document.getElementById('about').addEventListener('click', function() {
    document.getElementById('welcomeMessage').textContent = 'Saiba mais sobre nós!';
    document.getElementById('aboutTab').style.display = 'block';
    document.getElementById('contactTab').style.display = 'none';
});

document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('welcomeMessage').textContent = 'Entre em contato conosco!';
    document.getElementById('aboutTab').style.display = 'none';
    document.getElementById('contactTab').style.display = 'block';
});

// Adicionando a funcionalidade de enviar o formulário de contato (pode ser implementado em JavaScript)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar lógica para enviar o formulário
    // Por exemplo, você pode usar AJAX para enviar os dados para um servidor
    alert('Mensagem enviada com sucesso!');
    // Limpar os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});