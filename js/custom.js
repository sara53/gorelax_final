$(document).ready(function(){
    new WOW().init();
    // $('.carousel').carousel({
    //     interval: 2000
    //   })
    $("#owl-example").owlCarousel({
        autoPlay : true
    
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        rtl:true,
        ltr:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('#menu li').click(function() {
      
    });

});
