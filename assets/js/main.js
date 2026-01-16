$(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 600);
        }
    });

    $('.show-paints').on('click', function () {

        const btn = $(this);
        const box = $('.paints-box');

        box.slideToggle();

        const btnOffset = btn.offset().left + btn.outerWidth() / 2;
        const boxOffset = box.offset().left;

        const arrowLeft = btnOffset - boxOffset - 12;

        box.find('.paints-arrow').css('left', arrowLeft + 'px');
    });


    $('.convert').on('click', function () {
        const priceEl = $(this).siblings('.price');

        const rub = parseInt(priceEl.data('rub'));
        const usd = Math.round(rub / 90);

        if (priceEl.text().includes('₽')) {
            priceEl.text('$ ' + usd);
        } else {
            priceEl.text(rub.toLocaleString('ru-RU') + ' ₽');
        }
    });

    $('.faq-question').on('click', function () {
        const item = $(this).closest('.faq-item');
        const question = $(this);

        $('.faq-item').not(item).removeClass('active').find('.faq-answer').slideUp();
        $('.faq-question').not(question).removeClass('active');

        item.toggleClass('active');
        question.toggleClass('active');
        item.find('.faq-answer').slideToggle();
    });
});
