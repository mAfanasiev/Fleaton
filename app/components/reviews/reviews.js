$('.reviews__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    variableWidth: true,
    prevArrow: $('.reviews__arrow_left'),
    nextArrow: $('.reviews__arrow_right'),
    centerMode: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.icon-more').click(function(){
   $(this).siblings('.reviews__text').toggleClass('active');
});

$('.reviews__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.reviews__text').removeClass('active');
});