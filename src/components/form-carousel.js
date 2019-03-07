

document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        var carousel = $('.steps-carousel');
        var prevButton = $('.form-slider-button--prev');
        var nextButton = $('.form-slider-button--next');
        var submitButton = $('.form-slider-submit');

        prevButton.hide();
        submitButton.hide();

        carousel.slick({
            infinite: false,
            fade: true,
            prevArrow: prevButton,
            nextArrow: nextButton
        });


        carousel.on('afterChange', function(){
            carousel.slick('slickCurrentSlide') > 0 ? prevButton.show() : prevButton.hide();
            carousel.slick('slickCurrentSlide') === 2 ? nextButton.hide() : nextButton.show();
            carousel.slick('slickCurrentSlide') === 2 ? submitButton.show() : submitButton.hide();

        });
    });
});
