$(function () {

    $('.service__more').on('click', function () {
        let targName = $(this).attr('data-targ');
        $(`.wrap-modal[data-name="${targName}"]`).fadeIn();

    })

    $('.modal__close').on('click', function () {
        $('.wrap-modal').fadeOut();
    })
    $('.reviews').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.reviews__prev'),
        nextArrow: $('.reviews__next'),
        asNavFor: '.reviews__dots',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,

                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
    },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]

    });

    $('.reviews__dots').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        asNavFor: '.reviews',
    });


    $('.quest__head').on('click', function () {
        $(this).parent('.quest').toggleClass('quest_open').find('.quest__answer').slideToggle();

    });
    $('.btn-ask').on('click', function () {
        $('.wrap-modal-ask').fadeIn();
    })
})
