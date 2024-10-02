// Distância em pixels a partir do topo onde o botão aparecerá
const scrollThreshold = 1060; // Alterar esse valor conforme necessário

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        backToTopBtn.style.display = 'block'; // Mostra o botão
    } else {
        backToTopBtn.style.display = 'none'; // Esconde o botão
    }
});

// Adicionando uma ação para o botão voltar ao topo
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});