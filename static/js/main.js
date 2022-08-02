$(function () {

    let headerTop = $('.header-top');
    let header = $('.header');
    let menu = $('.menu');
    let body = $('body');
    //    $(window).on('scroll', function () {
    //        if ($(this).scrollTop() > 300) {
    //            headerTop.addClass(' header-top_fixed');
    //            header.css('margin-top', '100px');
    //            menu.addClass('menu_2').removeClass('menu_active');
    //
    //        } else {
    //            headerTop.removeClass(' header-top_fixed');
    //            header.css('margin-top', '0');
    //            menu.removeClass('menu_2');
    //        }
    //    })


    $('.mob-menu-btn').on('click', function () {
        menu.slideDown();
        body.addClass('body_menu');

    })

    $('.menu__close').on('click', function () {
        menu.slideUp();
          body.removeClass('body_menu');
    })
    $(window).on('resize', function () {
        if ($(this).width() > 1000) {
            menu.show()
        }
    })
}
)
