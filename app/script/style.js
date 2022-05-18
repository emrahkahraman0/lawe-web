//JS

$(document).ready(function(){

    //Lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
    });

    //Menu
    $(function () {
        $('.hamburger').on('click', function () {
            $('.toggle').toggleClass('open');
            $('.menu').toggleClass('open');
        });
    });

    //Dropdown
    $('.menu li > a').on('click', function (event) {
        event.preventDefault();

        const $this = $(this);
        const $dropdown = $this.next('.dropdown');

        $('.dropdown').removeClass('active');
        $dropdown.addClass('active');
    });

    //Menu-Active
    jQuery(function($) {
        var path = window.location.href;
        $('ul li a').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });

    //Menu-Scroll
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed')
        }
    });

    //Home_Slider
    $('.home_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //Home-Counter
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //Home_Clients
    $('.home_clients').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            },
            1400:{
                items:2
            },
            1600:{
                items:2
            }
        }
    });

    //Brands
    $('.brands').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:4
            },
            1600:{
                items:4
            }
        }
    });

    //Skill_Bar
    $(".skills").addClass("active")
    $(".skills .skill .skill-bar span").each(function() {
    $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
    }, 1000);
    $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
    $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
    }, 2000);

    //Our_Faqs_İtem
    var acc = document.getElementsByClassName("faq_heading");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    //Practice_Clients
    $('.practice_clients').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            },
            1400:{
                items:1
            },
            1600:{
                items:1
            }
        }
    });

    //Scroll-Reveal
    ScrollReveal().reveal('#top_header, #header, #footer', { delay: 500 });
    ScrollReveal().reveal('#home_slider, #home_counter, #home_practices, #home_clients, #brands, #home_attorneys, #home_statement, #home_blog, #informations, #about_page, #about_info, #about_weAre, #attorneys_page, #attorneys_ceo, #attorneys_meets, #attorneys_single_page, #attorneys_details, #school_work, #skills_awards, #caseStudy_page, #our_caseStudy, #caseStudy_single_page, #caseStudy_single, #contact_page, #contact_map, #our_contact, #faqs_page, #our_faqs, #historys_page, #our_historys, #practiceAreas_page, #practices_areas, #practice_clients, #practiceAreas_single_page, #practiceAreas_single', { delay: 300 });

});