var $status = $('.pagingInfo');
var $slickElement = $('.content-microsoft__container-slider-down-page');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

//slider main
$(".content-microsoft__container-slider-down-page").slick({
    dots: true,
    arrows: true,
    infinite: false,
    prevArrow: $('.arrow-link-right'),
    nextArrow: $('.arrow-link-left'),
});

var swiper = new Swiper('.slider4', {
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
    1200: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    992: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    600: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    480: {
        slidesPerView: 1,
        spaceBetween: 10,
    }
    }
});

//popup download 
let popupDownload = document.getElementById('popupDownload');
let modalDownloadPpage = document.querySelector('.modal-download-page');
let popupCloseButton = document.getElementById('popupCloseButton');

if (popupDownload) {
    popupDownload.addEventListener('click', function(e) {
        e.preventDefault();
    
        modalDownloadPpage.classList.toggle('modal-download-page--active');
        body.classList.toggle('body--modal');
    });
    
    if (popupCloseButton) {
        popupCloseButton.addEventListener('click', function(e) {
            e.preventDefault();
        
            modalDownloadPpage.classList.remove('modal-download-page--active');
            body.classList.remove('body--modal');
        });
    }
}














