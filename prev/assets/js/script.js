var header_scroll = function(header_position, header_height) {
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > header_position) {
            $('.header').addClass('is-sticky');
            $('.body').css('padding-top', header_height);
        }
        else {
            $('.header').removeClass('is-sticky');
            $('.body').css('padding-top', 0);
        }
    });
}

function header_sticky() {
    var header_position, header_height = $('.header').outerHeight();
    setTimeout(function(){
        header_position = $('.header').outerHeight();
        header_scroll(header_position, header_height);
    }, 1000);

    $('.main-menu .menu-item a').on('click', function() {
        // event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top - $('.header').height(),
        }, 1000);
    });

    setTimeout(function(){
        if ($('.preview__header').length) {
            $('.preview__action--close a').trigger( "click" );
        }
    }, 300);
}

function header_sidebar() {
    $('#nav-menu-icon .icon-nav').on('click', function() {
        $('.bg-overlay').removeClass('hidden');
        $('.header-sidebar').removeClass('hidden');
    });

    $('.header-sidebar .close-menu').on('click', function() {
        $('.bg-overlay').addClass('hidden');
        $('.header-sidebar').addClass('hidden');
    });

    $('.bg-overlay').on('click', function() {
        $('.bg-overlay').addClass('hidden');
        $('.header-sidebar').addClass('hidden');
    });

}

function scrollImage_hover() {
    $('.theme-demo:not(.theme-comming-soon)')
        .mouseenter(function() {
            var height = $(this).find('.image-wrapper').height() - $(this).find('.image-wrapper img').height();
            if(height < 0 ) {
                $(this).find('.image-wrapper img').css('transform', 'translateY('+height+'px)');
            }
        })
        .mouseleave(function() {
            $(this).find('.image-wrapper img').css('transform', 'translateY(0)');
        });
};

function back_to_top() {
    var offset = $(window).height()/2;
    const backToTop = $('#back-to-top');

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible');
    });

    backToTop.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
}

function slick_slider() {
    $('.themevale_mutipleLayout').slick({
        speed: 1000,
        fade: true,
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: "<svg id='icon-slick-next' class='slick-next slick-arrow' viewBox='0 0 47.255 47.255'><g><path d='M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>", 
        prevArrow: "<svg id='icon-slick-prev' class='slick-prev slick-arrow' viewBox='0 0 47.255 47.255'><g><path d='M34.941,47.255c-0.256,0-0.512-0.098-0.707-0.293L11.607,24.334c-0.391-0.391-0.391-1.023,0-1.414L34.234,0.293 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-21.92,21.92l21.92,21.92c0.391,0.391,0.391,1.023,0,1.414 C35.453,47.157,35.197,47.255,34.941,47.255z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>",
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });

    $('.themevale_mutipleChildtheme').slick({
        speed: 700,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        nextArrow: "<svg id='icon-slick-next' class='slick-next slick-arrow' viewBox='0 0 47.255 47.255'><g><path d='M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>", 
        prevArrow: "<svg id='icon-slick-prev' class='slick-prev slick-arrow' viewBox='0 0 47.255 47.255'><g><path d='M34.941,47.255c-0.256,0-0.512-0.098-0.707-0.293L11.607,24.334c-0.391-0.391-0.391-1.023,0-1.414L34.234,0.293 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-21.92,21.92l21.92,21.92c0.391,0.391,0.391,1.023,0,1.414 C35.453,47.157,35.197,47.255,34.941,47.255z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>",
        responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    $('.themevale_review').slick({
        speed: 700,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      ]
    });

    $('.themevale_store').slick({
        speed: 700,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '290px',
        responsive: [
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '380px'
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '320px'
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
      ]
    });
}

function owlCarousel() {
    if ($(window).width() > 1025) {
        $(".themevale_app").owlCarousel({
            items: 7,
            rewindNav: false,
            addClassActive: true,
            mouseDrag: true,
            slideSpeed: 700,
            afterAction: 
                function add_mid_class(el){
                    $('.owl-item')                     
                        .removeClass('middle')
                        .removeClass('middle_beside')
                        .removeClass('next_to_mid')
                        .removeClass('next_to_mid2')
                        .removeClass('prev_to_mid')
                        .removeClass('prev_to_mid2');
                    var middle_item = Math.floor($('.active').length / 2);
                    // middle_item --;
                    $('.active').eq(middle_item).addClass('middle');
                    $('.active').eq(middle_item + 1).addClass('middle_beside');
                    $('.active').eq(middle_item + 2).addClass('next_to_mid');
                    $('.active').eq(middle_item + 2).nextAll().addClass('next_to_mid2');
                    $('.active').eq(middle_item - 1).addClass('middle_beside');
                    $('.active').eq(middle_item - 2).addClass('prev_to_mid');
                    $('.active').eq(middle_item - 2).prevAll().addClass('prev_to_mid2');
                }
        });
        var owl = $(".themevale_app").data('owlCarousel');
        $('.themevale_app_wrapper .next').click(function(){owl.next();});
        $('.themevale_app_wrapper .prev').click(function(){owl.prev();});
    }

    if ($(window).width() <= 1024) {
        stopCarousel();
        $(".themevale_app").removeClass("owl-carousel");
        $(".themevale_app").slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0,
            prevArrow: '<div class="prev slick-arrow"><svg x="0px" y="0px" viewBox="0 0 512.006 512.006"><g><g><path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"/> </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
            nextArrow: '<div class="next slick-arrow"><svg x="0px" y="0px" viewBox="0 0 512.005 512.005"><g><g><path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"/> </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
            responsive: [
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '80px'
                }
            }
            ]
        });
    }

    function stopCarousel() {
        var owl = $('.themevale_app');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }
}

function wow_animation() {
    new WOW().init();
}
function linkScroll(){
    var linkScroll = $(".homepage-banner .button-group .button.btn-biscover")
    linkScroll.on('click', function(event){
        event.preventDefault();
        var block = $(this).attr('href'),
            height = $('.header-transparent').height() + 30;
        console.log('test');
        $('html, body').animate({
            scrollTop: $(block).offset().top - height,
        }, 700);  
    });
}
$(document).ready(function() {
    header_sticky();
    header_sidebar();
    scrollImage_hover();
    slick_slider();
    back_to_top();
    wow_animation();
    owlCarousel();
    linkScroll();
});

window.onload = function() {
    if ($(window).scrollTop() > $(window).height()) {
        $('.header').addClass('is-sticky');
    }

    setTimeout(function(){
        if ($('.preview__header').length) {
            $('.preview__action--close a').trigger( "click" );
        }
    }, 300);
};