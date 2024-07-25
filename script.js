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
        items: 1,
        loop: true,              // Loop infinito
        margin: 10,              // Margem entre os itens
        nav: true
        // autoplay: true,         
        // autoplayTimeout: 3000,  
        // autoplayHoverPause: true 
    });
});