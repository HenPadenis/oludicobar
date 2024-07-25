$(document).ready(function() {
    // Adiciona a classe 'loaded' quando o DOM estiver pronto
    $('.subtitulo').addClass('loaded');

    // Alterna a classe 'active' no botão de menu e abre/fecha o menu
    $('.toggle-menu').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
    });

    // Alterna a classe 'active' no botão sobre e fecha o menu
    $('.btn-sobre').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('closed');
    });

    // Inicializa o Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1, // Quantidade de itens visíveis
        loop: true, // Habilitar looping
        margin: 10, // Espaço entre os itens
        nav: true, // Habilitar navegação
        dots: true, // Habilitar indicadores
        autoplay: true, // Habilitar autoplay
        autoplayTimeout: 3000, // Intervalo do autoplay
        autoplayHoverPause: true, // Pausar autoplay ao passar o mouse
        navText: ["<div class='nav-btn prev-slide'>&#10094;</div>", "<div class='nav-btn next-slide'>&#10095;</div>"]
      });
});