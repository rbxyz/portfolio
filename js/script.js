// animacao de entrada ao rolar para baixo

document.addEventListener("DOMContentLoaded", function() {
    // seleciona todas as seções presentes no documento HTML
    const sections = document.querySelectorAll("section");

    // define uma função chamada fadeNasSecoes
    const fadeNasSecoes = function() {
        // pra cada seção encontrada
        sections.forEach(section => {
            // verifica se o topo da seção está visível na janela de visualização
            if (window.scrollY + window.innerHeight > section.offsetTop) {

                // adc a classe "fadeIn" na seção para aplicar uma animação de fade-in
                section.classList.add("fadeIn");
            }
        });
    };
    fadeNasSecoes();

    // adc um ouvinte de evento de rolagem à janela para animar as seções à medida que o usuário rola para baixo na página
    document.addEventListener("scroll", fadeNasSecoes);
});
