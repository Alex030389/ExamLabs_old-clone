let animRotate = document.querySelector('.comments__form-verification-circle');

if(animRotate) {
    animRotate.addEventListener('click', function (e) {
        e.preventDefault();
        animRotate.classList.toggle('comments__form-verification-circle--active');
    });
}

$('.trainig-course-general__vendor').slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: .5,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: .5,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: .5,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        }
    ]
});



