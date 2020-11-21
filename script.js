$(document).ready(function(){
    /*html window jokhon scroll kora hobe */
    $(window).scroll(function(){
        if(this.scrollY > 20){  
            /*this.scrollY is window.scrollY that means vertical pixel of the window 
            when gets scrolled/ vertically koto piexel scroll kora hoise*/
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    /*toggle the menu icon */
    $('.menubar-icon').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menubar-icon i').toggleClass('active')
    })

 // slide-up script

 $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["programmer", "Designer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["programmer", "Designer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})