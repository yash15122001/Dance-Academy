// Get the current year for the copyright
$('#year').text(new Date().getFullYear());


//Configure Slider
$('.carousel').carousel({
    interval: 5000,
    pause: "False"
});

// Video Play
$(function () {
    // Auto play modal video
    $('.video').on('click', function () {
        var theModal = $(this).data('target'),
            videoSRC = $(this).attr('data-video'),
            videoSRCauto =
                videoSRC +
                '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('click', function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});

// Lightbox Init
$(document).on(
    'click',
    '[data-toggle="lightbox"]',
    function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    }
);

//hide navbar on scroll
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
        $('#og').fadeOut();
    } else {
        $('#og').fadeIn();
    }
});


//Init slick slider
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
});





