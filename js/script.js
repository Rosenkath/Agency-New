$(document).ready(function(){
    $('#nav-toggle').click(function(e){
       e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    })
    //Caroulsel Principal
    $('.owl-carousel').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10,
        nav: true,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true
    });
});