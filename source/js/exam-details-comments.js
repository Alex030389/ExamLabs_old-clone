$(".content-microsoft__container-slider-responsive").slick({
    autoplay: false,
    dots: false,
    infinite: false,
    prevArrow: $('.arrow-link-right'),
    nextArrow: $('.arrow-link-left'),
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
    },
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

var $status = $('.pagingInfo');
var $slickElement = $('.content-microsoft__container-slider-responsive');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
    slide: 'img',
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
});






