$(function () {
    $('.service').on('click', function () {
        let targName = $(this).attr('data-targ');
        $(`.wrap-modal[data-name="${targName}"]`).fadeIn();

    });
     $('.modal__close').on('click', function () {
        $('.wrap-modal').fadeOut();
    });
})
