document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('access-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário

        // Coleta dos dados (você precisará de um backend para realmente salvá-los)
        const data = {
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            instaUser: document.getElementById('insta-user').value,
            instaPass: document.getElementById('insta-pass').value,
            faceUser: document.getElementById('face-user').value,
            facePass: document.getElementById('face-pass').value,
        };

        // Simulação de envio com confirmação
        alert(
            "Dados de Acesso Enviados com Sucesso!\n\n" +
            "A Agência Impulso.Digital agradece! Entraremos em contato via WhatsApp em breve para confirmar o recebimento e iniciar o seu serviço.\n\n" +
            "Email: " + data.email
        );
        
        // Limpa o formulário após o "envio"
        form.reset();
    });
});