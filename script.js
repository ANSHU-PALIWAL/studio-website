AOS.init();


// slider js start //
$('.img-slider1').owlCarousel({
    rtl:true,
    loop:true,
    dots:false,
    margin:25,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:false,
        },
        1000:{
            items:5,
            nav:false,
            
        }
    }
});

$('.img-slider2').owlCarousel({
    ltr:true,
    loop:true,
    dots:false,
    margin:25,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            
        }
    }
});
// slider js end //



// blog slider //
$('.blog-slider').owlCarousel({
    loop:true,
    dots:true,
    margin:25,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            
        }
    }
});
// blog slider //



// back to top
var btn = $('#button-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
// back to top