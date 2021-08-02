$(document).ready(function(){
    $('#nav-toggle').click(function(e){
       e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    })
    //Caroulsel Principal
    $('#carousel-principal').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10,
        nav: true,
        navSpeed:1000,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });
        //carousel testemunhas
    $('#carousel-testemunhas').owlCarousel({
        items:1,
        loop:true,
        margin:40,
        nav: false,
        navSpeed:1000,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive:{
            960:{
                items:2
            },
            1280:{
                items:2,
                nav: true
            }
        }
    });
});