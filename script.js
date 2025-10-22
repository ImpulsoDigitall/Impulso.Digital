document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os links do menu que apontam para uma âncora (#)
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    function smoothScroll(e) {
        // Previne o comportamento padrão de pular direto para a âncora
        e.preventDefault();

        // Pega o ID da seção (ex: '#planos') a partir do link clicado
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Calcula a posição da seção na página
            const offsetTop = targetSection.offsetTop;

            // Rola a janela suavemente até essa posição
            window.scrollTo({
                top: offsetTop - 80, // Subtrai 80px para compensar a altura do menu fixo
                behavior: 'smooth'
            });
        }
    }

    // Adiciona o 'escutador' de clique para cada link do menu
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Adiciona o mesmo comportamento para os botões principais
    const ctaLinks = document.querySelectorAll('.hero a[href^="#"], .plan-card a[href^="#"]');
    ctaLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
});