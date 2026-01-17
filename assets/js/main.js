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

    $('.material-btn').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const parent = $(this).closest('.material-paints');

        $('.material-paints').not(parent).removeClass('active');
        $('.material-btn').not(this).removeClass('active');

        parent.toggleClass('active');
        $(this).toggleClass('active');
    });


    $(document).on('click', function () {
        $('.material-paints').removeClass('active');
        $('.material-btn').removeClass('active');
    });


    const USD_RATE = 70;

    $('.currency-code-btn').on('click', function () {

        const btn = $(this);
        const code = btn.data('code');

        const card = btn.closest('.tariff-card');

        card.find('.currency-code-btn').removeClass('active');
        btn.addClass('active');

        card.find('.price, .old-price').each(function () {

            const rub = parseInt($(this).data('rub'), 10);

            if (code === 'USD') {
                const usd = Math.round(rub / USD_RATE);
                $(this).text(usd + ' $');
            } else {
                $(this).text(rub.toLocaleString('ru-RU') + ' ₽');
            }

        });
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
