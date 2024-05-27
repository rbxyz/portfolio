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

// NAV BAR

let marker = document.querySelector('#indicator');
            let nav = document.querySelector('nav');
            let item = document.querySelectorAll('nav a');
    
            nav.onclick = function(){
                marker.classList.toggle('change');
            }
                function indicator(e){
                    marker.style.left = e.offsetLeft+"px";
                    marker.style.width=e.offsetWidth+"px";
                    marker.style.display="block";
                    marker.style.filter='hue-rotate('+Math.random() * 360 +'deg)';
                    
                }
            item.forEach(link =>{
                link.addEventListener("click", (e) =>{
                    indicator(e.target);
                })
            })
           function addActiveClass(){
            item.forEach((i) => 
            i.classList.remove("active"));
            this.classList.add('active')
           }
           item.forEach((i) =>
           i.addEventListener("click", addActiveClass));

// ANIMAÇÃO FLUÍDA ROLAGEM
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.pf-top').offsetHeight,
                behavior: 'smooth'
            });

            // Animação de feedback visual ao clicar
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
